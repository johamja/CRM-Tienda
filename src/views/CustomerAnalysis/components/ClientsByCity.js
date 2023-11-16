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
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                },
                series: [
                    {
                        name: '2011',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
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
                    <div ref={chartRef} style={{ width: '1300px', height: '500px' }} />
                </Box>
            </CardContent>
        </Card>
    );

}

export default ClientsByCity;