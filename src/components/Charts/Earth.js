import React from 'react';
import EChartsReact from 'echarts-for-react'

const Earth = () => {
    let ROOT_PATH = 'https://echarts.apache.org/examples';
    let option = {
        backgroundColor: '#000',
        globe: {
            baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
            heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
            displacementScale: 0.04,
            shading: 'realistic',
            environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
            realisticMaterial: {
            roughness: 0.9
            },
            postEffect: {
            enable: true
            },
            light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
                diffuseIntensity: 0.2
            }
            }
        }
    };
    return (
        <div>
            <EChartsReact option={option} style={{height:'400px'}}/>
        </div>
    );
};

export default Earth;