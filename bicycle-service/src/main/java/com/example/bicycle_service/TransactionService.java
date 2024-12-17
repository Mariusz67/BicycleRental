package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction); // Save transaction to the database
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll(); // Fetch all transactions
    }

    public Transaction getTransactionById(int id) {
        Optional<Transaction> transaction = transactionRepository.findById(id); // Find by ID
        return transaction.orElse(null); // Return the transaction if found, else null
    }

    public void deleteTransactionById(int id) {
        transactionRepository.deleteById(id); // Delete transaction by ID
    }
}


