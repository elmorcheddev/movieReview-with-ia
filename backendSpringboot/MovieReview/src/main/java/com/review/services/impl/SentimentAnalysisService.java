package com.review.services.impl;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class SentimentAnalysisService {

    @Autowired
    private RestTemplate restTemplate;

    public String analyzeSentiment(String text) {
        String url = "http://127.0.0.1:5000/predict";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, String> body = new HashMap<>();
        body.put("text", text);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<Map> flaskResponse = restTemplate.postForEntity(url, entity, Map.class);

        if (flaskResponse.getStatusCode() == HttpStatus.OK) {
            return (String) flaskResponse.getBody().get("sentiment");
        } else {
            throw new RuntimeException("Failed to get response from sentiment analysis service");
        }
    }
}

