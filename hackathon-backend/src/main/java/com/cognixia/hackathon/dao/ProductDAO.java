package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.Product;

public interface ProductDAO extends JpaRepository<Product, Integer>{
	List<Product> findAll();
	Product findByProductId(int productId);
}
