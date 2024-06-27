import React from 'react'
import {AppBar, Toolbar} from '@mui/material' 

const Header = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:"steelblue"}}>
        <Toolbar>
            <img src="https://www.ironhack.com/assets/shared/logo.svg" alt="Company Logo" style={{width:"120px"}} />
        </Toolbar>
    </AppBar>
  )
}

export default Header