import {Box, Card, CardContent, Typography} from "@mui/material";
import {Person , ThreeDRotation } from '@mui/icons-material';



const CustomerCounter = () => {

    return (
        <Card sx={{
            // width: "min-content",
            // height: "min-content"
        }}>
            <CardContent>
                <Box>

                    <Typography
                        variant="h2"
                        sx={{
                            marginBottom: "0",
                            paddingBottom: "20px",
                        }}
                        gutterBottom>Recuento de clientes</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "rows",
                        gap: "24px"
                    }}>
                        <Person fontSize="large"></Person>
                        <Typography
                            variant="h1"
                            sx={{
                                marginBottom: "0",
                            }}
                            gutterBottom>203</Typography>
                    </Box>

                </Box>
            </CardContent>
        </Card>
    );
}

export default CustomerCounter;