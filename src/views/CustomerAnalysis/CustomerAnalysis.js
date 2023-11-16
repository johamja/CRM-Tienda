
import { Grid, Box } from "@mui/material";
import CustomerCounter from "./components/CustomerCounter";
import CustomersPerYear from "./components/CustomersPerYear";
import ClientsByCity from "./components/ClientsByCity";
import ClientByAge from "./components/ClientByAge";

const CustomerAnalysis = () => {
    return(
        <Box>
            <Grid container spacing={0}>
                <CustomerCounter/>
                <CustomersPerYear/>
                <ClientsByCity/>
                <ClientByAge/>
            </Grid>
        </Box>
    );
};

export default CustomerAnalysis;