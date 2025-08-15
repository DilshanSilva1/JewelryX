package com.ecom.productcatalog.Controller;


import com.ecom.productcatalog.DTO.ProductDTO;
import com.ecom.productcatalog.Entities.ProductEntity;
import com.ecom.productcatalog.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {


    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<ProductDTO> getAllProductsByCategory(@PathVariable Long categoryId) {
        return productService.getAllProductsByCategoryId(categoryId);
    }

}
