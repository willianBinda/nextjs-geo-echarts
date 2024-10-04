"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";

export default ({ geoData, geoLocation }) => {
  useEffect(() => {
    // const rest = getGeoPosition(11);
    const chartDom = document.getElementById("brChart");

    if (chartDom) {
      const myChart = echarts.init(chartDom);

      echarts.registerMap("BR", geoLocation);

      myChart.setOption({
        title: {
          text: "Mapa do Brasil",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: "right",
          min: 0,
          max: 300000000,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: "left",
          top: "top",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: "População",
            type: "map",
            map: "BR", // Nome do mapa registrado
            roam: true,
            emphasis: {
              label: {
                show: true,
              },
            },
            data: geoData,
          },
        ],
      });
    }
  }, []); // O array vazio [] garante que isso só será executado uma vez, após a montagem do componente

  return <main id="brChart" style={{ width: "600px", height: "400px" }} />;
};
