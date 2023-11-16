import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import {Person, SpaceBar, ThreeDRotation} from '@mui/icons-material';



const CustomerCounter = () => {

    return (
        <Card sx={{
            width: "550px",
            // height: "min-content"
        }}>
            <CardContent>
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

                <Divider />

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
                        gutterBottom>Interaciones web</Typography>
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

                <Divider />

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
                        gutterBottom>Seguidres en instagram</Typography>
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

                <Divider />

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
                        gutterBottom>Seguidores de facebook</Typography>
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