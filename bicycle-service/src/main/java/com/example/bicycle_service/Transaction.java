package com.example.bicycle_service;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@NoArgsConstructor
@ToString
@Entity
public class Transaction {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int transactionID;
    @Column
    private String ifBorrowed;
    @Column
    private String timestamp;
    @Column
    private String locationCode;
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false) // Creates Foreign Key called customer_id
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "bicycle_id", nullable = false) // Creates Foreign Key called bicycle_id
    private Bicycle bicycle;

}

