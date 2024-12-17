package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
        Customer savedCustomer = customerService.saveCustomer(customer);
        return ResponseEntity.ok(savedCustomer); // Return saved customer as a response
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable int id) {
        Customer customer = customerService.getCustomerById(id);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Customer> getCustomerByEmail(@PathVariable String email) {
        Customer customer = customerService.findByEmail(email);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        }
        return ResponseEntity.notFound().build();  // Return 404 if customer not found
    }

    @PostMapping("/loginvalidation")
    public ResponseEntity<?> login(@RequestBody Customer loginRequest) {
        Customer existingCustomer = customerService.findByEmail(loginRequest.getEmail());
        if (existingCustomer != null && existingCustomer.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(existingCustomer); // Login successful
        }
        return ResponseEntity.status(404).body("Invalid email or password"); // Invalid credentials
    }


}

