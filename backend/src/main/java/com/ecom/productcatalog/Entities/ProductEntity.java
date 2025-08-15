package com.ecom.productcatalog.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String imageURL;
    private Double price;

    //linking to categories
    @ManyToOne
    @JoinColumn(name= "category_id", nullable = false)
    @JsonBackReference
    private CategoryEntity category;
}
