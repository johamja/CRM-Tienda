import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {Box, Card, CardContent, Typography} from "@mui/material";

const ClientsByGender = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        let myChart = null;

        if (chartRef.current) {
            myChart = echarts.init(chartRef.current);

            const option = {  tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Mujeres' },
                            { value: 735, name: 'Hombres' },
                            { value: 580, name: 'Otros' },
                        ]
                    }
                ]
            };

            myChart.setOption(option);
        }

        // Limpiar el gráfico al desmontar el componente
        return () => {
            if (myChart) {
                myChart.dispose();
            }
        };
    }, []);

    return (
        <Card>
            <CardContent>
                <Box >
                    <Typography
                        variant="h2"
                        sx={{
                            marginBottom: "0",
                            paddingBottom: "20px",
                        }}

                    >Clientes por genero</Typography>
                    <div ref={chartRef} style={{ width: '600px', height: '450px' }} />
                </Box>
            </CardContent>
        </Card>
    );
}

export default ClientsByGender;