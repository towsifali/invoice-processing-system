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
        marginTop: 20,
    }
})


const defaultObj = {
    vendor:"",
    product:"",
    quantity:0,
    amount:0,
    date: '',
    action: 'Pending',
}

const CreateInvoice = ({setAddInvoice}) => {
    const [invoice, setInvoice] = useState(defaultObj);
    const onValueChange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value})
    }
    const addNewInvoice = async () =>{
        await saveInvoice({...invoice, amount: Number(invoice['amount']), quantity: Number(invoice['quantity'])});
        setAddInvoice(false);
    }
  return (
    <Component >
        <Typography>Create Invoice</Typography>
        <div>
        <TextField
            placeholder='Enter Customer Name'
            variant="outlined"
            label="Vendor"
            onChange={(e) => onValueChange(e)}
            name="vendor"
        />
        <TextField
            placeholder='Enter Product Name'
            variant="outlined"
            label="Product"
            onChange={(e) => onValueChange(e)}
            name="product"
        />
        <TextField
            placeholder='Enter Product Quantity (kg)'
            variant="outlined"
            type='number'
            label="Quantity"
            onChange={(e) => onValueChange(e)}
            InputProps={{ inputProps: { min: 1 } }}
            name="quantity"
        />
        <TextField
            placeholder='Enter Price Amount (BDT)'
            variant="outlined"
            label="Amount"
            type='number'
            onChange={(e) => onValueChange(e)}
            InputProps={{ inputProps: { min: 1 } }}
            name="amount"
        />
        <TextField
            variant="outlined"
            type='date'
            onChange={(e) => onValueChange(e)}
            name="date"
        />
        </div>
        <Button 
        sx={{marginTop: "20px"}}
        variant="contained"
        onClick={() => addNewInvoice()}
        >Add Invoice
        </Button>
    </Component>
  )
}

export default CreateInvoice