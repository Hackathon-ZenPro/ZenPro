package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zsearched")
public class Searched {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int searchId;
	private int userId;
	private int productId;
	
	public Searched(int searchId, int userId, int productId) {
		super();
		this.searchId = searchId;
		this.userId = userId;
		this.productId = productId;
	}
	public Searched() {
		super();
	}
	public int getSearchId() {
		return searchId;
	}
	public int getUserId() {
		return userId;
	}
	public int getProductId() {
		return productId;
	}
	public void setSearchId(int searchId) {
		this.searchId = searchId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "Searched [searchId=" + searchId + ", userId=" + userId + ", productId=" + productId + "]";
	}
	
	
}

