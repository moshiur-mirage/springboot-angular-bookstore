import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  previousCategory: number = 1;

  // new properties for server side paging.
  currentPage: number = 1;

  //this set the number of item in each page
  pageSize: number = 5;
  totalRecords: number = 0;

  constructor(
    private _bookService: BookService,
    private _activatedRoute: ActivatedRoute,
    _config: NgbPaginationConfig
  ) {
    _config.maxSize=3;
    _config.boundaryLinks=true;
  }

  ngOnInit(): void {
    this.listBooks();
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      //search
      this.handleSearchBooks();
    } else {
      //  display books based on category
      this.handleListBooks();
    }
  }

  handleListBooks() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has(
      'id'
    );
    if (hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get(
        'id'
      );
    } else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategory != this.currentCategoryId) {
      this.currentPage = 1;
    }
    this._bookService
      .getBooks(this.currentCategoryId, this.currentPage - 1, this.pageSize)
      .subscribe(this.processPaginate());
  }

  handleSearchBooks() {
    const keyword: string = this._activatedRoute.snapshot.paramMap.get(
      'keyword'
    );
    this._bookService.searchBooks(keyword).subscribe((data) => {
      this.books = data;
    });
  }

  updatePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.listBooks();
  }

  processPaginate() {
    //get data from service
    return (data) => {
      //extract data from response.....
      this.books = data._embedded.books;
      //page num starts from 1 in ngbootstrap but from 0 in backend
      // assign value in currentpage
      this.currentPage = data.page.number + 1;
      //extract total number of records
      this.totalRecords = data.page.totalElements;
      // extract page size and assign
      this.pageSize = data.page.size;
    };
  }
}
