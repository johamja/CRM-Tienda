import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServicesList = () => {
  const services = [
    {
      id: 1,
      name: "Integración con otros sistemas",
      description: "Permite integrar el módulo de soporte al cliente con otros sistemas de la empresa, como el CRM, el ERP o el software de gestión de proyectos. Esto permite a los agentes del servicio de atención al cliente acceder a información de otros sistemas para ofrecer un mejor servicio al cliente.",
      price: "$100/mes/usuario",
      available: true,
    },
    {
      id: 2,
      name: "Chat en vivo",
      description: "Permite a los clientes ponerse en contacto con el servicio de atención al cliente en tiempo real a través de un chat en vivo. Esto ofrece una experiencia de servicio al cliente más conveniente y eficiente para los clientes.",
      price: "$50/mes/usuario",
      available: false,
    },
    {
      id: 3,
      name: "Soporte técnico telefónico",
      description: "Permite a los clientes ponerse en contacto con el servicio de atención al cliente por teléfono para obtener soporte técnico. Esto es útil para los clientes que necesitan ayuda con problemas complejos o que no pueden acceder a Internet.",
      price: "$25/mes/usuario",
      available: true,
    },
    {
      id: 4,
      name: "Formación personalizada",
      description: "Ofrece formación personalizada a los agentes del servicio de atención al cliente sobre cómo utilizar el módulo de soporte al cliente. Esto ayuda a los agentes a ofrecer un mejor servicio al cliente y a aprovechar al máximo las funciones del módulo.",
      price: "$500/agente",
      available: true,
    },
    {
      id: 5,
      name: "Soporte técnico personalizado",
      description: "Ofrece soporte técnico personalizado a los clientes que tienen problemas con el módulo de soporte al cliente. Esto ayuda a los clientes a resolver sus problemas rápidamente y a evitar el tiempo de inactividad.",
      price: "$250/hora",
      available: true,
    },
  ];

  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    margin: "10px 0",
    "& .MuiAccordionSummary-content": {
      display: "flex",
      justifyContent: "center",
      fontSize: "1.5rem",
    },
    "& .MuiAccordionSummary-expandIcon": {
      color: "blue",
      fontSize: "2rem",
    },
  }));

  const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: "#009af5",
  }));

  const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    padding: "10px",
    "& > *": {
      margin: "10px 0", // Agregar margen vertical entre elementos
    },
  }));
  return (
    <div>
      <Typography variant="h2" gutterBottom align="center">
        Lista de Servicios Personalizados
      </Typography>
      <Divider />
      {services.map((service) => (
        <CustomAccordion key={service.id}>
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${service.id}-content`}
            id={`panel${service.id}-header`}
          >
            <Typography>{service.name}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography variant="body2" align="center" >
              Descripción: {service.description}
            </Typography>
            <Typography variant="body2" align="center" fontWeight="fontWeightBold">
              Precio: {service.price}
            </Typography>
            <Typography variant="body2" align="center" fontWeight="fontWeightBold">
              Disponibilidad: {service.available ? "Disponible" : "No Disponible"}
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
};

export default ServicesList;
