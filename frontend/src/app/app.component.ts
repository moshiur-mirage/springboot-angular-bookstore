import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[] = [
    {
      sku: 'text-101',
      name: 'C# Crash course',
      description: 'Learn C# Programming Language',
      unitPrice: 800,
      imageUrl: 'assets/image/books/text-101,png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-102',
      name: 'Python Crash course',
      description: 'Learn C# Programming Language',
      unitPrice: 800,
      imageUrl: 'assets/image/books/text-101,png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text-103',
      name: 'Java Crash course',
      description: 'Learn C# Programming Language',
      unitPrice: 800,
      imageUrl: 'assets/image/books/text-101,png',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
  ];
}
