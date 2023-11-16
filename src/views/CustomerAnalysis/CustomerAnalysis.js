
import { Grid, Box } from "@mui/material";
import CustomerCounter from "./components/CustomerCounter";
import CustomersPerYear from "./components/CustomersPerYear";

const CustomerAnalysis = () => {
    return(
        <Box>
            <Grid container spacing={0}>
                <CustomerCounter/>
                <CustomersPerYear/>
            </Grid>
        </Box>
    );
};

export default CustomerAnalysis;