package com.ecom.productcatalog.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.Data;
import org.springframework.data.jpa.repository.EntityGraph;

import java.util.Set;

@Entity
@Data
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(cascade = CascadeType.ALL,//any updates on products will be cascaded in categories.
            mappedBy = "category",
            fetch = FetchType.LAZY )
    @JsonManagedReference
    private Set<ProductEntity> products;
}
