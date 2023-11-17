import {Box, Card, CardContent, Typography} from "@mui/material";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ClientsByCity = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        let myChart = null;

        if (chartRef.current) {
            myChart = echarts.init(chartRef.current);

            const option = {
                // title: {
                //     text: 'World Population'
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    name:"Clientes",

                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    name:"Ciudad",
                    type: 'category',
                    data: ['Bucaramanga', 'Cali', 'Bogota', 'Armenia', 'Barranquilla', 'Medellin']
                },
                series: [
                    {
                        name: '2023',
                        type: 'bar',
                        data: [100, 50, 150, 200, 300, 500]
                    },
                    {
                        name: '2022',
                        type: 'bar',
                        data: [95, 45, 145, 170, 200, 200]
                    },
                    {
                        name: '2021',
                        type: 'bar',
                        data: [75, 43, 120, 20, 100, 180]
                    },
                    {
                        name: '2019',
                        type: 'bar',
                        data: [22, 12, 60, 0, 90, 20]
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

                    >Clientes por ciudad</Typography>
                    <div ref={chartRef} style={{ width: '1200px', height: '500px' }} />
                </Box>
            </CardContent>
        </Card>
    );

}

export default ClientsByCity;