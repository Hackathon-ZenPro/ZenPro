package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.Order;

public interface OrderDAO extends JpaRepository<Order, Integer>	{
	List<Order> findAll();
}
