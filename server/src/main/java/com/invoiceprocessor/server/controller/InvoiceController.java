package com.invoiceprocessor.server.controller;

import com.invoiceprocessor.server.model.Invoice;
import com.invoiceprocessor.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice) {
        return this.invoiceService.addInvoice(invoice);
    };

    @GetMapping("/invoice")
    public List<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    };


    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    };

    @PutMapping("/invoice/{invoiceId}")
    public Invoice markInvoiceAsPaid(@PathVariable String invoiceId){
        return this.invoiceService.markInvoiceAsPaid(Long.parseLong(invoiceId));
    }
}
