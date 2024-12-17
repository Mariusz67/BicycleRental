package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bicycles")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class BicycleController {

    @Autowired
    private BicycleService bicycleService;

    @PostMapping
    public ResponseEntity<Bicycle> addBicycle(@RequestBody Bicycle bicycle) {
        Bicycle savedBicycle = bicycleService.saveBicycle(bicycle);
        return ResponseEntity.ok(savedBicycle);
    }

    @GetMapping
    public ResponseEntity<List<Bicycle>> getAllBicycles() {
        List<Bicycle> bicycles = bicycleService.getAllBicycles();
        return ResponseEntity.ok(bicycles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bicycle> getBicycleById(@PathVariable int id) {
        Bicycle bicycle = bicycleService.getBicycleById(id);
        if (bicycle != null) {
            return ResponseEntity.ok(bicycle);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBicycleById(@PathVariable int id) {
        bicycleService.deleteBicycleById(id);
        return ResponseEntity.noContent().build();
    }
}

