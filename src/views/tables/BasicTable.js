import React from "react";

import { Card, CardContent, Box, Typography } from "@mui/material";

import ExTable from "../dashboards/dashboard1-components/ExTable";

const BasicTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">Gestión de Clientes</Typography>
          <Box>
            <ExTable />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTable;
