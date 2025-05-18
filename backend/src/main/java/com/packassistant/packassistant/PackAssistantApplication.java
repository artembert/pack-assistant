package com.packassistant.packassistant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@SpringBootApplication
public class PackAssistantApplication {

    public static void main(String[] args) {
        SpringApplication.run(PackAssistantApplication.class, args);
    }

    @RestController
    class HealthController {
        @RequestMapping("/**")
        public ResponseEntity<String> handleAll() {
            return ResponseEntity.ok("OKAY1____1");
        }
    }
}
