import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";

const Content = () => {

    let history = useHistory();
    //store products
    const [products, setProducts] = useState([]);

    //get products from database
    const getProducts = async () => {
        try {
            const response = await API.get("/products");
            //store to useState
            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

  return <div>
      
      <div className="container md:w-9/12 w-11/12 mb-10">
        <h2 className="text-maroon mt-14 font-bold text-4xl md:text-5xl">Let's Order</h2>
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-14">
            {products?.map(item => (
            <Link to={'/product/' + item.id}>
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg">
                <img src={item.image} alt="product" className="h-full" />
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">{item.title}</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. {item.price}</p>
                </div>
            </div> 
            </Link>
            ))}
        </div>
      </div>
  </div>
};

export default Content;
