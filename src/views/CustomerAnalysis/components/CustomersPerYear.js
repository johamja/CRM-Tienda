import {Box, Card, CardContent, Typography} from "@mui/material";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CustomersPerYear = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        let myChart = null;

        if (chartRef.current) {
            myChart = echarts.init(chartRef.current);

            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ],
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

                  >Clientes por año</Typography>
                  <div ref={chartRef} style={{ width: '600px', height: '400px' }} />
              </Box>
          </CardContent>
      </Card>
    );

}

export default CustomersPerYear;