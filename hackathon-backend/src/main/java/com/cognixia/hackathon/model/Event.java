package com.cognixia.hackathon.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "events")
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int eventId;

	@Column(name = "name")
	private String eventName;

	@Column(name = "description")
	private String eventDescription;

	@Column(name = "img_url")
	private String eventImg;

	@Column(name = "date")
	private Date eventDate;
	
	public Event() {
		this(0, "N/A", "N/A", "N/A", new Date());
	}

	public Event(int eventId, String eventName, String eventDescription, String eventImg, Date eventDate) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.eventImg = eventImg;
		this.eventDate = eventDate;
	}

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getEventDescription() {
		return eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public String getEventImg() {
		return eventImg;
	}

	public void setEventImg(String eventImg) {
		this.eventImg = eventImg;
	}

	public Date getEventDate() {
		return eventDate;
	}

	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}

	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", eventName=" + eventName + ", eventDescription=" + eventDescription
				+ ", eventImg=" + eventImg + ", eventDate=" + eventDate + "]";
	}

}
