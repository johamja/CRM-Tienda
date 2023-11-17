import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  TextField,
} from "@mui/material";
import History from "./History";
const products = [
  {
    id: "1",
    nombre: "Alex Castillo",
    tiempo: "Nuevo",
    contacto: "+57 3124136883",
    priority: "Muy frecuente",
    pbg: "success.main",
    historial: "",
  },
  {
    id: "2",
    nombre: "Andrea Lainez",
    tiempo: "Nuevo",
    contacto: "+52 7519263",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "",
  },
  {
    id: "3",
    nombre: "Felipe Rodriguez",
    tiempo: "Veterano",
    contacto: "+52 2346233",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "",
  },
  {
    id: "4",
    nombre: "Sofia Guzmán",
    tiempo: "Nuevo",
    contacto: "+52 3663890",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "",
  },
  {
    id: "5",
    nombre: "Liz Sandoval",
    tiempo: "Nuevo",
    contacto: "+57 3217213718",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "",
  },
  {
    id: "6",
    nombre: "Carlos Pérez",
    tiempo: "Veterano",
    contacto: "+52 5632393",
    priority: "Muy frecuente",
    pbg: "success.main",
    budget: "",
  },
  {
    id: "7",
    nombre: "Never López",
    tiempo: "Nuevo",
    contacto: "+57 3145761634",
    priority: "Muy ausente",
    pbg: "error.main",
    budget: "",
  },
];

const ExTable = () => {

 
  const [contactoValues, setContactoValues] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.contacto;
      return acc;
    }, {})
  );

  const handleContactoChange = (id, value) => {
    setContactoValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  
  
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Nombre
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Contacto
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Regularidad de Compras
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.nombre}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.nombre}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.tiempo}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            
            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.priority}
              ></Chip>
            </TableCell>
            <TableCell align="right">
            <TextField
                id={`contacto-${product.id}`}
                label="Contacto"
                value={contactoValues[product.id]}
                onChange={(e) => handleContactoChange(product.id, e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  mb: 2,
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
