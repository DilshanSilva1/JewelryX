package com.ecom.productcatalog.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor

    public class CategoryDTO {
        private Long id;
        private String name;
        private Set<ProductDTO> products;


}
