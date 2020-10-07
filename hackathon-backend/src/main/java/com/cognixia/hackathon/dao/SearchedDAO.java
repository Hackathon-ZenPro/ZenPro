package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.Searched;

public interface SearchedDAO extends JpaRepository<Searched, Integer>{
	List<Searched> findAll();

}
