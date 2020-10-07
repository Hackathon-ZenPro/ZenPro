package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zusers")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String lastName;
	private String firstName;
	private String email;
	private String userPassword;
	private String address;
	private String city;
	private String state;
	private String postalCode;
	private String contactNumber;
	
	public User(int userId, String lastName, String firstName, String email, String userPassword, String address,
			String city, String state, String postalCode, String contactNumber) {
		super();
		this.userId = userId;
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.userPassword = userPassword;
		this.address = address;
		this.city = city;
		this.state = state;
		this.postalCode = postalCode;
		this.contactNumber = contactNumber;
	}

	public User() {
		super();
	}

	public int getUserId() {
		return userId;
	}

	public String getLastName() {
		return lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getEmail() {
		return email;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public String getAddress() {
		return address;
	}

	public String getCity() {
		return city;
	}

	public String getState() {
		return state;
	}

	public String getPastalCode() {
		return postalCode;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setPastalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", lastName=" + lastName + ", firstName=" + firstName + ", email=" + email
				+ ", userPassword=" + userPassword + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", postalCode=" + postalCode + ", contactNumber=" + contactNumber + "]";
	}
	
	
	
}
