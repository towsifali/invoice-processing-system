package com.invoiceprocessor.server.services;

import com.invoiceprocessor.server.dao.InvoiceDao;
import com.invoiceprocessor.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;
    }
    @Override
    public Invoice markInvoiceAsPaid(long id) {
        Invoice invoice = invoiceDao.findById(id).orElse(null);
        if (invoice != null) {
            invoice.setAction("Paid");
            invoiceDao.save(invoice);
        }
        return invoice;
    }
}
