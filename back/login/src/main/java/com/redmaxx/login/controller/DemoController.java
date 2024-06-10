package com.redmaxx.login.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class DemoController {

    @GetMapping("/demo")
    public ResponseEntity<MyData> getData() {
        MyData data = new MyData();
        data.setId(1);
        data.setName("Example");

        // You can return ResponseEntity for more control over status code and headers
        return ResponseEntity.ok().body(data);
    }

    // Inner class representing your data
    public static class MyData {
        private int id;
        private String name;

        // Getters and setters
        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

}
