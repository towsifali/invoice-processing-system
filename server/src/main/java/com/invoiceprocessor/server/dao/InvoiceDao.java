package com.invoiceprocessor.server.dao;

import com.invoiceprocessor.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
}
