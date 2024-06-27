import React from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'
import {useState} from 'react'
import CreateInvoice from '../components/CreateInvoice'

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false)

    const toggleInvoice = () => {
        setAddInvoice(true);

    }
  return (
    <>
        <Header />
        <Box sx={{margin:"20px"}}>
            <Typography variant="h4">Pending Invoices</Typography>
            {!addInvoice && <Button 
                variant="contained" 
                sx={{marginTop:"15px"}} 
                color="primary"
                onClick={() => toggleInvoice()}
                >Create Invoice
            </Button>}
            {addInvoice && <CreateInvoice />}
        </Box>
    </>
  )
}

export default Home