package com.cognixia.hackathon.controller;

import com.cognixia.hackathon.dao.TweetsDAO;
import com.cognixia.hackathon.exceptions.EntityNotFoundException;
import com.cognixia.hackathon.model.Tweets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/api")
@RestController
public class TweetsController {
    @Autowired
    TweetsDAO service;
    @GetMapping("/tweets/{username}")
    public Tweets getTweetsByUsername(@PathVariable String username) {
        Optional<Tweets> found = service.findByUsername(username);
        if (found.isEmpty()) {
            System.out.println("This tweet doesn't exists.");
        }
        return found.get();
    }

    @PostMapping("/add/tweet")
    public ResponseEntity<Tweets> addTweet(@RequestBody Tweets newTweet) throws EntityNotFoundException {
        if(service.existsTweetsByUsername(newTweet.getUsername())) {
            throw new EntityNotFoundException("Sorry, tweet is not found.");
        } else {
            Tweets added = service.save(newTweet);
            return ResponseEntity.status(200).body(added);
        }
    }

    @DeleteMapping("/delete/tweet/{username}")
    public ResponseEntity<String> deleteTweet(@PathVariable String username) throws EntityNotFoundException {
        Optional<Tweets> found = service.findByUsername(username);
        if(found.isPresent()) {
            service.deleteByUsername(username);
            return ResponseEntity.status(200).body("Deleted tweet with username: " + username);
        } else {
            throw new EntityNotFoundException("Sorry this tweet by " + username + " doesn't exist");
        }
    }
}