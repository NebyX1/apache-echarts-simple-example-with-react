import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { useGetData } from '../hooks/useGetData';

const CrimeChart = () => {
  const { data, isLoading, error } = useGetData();

  useEffect(() => {
    if (data) {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: 'Evolución de los Asesinatos en Uruguay (2000-2022)',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: data.map((item) => item.year),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data.map((item) => item['Asesinatos cada 100mil habitantes']),
            type: 'line',
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [data]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos</div>;

  return <div id="main" style={{ width: '100%', height: '400px' }}></div>;
};

export default CrimeChart;
