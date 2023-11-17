import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import {Person, EmojiPeople, ThreeDRotation} from '@mui/icons-material';

import instagram from "../../../assets/images/users/instagram.png";
import facebook from "../../../assets/images/users/facebook.png";

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
                            gutterBottom>793</Typography>
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
                        <EmojiPeople fontSize="large"></EmojiPeople>
                        <Typography
                            variant="h1"
                            sx={{
                                marginBottom: "0",
                            }}
                            gutterBottom>1927</Typography>
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
                        alignItems: "center",
                        gap: "24px"
                    }}>
                        <img src={instagram} style={{height: "24px",width: "24px"}} alt="img"/>
                        <Typography
                            variant="h1"
                            sx={{
                                marginBottom: "0",
                            }}
                            gutterBottom>382</Typography>
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
                        alignItems: "center",
                        gap: "24px"
                    }}>
                        <img src={facebook} style={{height: "24px",width: "24px"}} alt="img"/>
                        <Typography
                            variant="h1"
                            sx={{
                                marginBottom: "0",
                            }}
                            gutterBottom>520</Typography>
                    </Box>

                </Box>

            </CardContent>
        </Card>
    );
}

export default CustomerCounter;