package com.ecom.productcatalog.Service;

import com.ecom.productcatalog.DTO.CategoryDTO;
import com.ecom.productcatalog.DTO.ProductDTO;
import com.ecom.productcatalog.Entities.CategoryEntity;
import com.ecom.productcatalog.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryDTO> getAllCategories() {
        return categoryRepository.findAllWithProducts().stream()
                .map(cat -> {
                    Set<ProductDTO> products = cat.getProducts().stream()
                            .map(prod -> new ProductDTO(
                                    prod.getId(), prod.getName(),
                                    prod.getDescription(), prod.getPrice(),prod.getImageURL(),prod.getCategory().getId()
                            ))
                            .collect(Collectors.toSet());
                    return new CategoryDTO(cat.getId(), cat.getName(), products);
                })
                .collect(Collectors.toList());
    }

}
