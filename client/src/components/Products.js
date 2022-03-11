import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API } from "../config/api";
import Header from "./Header";

const Products = () => {

  let history = useHistory();
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [topingId, setTopingId] = useState([]);

  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      //store product data
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //store toping
  const [topings, setTopings] = useState([]);
  

  //get topings from database
  const getTopings = async () => {
    try {
      const response = await API.get("/topings");
      //store to useState
      setTopings(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  
  const handleChangeTopingId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    
    if(checked){
      //save toping id
      setTopingId([...topingId, parseInt(id)]);
    } else {
      //delete toping id
      let newTopingId = topingId.filter((topingIdItem) => {
        return topingIdItem != id;
      });
      setTopingId(newTopingId);
    }
  };


  useEffect(() => {
    getProduct(id);
    getTopings();
  }, []);

  console.log(topingId);

  
  return (
    <>
        <Header />
        <section>
          <div className="container md:w-9/12 w-11/12 mb-10 mt-14">
            <div className="flex flex-1 flex-col md:flex-row gap-14">
              <div className="w-full md:w-2/5 md:justify-start flex items-start justify-center">
                <img className="md:w-full w-full rounded-b-lg" src={product.image} alt="content1products" />
              </div>
              <div className="w-full md:w-3/5 flex flex-col flex-start gap-8">
                <div className="text-5xl text-maroon font-lato font-bold">
                  <h2>{product.title}</h2>
                </div>
                <div className="text-lightBrown text-xl font-lato">
                  <p>Rp. {product.price}</p>
                </div>
                <div className="mt-10">
                  <h2 className="text-lightBrown text-3xl font-lato font-semibold">Toping</h2>
                  <div className="grid grid-rows-2 gap-8 text-center mt-8">
                    
                    <div className="grid grid-cols-4 gap-10">
                      {topings?.map(item => (
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex items-start">
                          
                          <input type="checkbox" className="scale-150" value={item.id} onClick={handleChangeTopingId}/>
                          <img src={item.image} alt="toping" className="w-20 h-20"/>
                          
                        </div>
                        <p className="text-maroon font-lato font-thin">{item.title}</p>
                      </div>
                      ))}
                    </div>
          
                  </div>
                </div>
                <div className="mt-10 flex flex-1 justify-between">
                  <h2 className="text-lightBrown text-3xl font-lato font-bold">Total</h2>
                  <div>
                    <p className="text-lightBrown text-3xl font-lato font-bold">Rp. {product.price}</p> 
                  </div>
                </div>
                <div className="mt-10">
                  <button className="btn btn-red w-full">Add Cart</button>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        
    </>
  )
};

export default Products;
