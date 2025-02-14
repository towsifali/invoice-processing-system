import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button, styled, Typography } from '@mui/material'
const dayjs = require('dayjs')

const StyledTable = styled(Table)({
    margin: 20,
    marginTop: 40,
    width: '80%',
    '& > thead > tr > th': {
        background: '#000',
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
    '& > tbody > tr > td': {
        fontSize: 16,
        textAlign: 'center',
    },
    '& > tbody > p': {
        fontSize: 18,
        marginTop: 15
    },
    '& > tbody': {
        background: "#F6F6F7"
    }
})


const Invoices = ({ invoices, removeInvoice, payInvoice }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableRow sx={{ alignItems: "center" }}>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity (KG)</TableCell>
                    <TableCell>Amount (BDT)</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Cancel</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {invoices && Array.isArray(invoices) && invoices.length > 0 ? invoices.map((invoice,id) => (
                    <TableRow key={id}>
                        <TableCell>{invoice.vendor}</TableCell>
                        <TableCell>{invoice.product}</TableCell>
                        <TableCell>{invoice.quantity}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>{dayjs(invoice.date).format('DD/MM/YYYY')}</TableCell>
                        <TableCell sx={{color:"green", fontWeight: "bold"}}>{invoice.action}</TableCell>
                        <TableCell sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Button variant="contained" onClick={() =>{payInvoice(invoice.id)}} color="success">Paid</Button>
                            <Button variant="contained" color="primary">Print</Button>
                        </TableCell>
                        <TableCell >
                            <Button onClick={() => { removeInvoice(invoice.id) }} variant='text'>X</Button>
                        </TableCell>
                    </TableRow>
                )) : <TableRow><TableCell colSpan={8}><Typography variant='h5'>No Pending Invoices</Typography></TableCell></TableRow>}
            </TableBody>
        </StyledTable>
    )
}

export default Invoices