import React from 'react'
import {AppBar, Toolbar} from '@mui/material' 

const Header = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:"steelblue"}}>
        <Toolbar>
            <img src="invoice-logo.png" alt="Company Logo" style={{width:"48px"}} />
        </Toolbar>
    </AppBar>
  )
}

export default Header