package com.invoiceprocessor.server.services;

import com.invoiceprocessor.server.dao.InvoiceDao;
import com.invoiceprocessor.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }
}
