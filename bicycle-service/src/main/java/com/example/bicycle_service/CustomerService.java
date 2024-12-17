package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);  // Save customer to the database
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();  // Get all customers
    }

    public Customer getCustomerById(int id) {
        Optional<Customer> customer = customerRepository.findById(id); // Find by ID
        return customer.orElse(null); // Return customer if present, otherwise null
    }

    public void deleteCustomerById(int id) {
        customerRepository.deleteById(id);  // Delete customer by ID
    }

    public Customer findByEmail(String email) {
        return customerRepository.findByEmail(email);  // Call repository method to find by email
    }
}

