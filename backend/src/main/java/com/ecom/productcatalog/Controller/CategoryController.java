package com.ecom.productcatalog.Controller;

import com.ecom.productcatalog.DTO.CategoryDTO;
import com.ecom.productcatalog.Entities.CategoryEntity;
import com.ecom.productcatalog.Service.CategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173/")
public class CategoryController {
   private final CategoryService categoryService ;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @GetMapping
    public List<CategoryDTO> getAllCategories() {
        return categoryService.getAllCategories();
    }
}
