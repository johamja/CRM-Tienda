import React from 'react'
import {
    Box,
    Link,
    Typography,
    
  } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{p:3, textAlign:'center'}}>
            <Typography>© 2023 Universidad Pontificia Bolivariana <Link href="https://www.upb.edu.co/es/home">UPB.com</Link> </Typography>
        </Box>
     );
}
 
export default Footer;