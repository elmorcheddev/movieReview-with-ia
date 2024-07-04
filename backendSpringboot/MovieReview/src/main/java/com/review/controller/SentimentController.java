package com.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@RestController
@RequestMapping("/api")
public class SentimentController {

    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/predict")
    public Map<String, String> predictSentiment(@RequestBody Map<String, String> payload) {
        Map<String, String> response = new HashMap<>();
        try {
            String text = payload.get("text");

            // Set up the request to the Flask API
            String url = "http://127.0.0.1:5000/predict";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, String> body = new HashMap<>();
            body.put("text", text);

            HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);

            // Send the request and get the response
            ResponseEntity<Map> flaskResponse = restTemplate.postForEntity(url, entity, Map.class);

            // Check for successful response and extract the sentiment
            if (flaskResponse.getStatusCode() == HttpStatus.OK) {
                response.put("sentiment", (String) flaskResponse.getBody().get("sentiment"));
            } else {
                response.put("error", "Failed to get response from sentiment analysis service");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", e.getMessage());
        }
        return response;
    }
}
