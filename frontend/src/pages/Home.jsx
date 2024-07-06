import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'
import {useState} from 'react'
import CreateInvoice from '../components/CreateInvoice'
import Invoices from '../components/Invoices'
import { getAllInvoice, deleteInvoice } from '../services/api'

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false)
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        const getInvoices = async () => {
            const invoicesFromServer = await getAllInvoice();
            setInvoices(invoicesFromServer.data)
        }
        getInvoices();
    }, [addInvoice])

    const toggleInvoice = () => {
       setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);
        const updatedInvoice = invoices.filter(invoice => invoice.id !== id)
        setInvoices(updatedInvoice);
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
            {addInvoice && <CreateInvoice setAddInvoice={setAddInvoice} />}
            <Box>
                <Invoices invoices={invoices} removeInvoice={removeInvoice}/>
            </Box>
        </Box>
    </>
  )
}

export default Home