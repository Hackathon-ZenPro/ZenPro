package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.Viewed;

public interface ViewedDAO extends JpaRepository<Viewed, Integer> {
	List<Viewed> findAll();
}
