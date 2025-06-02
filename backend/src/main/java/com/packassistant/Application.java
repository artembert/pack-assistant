package com.packassistant;

import java.time.LocalDateTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @RestController
    class HealthController {
        @RequestMapping("/**")
        public ResponseEntity<String> handleAll() {
            return ResponseEntity.ok(LocalDateTime.now().toString());
        }
    }
} 