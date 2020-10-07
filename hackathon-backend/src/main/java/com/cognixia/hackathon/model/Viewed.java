package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zviewed")
public class Viewed {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int viewId;
	private int userId;
	private int productId;
	
	public Viewed(int viewId, int userId, int productId) {
		super();
		this.viewId = viewId;
		this.userId = userId;
		this.productId = productId;
	}
	public Viewed() {
		super();
	}
	public int getSearchId() {
		return viewId;
	}
	public int getUserId() {
		return userId;
	}
	public int getProductId() {
		return productId;
	}
	public void setSearchId(int viewId) {
		this.viewId = viewId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "Viewed [viewId=" + viewId + ", userId=" + userId + ", productId=" + productId + "]";
	}
	
	
}
