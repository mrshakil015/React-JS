import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // -----Using Fetch api--
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        // ---Axios-----
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                    }
                    return obj;
                })
                console.log(phoneFakeData);
                setPhones(phoneFakeData);
            });
    }, [])
    return (
        <div>
            <h2 className="text-5xl">Pones: {phones.length}</h2>
            <BarChart width={1000} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;