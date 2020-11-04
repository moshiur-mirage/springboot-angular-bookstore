package com.moshiur.bookstore.book;

import com.moshiur.bookstore.category.BookCategory;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="tbl_book")
@Setter
@Getter
@ToString
public class Book {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String sku;
    @Column
    private String name;
    @Column
    private String description;
    @Column(name="unit_price")
    private BigDecimal unitPrice;
    @Column(name="image_url")
    private String imageUrl;
    @Column
    private boolean active;
    @Column(name="units_in_stock")
    private int unitsInStock;
    @Column(name="date_created")
    private Date createdOn;
    @Column(name="last_updated")
    private Date updatedOn;

    @ManyToOne
    @JoinColumn(name="category_id",nullable = false)
    private BookCategory category;

}
