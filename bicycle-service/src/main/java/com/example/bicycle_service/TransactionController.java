package com.example.bicycle_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction) {
        Transaction savedTransaction = transactionService.saveTransaction(transaction);
        return ResponseEntity.ok(savedTransaction); // Return saved transaction
    }

    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(transactions); // Return all transactions
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable int id) {
        Transaction transaction = transactionService.getTransactionById(id);
        if (transaction != null) {
            return ResponseEntity.ok(transaction); // Return transaction if found
        }
        return ResponseEntity.notFound().build(); // Return 404 if not found
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransactionById(@PathVariable int id) {
        transactionService.deleteTransactionById(id);
        return ResponseEntity.noContent().build(); // Return 204 No Content on successful deletion
    }
}


