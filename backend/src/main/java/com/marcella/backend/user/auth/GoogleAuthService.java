package com.marcella.backend.user.auth;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleAuthService {
    public GoogleUserDto getGoogleUserInfo(String accessToken) {
        String url = "https://www.googleapis.com/oauth2/v3/userinfo";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<JsonNode> response = new RestTemplate().exchange(url, HttpMethod.GET, entity, JsonNode.class);

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            JsonNode body = response.getBody();
            GoogleUserDto user = new GoogleUserDto();
            user.setEmail(body.get("email").asText());
            user.setName(body.get("name").asText());
            user.setProfilePicture(body.get("picture").asText());
            return user;
        }

        throw new RuntimeException("Failed to fetch Google user info");
    }
}
