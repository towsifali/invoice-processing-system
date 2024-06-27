import { Box, Typography,TextField, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { saveInvoice } from '../services/api'

const Component = styled(Box)({
    marginTop: 20,
    '& > p' : {
        fontSize: 26,
        marginBottom: 10,
    },
    '& > div > div' : {
        marginRight: 20,
        minWidth: 200,
    }
})


const defaultObj = {
    vendor:"",
    product:"",
    quantity:0,
    amount:0,
    date: '',
    action: 'pending',
}

const CreateInvoice = () => {
    const [invoice, setInvoice] = useState(defaultObj);
    const onValueChange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value})
    }
    const addNewInvoice = async () =>{
        await saveInvoice({...invoice, amount: Number(invoice['amount']), quantity: Number(invoice['quantity'])});
    }
  return (
    <Component>
        <Typography>Create Invoice</Typography>
        <TextField
            placeholder='Enter Customer Name'
            variant="standard"
            onChange={(e) => onValueChange(e)}
            name="vendor"
        />
        <TextField
            placeholder='Enter Product Name'
            variant="standard"
            onChange={(e) => onValueChange(e)}
            name="product"
        />
        <TextField
            placeholder='Enter Product Quantity (kg)'
            variant="standard"
            type='number'
            onChange={(e) => onValueChange(e)}
            name="quantity"
        />
        <TextField
            placeholder='Enter Price Amount (BDT)'
            variant="standard"
            type='number'
            onChange={(e) => onValueChange(e)}
            name="amount"
        />
        <TextField
            placeholder='Enter Date'
            variant="standard"
            type='date'
            onChange={(e) => onValueChange(e)}
            name="date"
        />
        <Button 
        variant="contained"
        onClick={() => addNewInvoice()}
        >Add Invoice
        </Button>
    </Component>
  )
}

export default CreateInvoice