package com.ecom.productcatalog.Config;

import com.ecom.productcatalog.Entities.CategoryEntity;
import com.ecom.productcatalog.Entities.ProductEntity;
import com.ecom.productcatalog.Repository.CategoryRepository;
import com.ecom.productcatalog.Repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class dataSeeder implements CommandLineRunner {
    //clr helps run this code everytime it starts
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public dataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        //clear existing data and repopulate the tables each time
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        //create categories
        CategoryEntity rings = new CategoryEntity();
        rings.setName("Rings");

        CategoryEntity necklaces = new CategoryEntity();
        necklaces.setName("Necklaces");

        CategoryEntity earrings = new CategoryEntity();
        earrings.setName("Earrings");

        CategoryEntity anklets = new CategoryEntity();
        anklets.setName("Anklets");

        //save all the categories to the repository
        categoryRepository.saveAll(Arrays.asList(rings,necklaces,earrings,anklets));

        //creating the products
        ProductEntity diamondRing = new ProductEntity();
        diamondRing.setName("Diamond Ring");
        diamondRing.setDescription("Diamond Ring Solitaire");
        diamondRing.setImageURL("https://placehold.co/600x400");
        diamondRing.setPrice(1599.99);
        diamondRing.setCategory(rings);

        ProductEntity promiseRing = new ProductEntity();
        promiseRing.setName("Promise Ring");
        promiseRing.setDescription("Promise ring for engagements");
        promiseRing.setImageURL("https://placehold.co/600x400");
        promiseRing.setPrice(499.99);
        promiseRing.setCategory(rings);

        ProductEntity pendant = new ProductEntity();
        pendant.setName("Pendant");
        pendant.setDescription("Necklace with charm or pendant");
        pendant.setImageURL("https://placehold.co/600x400");
        pendant.setPrice(699.99);
        pendant.setCategory(necklaces);

        ProductEntity chain = new ProductEntity();
        chain.setName("Gold chain");
        chain.setDescription("Chain made of gold");
        chain.setImageURL("https://placehold.co/600x400");
        chain.setPrice(399.99);
        chain.setCategory(necklaces);

        ProductEntity locket = new ProductEntity();
        locket.setName("Silver locket");
        locket.setDescription("Locket made of Silver");
        locket.setImageURL("https://placehold.co/600x400");
        locket.setPrice(299.99);
        locket.setCategory(necklaces);

        ProductEntity earCuff = new ProductEntity();
        earCuff.setName("Ear cuff Earrings");
        earCuff.setDescription("Ear cuff type earring, silver");
        earCuff.setImageURL("https://placehold.co/600x400");
        earCuff.setPrice(99.99);
        earCuff.setCategory(earrings);


        ProductEntity goldAnklet = new ProductEntity();
        goldAnklet.setName("Gold anklet");
        goldAnklet.setDescription("Golden anklet footwear");
        goldAnklet.setImageURL("https://placehold.co/600x400");
        goldAnklet.setPrice(199.99);
        goldAnklet.setCategory(anklets);

        productRepository.saveAll(Arrays.asList(locket,earCuff,goldAnklet,diamondRing,pendant,chain,promiseRing));
    }
}
