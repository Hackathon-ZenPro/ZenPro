package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zproducts")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String imageUrl;
	private Double price;
	private Double discount;//Make this 0, not null, if there is no discount, which will be the case for most products
	private String productDescription; //This may become somewhat of a hassle when creating data for this project, might delete this if it's too much work
	private String gender;
	private String sport;
	
	public Product(int productId, String productName, String imageUrl, Double price, Double discount,
			String productDescription, String gender, String sport) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.imageUrl = imageUrl;
		this.price = price;
		this.discount = discount;
		this.productDescription = productDescription;
		this.gender = gender;
		this.sport = sport;
	}
	
	public Product() {
		super();
	}

	public int getProductId() {
		return productId;
	}

	public String getProductName() {
		return productName;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Double getPrice() {
		return price;
	}

	public Double getDiscount() {
		return discount;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public String getGender() {
		return gender;
	}

	public String getSport() {
		return sport;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setSport(String sport) {
		this.sport = sport;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", imageUrl=" + imageUrl
				+ ", price=" + price + ", discount=" + discount + ", productDescription=" + productDescription
				+ ", gender=" + gender + ", sport=" + sport + "]";
	}
	
	
	
}
