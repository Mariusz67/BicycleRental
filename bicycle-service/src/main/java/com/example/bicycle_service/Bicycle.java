package com.example.bicycle_service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@ToString (exclude = "transactionsForBicycle")
@Entity
public class Bicycle {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int bicycleID;
    @Column
    private String bicycleShortDescription;
    @Column
    private String bicycleType;
    @Column
    private String bicycleStatus;
    @Column
    private String bicycleLongDescription;
    @JsonIgnore //added 11/12
    @OneToMany (mappedBy = "bicycle", cascade = CascadeType.ALL, orphanRemoval = true)
    // bicycle - field in Transaction.java class
    private Set<Transaction> transactionsForBicycle = new HashSet<Transaction>();

}

