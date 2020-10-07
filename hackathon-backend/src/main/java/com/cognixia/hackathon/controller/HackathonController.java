package com.cognixia.hackathon.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javassist.NotFoundException;

import com.cognixia.hackathon.dao.OrderDAO;
import com.cognixia.hackathon.dao.ProductDAO;
import com.cognixia.hackathon.dao.SearchedDAO;
import com.cognixia.hackathon.dao.ShoppingCartDAO;
import com.cognixia.hackathon.dao.UserDAO;
import com.cognixia.hackathon.dao.ViewedDAO;
import com.cognixia.hackathon.model.Product;
import com.cognixia.hackathon.model.User;

@RestController
public class HackathonController {
	
	@Autowired
	UserDAO userRepo;
	@Autowired
	ProductDAO productRepo;
	@Autowired
	ShoppingCartDAO ShoppingCartRepo;
	@Autowired
	OrderDAO OrderRepo;
	@Autowired
	SearchedDAO SearchedRepo;
	@Autowired
	ViewedDAO ViewedRepo;
	
	//I only added dummy data into the User Table, the following function should print out 5 empty lists, but if you check
	//the URL you should see the dummy data I put in
	@GetMapping("/")
	public List <User> home() {
		System.out.println(productRepo.findAll());
		System.out.println(ShoppingCartRepo.findAll());
		System.out.println(OrderRepo.findAll());
		System.out.println(SearchedRepo.findAll());
		System.out.println(ViewedRepo.findAll());
		return userRepo.findAll();  //   http://localhost:8080/
	}
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}


	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable int id) throws NotFoundException {
		Optional<User> user = userRepo.findById(id);

		if(!user.isPresent())
			throw new NotFoundException("User with id=" + id +" cannot be found");

		return user.get();
	}


	
}
