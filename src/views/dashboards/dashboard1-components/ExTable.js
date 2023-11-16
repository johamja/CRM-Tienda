import React from "react";
import { useHistory } from "react-router-dom";
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
} from "@mui/material";

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
    budget: "24.5",
  },
  {
    id: "4",
    nombre: "Sofia Guzmán",
    tiempo: "Nuevo",
    contacto: "+52 3663890",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "5",
    nombre: "Liz Sandoval",
    tiempo: "Nuevo",
    contacto: "+57 3217213718",
    priority: "Frecuente",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "6",
    nombre: "Carlos Pérez",
    tiempo: "Veterano",
    contacto: "+52 5632393",
    priority: "Muy frecuente",
    pbg: "success.main",
    budget: "12.8",
  },
  {
    id: "7",
    nombre: "Never López",
    tiempo: "Nuevo",
    contacto: "+57 3145761634",
    priority: "Muy ausente",
    pbg: "error.main",
    budget: "2.4",
  },
];

const ExTable = () => {
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
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Historial de Compras
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
              <Typography color="textSecondary" variant="h6">
                {product.contacto}
              </Typography>
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
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "secundary.main", // Puedes personalizar el color del botón según tus necesidades
                  color: "#fff",
                }}
                onClick={() => {
                  // Puedes agregar aquí la lógica que deseas ejecutar al hacer clic en el botón
                  console.log(`Botón clickeado para ${product.nombre}`);
                }}
              >
                Ver historial
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
