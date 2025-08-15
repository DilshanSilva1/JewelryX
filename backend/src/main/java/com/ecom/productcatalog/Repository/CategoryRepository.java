package com.ecom.productcatalog.Repository;

import com.ecom.productcatalog.Entities.CategoryEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
    //passing datatype of entity category entity and datatype of primary key.
    @Query("SELECT c FROM CategoryEntity c JOIN FETCH c.products")
    List<CategoryEntity> findAllWithProducts();
}
