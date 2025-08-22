package com.ecom.productcatalog.Service;

import com.ecom.productcatalog.DTO.CategoryDTO;
import com.ecom.productcatalog.DTO.ProductDTO;

import com.ecom.productcatalog.Entities.CategoryEntity;
import com.ecom.productcatalog.Entities.ProductEntity;
import com.ecom.productcatalog.Repository.CategoryRepository;
import com.ecom.productcatalog.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository,CategoryRepository categoryRepository) {

        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }


    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ProductDTO> getAllProductsByCategoryId(Long categoryId) {
        return productRepository.findByCategoryId(categoryId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ProductDTO convertToDTO(ProductEntity product) {
        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getImageURL(),
                product.getCategory() != null ? product.getCategory().getId() : null,
                product.getCategory() != null ? product.getCategory().getName() : null
        );
    }
    //  Add Product
    public ProductDTO addProduct(ProductDTO productDTO, CategoryEntity category) {
        ProductEntity product = new ProductEntity();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setImageURL(productDTO.getImageURL());
        product.setCategory(category);

        ProductEntity saved = productRepository.save(product);
        return convertToDTO(saved);
    }

    //  Delete Product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    }

