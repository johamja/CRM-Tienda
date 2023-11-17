import {Box, Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {Person, Business, ThumbDown, ThumbUp} from '@mui/icons-material';
import {DailyActivities, ProductPerformance} from "../../dashboards/dashboard1-components";
import React from "react";



const ProductsCounter = () => {

    return (
        <Card sx={{
            width: "1300px",
            // height: "min-content"
        }}>
            <CardContent>

                <Grid container spacing={0} >
                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                padding: "20px"
                            }}
                        >

                            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: "0",
                                    paddingBottom: "20px",
                                }}
                                gutterBottom>Productos disponibles</Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "rows",
                                gap: "24px"
                            }}>
                                <ThumbUp fontSize="large"></ThumbUp>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        marginBottom: "0",
                                    }}
                                    gutterBottom>223</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                padding: "20px"
                            }}
                        >

                            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: "0",
                                    paddingBottom: "20px",
                                }}
                                gutterBottom>Productos sin unidades</Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "rows",
                                gap: "24px"
                            }}>
                                <ThumbDown fontSize="large"></ThumbDown>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        marginBottom: "0",
                                    }}
                                    gutterBottom>34</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                padding: "20px"
                            }}
                        >

                            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: "0",
                                    paddingBottom: "20px",
                                }}
                                gutterBottom>Productos en bodegas</Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "rows",
                                gap: "24px"
                            }}>
                                <Business fontSize="large"></Business>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        marginBottom: "0",
                                    }}
                                    gutterBottom>192</Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>








            </CardContent>
        </Card>
    );
}

export default ProductsCounter;