package com.cognixia.hackathon.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ztweets")
public class Tweets {
    @Id
    private String username;
    private String text;
    private String profilePic;

    public Tweets(String username,  String text, String profilePic) {
        this.username = username;
        this.text = text;
        this.profilePic = profilePic;
    }

    public Tweets() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    @Override
    public String toString() {
        return "Tweets{" +
                "username='" + username + '\'' +
                ", profilePic='" + profilePic + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
