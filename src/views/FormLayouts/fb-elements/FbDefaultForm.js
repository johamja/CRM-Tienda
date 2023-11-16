import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

const CustomerSupportForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [issue, setIssue] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

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
      setOpenSnackbar(true); // Mostrar Snackbar después de enviar con éxito
      // Resetear los campos del formulario después de enviar con éxito
      setName("");
      setEmail("");
      setIssue("");
      setMessage("");
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Cerrar el Snackbar
  };

  return (
    <div>
      {/* Formulario de Soporte al Cliente */}
      <Card variant="outlined">
        <Box
          sx={{
            p: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="primary.main"
        >
          <Typography variant="h6" color="white">
            Formulario de Soporte al Cliente
          </Typography>
        </Box>
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
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
            />
            <TextField
              label="Asunto"
              variant="outlined"
              fullWidth
              required
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              sx={{ mb: 2 }}
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
            />
            <Button type="submit" variant="contained" color="primary">
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

export default CustomerSupportForm;
