
import { Grid, Box } from "@mui/material";
import CustomerCounter from "./components/CustomerCounter";

const CustomerAnalysis = () => {
    return(
        <Box>
            <Grid>
                <CustomerCounter/>
            </Grid>
        </Box>
    );
};

export default CustomerAnalysis;