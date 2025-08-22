package com.ecom.productcatalog.Controller;

import com.ecom.productcatalog.DTO.ProductDTO;
import com.ecom.productcatalog.Entities.CategoryEntity;
import com.ecom.productcatalog.Service.ProductService;
import com.ecom.productcatalog.Repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173",  methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class ProductController {

    private final ProductService productService;
    private final CategoryRepository categoryRepository;

    public ProductController(ProductService productService, CategoryRepository categoryRepository) {
        this.productService = productService;
        this.categoryRepository = categoryRepository;
    }

    // get all products
    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    // get products by category
    @GetMapping("/category/{categoryId}")
    public List<ProductDTO> getAllProductsByCategory(@PathVariable Long categoryId) {
        return productService.getAllProductsByCategoryId(categoryId);
    }

    // create new product by POST REQUEST
    @PostMapping
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO) {
        CategoryEntity category = categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        return productService.addProduct(productDTO, category);
    }

    // delete request deleting a product.
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
