import React from 'react';
import { useState, useEffect } from 'react';
import { API } from "../config/api";
import { useHistory } from 'react-router-dom';


const TopingAdmin = () => {
  
    let history = useHistory();
    //store products
    const [topings, setTopings] = useState([]);

    //get products from database
    const getTopings = async () => {
        try {
            const response = await API.get("/topings");
            //store to useState
            setTopings(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTopings();
    }, []);
  
    return (
    <div>

        <div className="container md:w-9/12 w-11/12 mb-10">
        <h2 className="text-maroon mt-14 font-bold text-4xl md:text-5xl">Toping List</h2>
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-14">
            {topings?.map(item => (
            
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg">
                <img src={item.image} alt="product" className="h-full" />
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">{item.title}</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. {item.price}</p>
                </div>
            </div> 
            
            ))}
        </div>
        </div> 

    </div>
  )
}

export default TopingAdmin