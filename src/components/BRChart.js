'use client'
import React, { useEffect, useState } from "react";
import * as echarts from 'echarts';
import axios from "axios";
import scJson from '../../public/SC_Malha_Preliminar_Distrito_2022.json'
import scCidades from '../../public/SC_Cidades.json'
export default() =>{
    // const brasilAPI = axios.create({baseURL:'https://servicodados.ibge.gov.br/api/v3/malhas/municipios/3304557?formato=application/vnd.geo+json'})
    // const brasilAPI = axios.create({baseURL:"https://servicodados.ibge.gov.br/api/v2/malhas/42?formato=application/vnd.geo+json"})
    // const   jsonPath = brasilAPI.get()
    
    useEffect(() => {
        const chartDom = document.getElementById('brChart');

        

        if (chartDom) {
            const myChart = echarts.init(chartDom);

            echarts.registerMap('SC', scJson);
                myChart.setOption({
                    title: {
                        text: 'Mapa de Santa Catarina',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2
                    },
                    visualMap: {
                        left: 'right',
                        min: 0,
                        max: 1000000,
                        inRange: {
                            color: [
                            '#313695',
                            '#4575b4',
                            '#74add1',
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#d73027',
                            '#a50026'
                            ]
                        },
                        text: ['High', 'Low'],
                        calculable: true
                        },
                        toolbox: {
                        show: true,
                        //orient: 'vertical',
                        left: 'left',
                        top: 'top',
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {}
                        }
                        },
                    series: [
                        {
                            name: 'População',
                            type: 'map',
                            map: 'SC',  // Nome do mapa registrado
                            roam: true,
                            emphasis: {
                                label: {
                                show: true
                                }
                            },
                            data:scCidades
                        }
                    ]
                });
        
            // jsonPath.then(res=>{
            //     console.log("ok",res.data)
                
            // }).catch(err=>{
            //     console.log("-----erro----")
            // })

            
        }
  }, []); // O array vazio [] garante que isso só será executado uma vez, após a montagem do componente

  return (
    <>
        <main id="brChart" style={{ width: '600px', height: '400px' }}/>
    </>
  );
}