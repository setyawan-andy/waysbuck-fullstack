import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";

const Login = ({modalRef, leaveLogin}) => {

    const history = useHistory();

    const [state, dispatch] = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            //comfiguration
            const congfig = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            //data body
            const body = JSON.stringify(form);

            //insert data
            const response = await API.post("/login", body, congfig);

            //checking proccess
            if(response?.status == 200){
                //send data to useContext
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                });

                if (response.data.data.status == "admin"){
                    history.push("/admin-page");
                } else {
                    history.push("/");
                }
                const alert = (
                    <div className="px-7 py-4 bg-success rounded-md">
                            <h2 className="text-xl text-successv2">Login <span className="font-bold">Success!</span></h2>
                    </div>
                );
                setMessage(alert);
            }
        } catch (error) {
            const alert = (
                <div className="px-7 py-4 bg-red-100 rounded-md">
                    <h2 className="text-xl text-maroon">Login <span className="font-bold">Failed!</span></h2>
                </div>
            );
            setMessage(alert);
            console.log(error);
        }
    };

  return <div>
      <div ref={modalRef} onClick={leaveLogin} className="fixed h-screen w-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
        <div className="bg-white shadow-md rounded-md w-3/4 md:w-1/4 font-lato">
            <div className="px-7 py-8">
                <h2 className="text-maroon font-extrabold text-4xl font-lato">Login</h2>
            </div>
            <div className="px-7 py-4">
            {message && message}
            </div>
            <div className="px-7">
                <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange} className="bg-red-50 border-4 border-maroon rounded-md p-3 focus:outline-none placeholder:font-thin text-xl"/>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} className="bg-red-50 border-4 border-maroon rounded-md p-3 focus:outline-none placeholder:font-thin text-xl"/>
                    <button type="submit" className="mt-2 bg-maroon text-white rounded-md font-lato font-bold text-xl p-3">Login</button>
                </form>
            </div>
            <div className="m-5 p-2 flex flex-row justify-center items-center text-xl">
                <p>Don't have an account ? Klik <button onClick={() => {history.push("/register")}} className="font-bold">Here</button></p>
            </div>
        </div>
      </div>
  </div>;
};

export default Login;
