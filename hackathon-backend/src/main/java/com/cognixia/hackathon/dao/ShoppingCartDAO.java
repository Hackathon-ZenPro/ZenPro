package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.ShoppingCart;

public interface ShoppingCartDAO extends JpaRepository<ShoppingCart, Integer>{
	List<ShoppingCart> findAll();
	
}
