
import { Grid, Box } from "@mui/material";
import CustomerCounter from "./components/CustomerCounter";
import CustomersPerYear from "./components/CustomersPerYear";
import ClientsByCity from "./components/ClientsByCity";

const CustomerAnalysis = () => {
    return(
        <Box>
            <Grid container spacing={0}>
                <CustomerCounter/>
                <CustomersPerYear/>
                <ClientsByCity/>
            </Grid>
        </Box>
    );
};

export default CustomerAnalysis;