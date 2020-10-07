package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zorders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int entryId;
	private int userId;
	private int productId;
	private int productQuantity;
	private String productSize;
	
	public Order(int entryId, int userId, int productId, int productQuantity, String productSize) {
		super();
		this.entryId = entryId;
		this.userId = userId;
		this.productId = productId;
		this.productQuantity = productQuantity;
		this.productSize = productSize;
	}
	public Order() {
		super();
	}
	public int getEntryId() {
		return entryId;
	}
	public int getUserId() {
		return userId;
	}
	public int getProductId() {
		return productId;
	}
	public int getProductQuantity() {
		return productQuantity;
	}
	public String getProductSize() {
		return productSize;
	}
	public void setEntryId(int entryId) {
		this.entryId = entryId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}
	public void setProductSize(String productSize) {
		this.productSize = productSize;
	}
	@Override
	public String toString() {
		return "Order [entryId=" + entryId + ", userId=" + userId + ", productId=" + productId
				+ ", productQuantity=" + productQuantity + ", productSize=" + productSize + "]";
	}
}
