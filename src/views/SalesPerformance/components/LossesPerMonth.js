import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {Box, Card, CardContent, Typography} from "@mui/material";

const LossesPerMonth = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        let myChart = null;

        if (chartRef.current) {
            myChart = echarts.init(chartRef.current);

            const option = {
                // title: {
                //     text: 'World Population'
                // },
                xAxis: {
                    name: "edad",
                    type: 'category',
                    data: [18,19,20,21,22,23]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
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

                    >Perdidas por mes</Typography>
                    <div ref={chartRef} style={{ width: '1300px', height: '500px' }} />
                </Box>
            </CardContent>
        </Card>
    );
}

export default LossesPerMonth;