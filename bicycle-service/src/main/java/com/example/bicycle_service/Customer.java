package com.example.bicycle_service;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.*;
//import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString (exclude = "transactionsForCustomer")
@Entity
public class Customer {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int customerID;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column(unique = true)
    private String email;
    @Column
    private String phone;
    @Column
    private String password;
    @JsonIgnore
    @OneToMany (mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    // customer - field in Transaction.java class
    private Set<Transaction> transactionsForCustomer = new HashSet<Transaction>();

}

