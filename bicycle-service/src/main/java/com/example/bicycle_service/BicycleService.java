package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BicycleService {

    @Autowired
    private BicycleRepository bicycleRepository;

    public Bicycle saveBicycle(Bicycle bicycle) {
        return bicycleRepository.save(bicycle);
    }

    public List<Bicycle> getAllBicycles() {
        return bicycleRepository.findAll();
    }

    public Bicycle getBicycleById(int id) {
        Optional<Bicycle> bicycle = bicycleRepository.findById(id);
        return bicycle.orElse(null);
    }

    public void deleteBicycleById(int id) {
        bicycleRepository.deleteById(id);
    }
}


