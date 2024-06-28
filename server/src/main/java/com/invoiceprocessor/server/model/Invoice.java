package com.invoiceprocessor.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String vendor;
    private String product;
    private int amount;
    private int quantity;
    private String date;
    private String action;

    public Invoice(){};

    public Invoice(long id, String vendor, String product, int amount, int quantity, String date, String action) {
        this.id = id;
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.quantity = quantity;
        this.date = date;
        this.action = action;
    }

    public long getId() {
        return id;
    }

    public String getVendor() {
        return vendor;
    }

    public String getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getDate() {
        return date;
    }

    public String getAction() {
        return action;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
