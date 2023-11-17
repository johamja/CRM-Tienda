import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";

const CustomerSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [supportRequests, setSupportRequests] = useState([]);
  const [formEnabled, setFormEnabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica para enviar la solicitud de soporte
    // Aquí podrías realizar la lógica para enviar la solicitud a tu backend
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Asunto:", issue);
    console.log("Mensaje:", message);

    // Simulación de envío exitoso del formulario
    // Aquí podrías reemplazar este setTimeout con la lógica para enviar la solicitud a tu backend
    setTimeout(() => {
      setOpenSnackbar(true); // // Mostrar Snackbar después de enviar con éxito
      // Resetear los campos del formulario después de enviar con éxito
      setName("");
      setEmail("");
      setIssue("");
      setMessage("");

      // Agregar nueva solicitud al arreglo de solicitudes
      const newRequest = {
        name,
        email,
        issue,
        message,
        id: Date.now(),
      };
      setSupportRequests([...supportRequests, newRequest]);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Cerrar el Snackbar
  };

  const handleFormToggle = () => {
    setFormEnabled(!formEnabled); // Cambiar el estado para habilitar/deshabilitar el formulario
  };
  return (
    <div>
      {/* Vista del Administrador */}
      <Typography variant="h5" gutterBottom>
        Vista del Administrador
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Lista de Solicitudes de Soporte
          </Typography>
          <Divider />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Correo Electrónico</TableCell>
                  <TableCell>Asunto</TableCell>
                  <TableCell>Mensaje</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {supportRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.issue}</TableCell>
                    <TableCell>{request.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Vista Cliente */}
      <Typography variant="h5" gutterBottom>
        Vista Cliente
      </Typography>
      <Card variant="outlined" sx={{ marginTop: "20px" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" component="div" flexGrow={1}>
              Formulario de Soporte al Cliente
            </Typography>
            <Typography variant="body2" component="div">
              Habilitar Formulario
            </Typography>
            <Switch checked={formEnabled} onChange={handleFormToggle} />
          </Box>
          <Divider />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
          disabled={!formEnabled}
        />
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          disabled={!formEnabled}
        />
        <TextField
          label="Asunto"
          variant="outlined"
          fullWidth
          required
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          sx={{ mb: 2 }}
          disabled={!formEnabled}
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2 }}
          disabled={!formEnabled}
        />
        <Button type="submit" variant="contained" color="primary" disabled={!formEnabled}>
          Enviar
        </Button>
      </form>
        </CardContent>
      </Card>

      {/* Snackbar para mostrar mensaje de éxito */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="¡Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo."
      />
    </div>
  );
};

export default CustomerSupport;
