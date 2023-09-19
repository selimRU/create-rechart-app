import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MylineChart = () => {
    const data = [
        {
            name: 'company A',
            price: 4000,
            sales: 2400,
            amt: 2400,
        },
        {
            name: 'company B',
            price: 3000,
            sales: 1398,
            amt: 2210,
        },
        {
            name: 'company C',
            price: 2000,
            sales: 9800,
            amt: 2290,
        },
        {
            name: 'company D',
            price: 2780,
            sales: 3908,
            amt: 2000,
        },
        {
            name: 'company E',
            price: 1890,
            sales: 4800,
            amt: 2181,
        },
        {
            name: 'company F',
            price: 2390,
            sales: 3800,
            amt: 2500,
        },
        {
            name: 'company G',
            price: 3490,
            sales: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <BarChart width={400} height={400} data={data}>
                <CartesianGrid dataKey='price' strokeDasharray="3 3" />
                <XAxis dataKey='name'></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={"price"} fill="#8884d8"></Bar>
                <Bar dataKey={"sales"} fill="#82ca9d"></Bar>
            </BarChart>
        </div>
    );
};

export default MylineChart;