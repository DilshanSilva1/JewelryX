package com.ecom.productcatalog.DTO;

import com.ecom.productcatalog.Entities.CategoryEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private double price;
    private String imageURL;
    private Long categoryId;
    private String categoryName;


}
