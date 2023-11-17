
import { Grid, Box } from "@mui/material";
import ProductsCounter from "./components/ProductsCounter";
import ProductsSoldPerMonth from "./components/ProductsSoldPerMonth";
import EarningsPerMonth from "./components/EarningsPerMonth";
import LossesPerMonth from "./components/LossesPerMonth";

const SalesPerformance = () => {
    return(
        <Box>
            <Grid container spacing={0}>
                <ProductsCounter/>
                <ProductsSoldPerMonth/>
                <EarningsPerMonth/>
                <LossesPerMonth/>
            </Grid>
        </Box>
    );
};

export default SalesPerformance;