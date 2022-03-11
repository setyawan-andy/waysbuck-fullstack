import { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

const Profile = () => {

    let { id } = useParams();
    const [user, setUser] = useState({});

    const [state, dispatch] = useContext(UserContext);

    const getUser = async (id) => {
        try {
          const response = await API.get("/user/" + id);
          //store product data
          setUser(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getUser(id);
    }, []);

    console.log(state);

  return (
      <>
      <Header />
      <section>
          <div className="container grid grid-rows-2 gap-8 md:gap-8 md:grid-cols-2 w-11/12 md:w-9/12 mt-14 mb-10 font-lato">
              <div className="flex flex-col w-full md:w-9/12 gap-10">
                <div className="font-lato font-bold text-maroon text-4xl">
                    <h2>My Profile</h2>
                </div>
                <div className="flex gap-10 flex-1">
                    <img src="../img/profile-pic.svg" alt="profile-pic" className="object-cover rounded-md w-64 h-72" />
                    <div className="flex flex-col gap-10">
                        <div className="text-lg font-lato">
                            <h2 className="text-detailprofile font-extrabold ">Fullname</h2>
                            <p>{state.user.fullname}</p>
                        </div>
                        <div className="text-lg font-lato">
                            <h2 className="text-detailprofile font-extrabold">Email</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-10">
                <div className="font-lato font-bold text-detailprofile text-4xl">
                    <h2>My Transaction</h2>
                </div>
                <div className="bg-backprofile rounded-lg flex px-8 py-6">
                    <div className="w-3/4 grid grid-rows-2 gap-4">
                        <div className="flex gap-4">
                            <img src="../img/content1.svg" alt="detail1" className="rounded-lg object-cover w-20 h-28"/>
                            <div className="flex flex-col justify-center gap-4">
                                <div>
                                    <h2 className="text-maroon text-sm font-black">Ice Coffe Palm Sugar</h2>
                                    <p className="text-maroon text-xs font-light"><span className="font-black">Saturday</span>, 5 March 2020</p>
                                </div>
                                <div className="text-lightBrown text-xs font-extrabold">Toping <span className="text-maroon font-normal">: Bill Berry Boba, Bubble Tea Gelatin</span></div>
                                <div className="text-lightBrown text-xs font-normal">Price : Rp.33.000</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="../img/content1.svg" alt="detail1" className="rounded-lg object-cover w-20 h-28"/>
                            <div className="flex flex-col justify-center gap-4">
                                <div>
                                    <h2 className="text-maroon text-sm font-black">Ice Coffe Palm Sugar</h2>
                                    <p className="text-maroon text-xs font-light"><span className="font-black">Saturday</span>, 5 March 2020</p>
                                </div>
                                <div className="text-lightBrown text-xs font-extrabold">Toping <span className="text-maroon font-normal">: Bill Berry Boba, Manggo</span></div>
                                <div className="text-lightBrown text-xs font-normal">Price : Rp.36.000</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col flex-1 gap-10">
                        <div className="flex justify-center items-center">
                            <img src="../img/waysbuck-logo.svg" alt="waysbuck-logo" className="w-12 h-12"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src="../img/barcode.svg" alt="barcode" />
                            <div className="w-full flex justify-center items-center">
                                <button className="bg-blue-200 opacity-50 shadow-sm text-cyan-500 rounded-md px-6 py-1 text-xs">On The Wayt</button>
                            </div>
                            <div className="text-lightBrown text-xs font-black">Sub Total : 69.000</div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>
      </>
  )
};

export default Profile;
