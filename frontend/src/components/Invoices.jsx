import React from 'react'
import {Table, TableHead, TableRow, TableCell, TableBody, Button, styled} from '@mui/material'

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


const Invoices = ({invoices, removeInvoice}) => {
  return (
    <StyledTable>
        <TableHead>
            <TableRow sx={{alignItems:"center"}}>
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
           { invoices.map(invoice => (
                <TableRow>
                    <TableCell>{invoice.vendor}</TableCell>
                    <TableCell>{invoice.product}</TableCell>
                    <TableCell>{invoice.quantity}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.action}</TableCell>
                    <TableCell sx={{display:"flex", justifyContent:"space-between"}}>
                        <Button variant="contained" color="success">Paid</Button>
                        <Button variant="contained" color="primary">Print</Button>
                    </TableCell>
                    <TableCell >
                        <Button onClick={() => {removeInvoice(invoice.id)}} variant='text'>X</Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </StyledTable>
  )
}

export default Invoices