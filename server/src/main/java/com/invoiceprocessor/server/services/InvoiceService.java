package com.invoiceprocessor.server.services;

import com.invoiceprocessor.server.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);

    public Invoice markInvoiceAsPaid(long id);

}
