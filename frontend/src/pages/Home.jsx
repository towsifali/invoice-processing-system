import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Box, Typography, Button } from '@mui/material'
import {useState} from 'react'
import CreateInvoice from '../components/CreateInvoice'
import Invoices from '../components/Invoices'
import PaidInvoices from '../components/PaidInvoices'
import { getAllInvoice, deleteInvoice, payInvoice} from '../services/api'

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
    const markDoneInvoice = async (id) => {
        await payInvoice(id);
        const updatedInvoice = invoices.map(invoice => {
            if(invoice.id === id){
                invoice.action = "Paid"
            }
            return invoice;
        })
        setInvoices(updatedInvoice);
    }
    const pendingInvoices = invoices.filter(invoice => invoice.action === "Pending");
    const paidInvoices = invoices.filter(invoice => invoice.action === "Paid");

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
                <Invoices invoices={pendingInvoices} removeInvoice={removeInvoice} payInvoice={markDoneInvoice}/>
                <br />
                <PaidInvoices paidInvoices={paidInvoices} removeInvoice={removeInvoice}/>
            </Box>
        </Box>
    </>
  )
}

export default Home