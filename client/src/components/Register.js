import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";
import { API } from "../config/api";

const Register = ({modalRef, leaveRegister}) => {

    const history = useHistory();

    const [state, dispatch] = useContext(UserContext);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const { fullname, email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            //content type configuration
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            //data body
            const body = JSON.stringify(form);

            //insert data user to database
            const response = await API.post("/register", body, config);

            //notification
            if (response.data.status === "success"){
                const alert = (
                        <div className="px-7 py-4 bg-success rounded-md">
                            <h2 className="text-xl text-successv2">Register Success!</h2>
                        </div>
                );
                setMessage(alert);
                setForm({
                    fullname: "",
                    email: "",
                    password: ""
                });
            } else {
                const alert = (
                        <div className="px-7 py-4 bg-red-100 rounded-md">
                            <h2 className="text-xl text-maroon">Register <span className="font-bold">Failed!</span></h2>
                        </div>
                );
                setMessage(alert);
            }

        } catch (error) {
            const alert = (
                        <div className="px-7 py-4 bg-red-100 rounded-md">
                            <h2 className="text-xl text-maroon">Register <span className="font-bold">Failed!</span></h2>
                        </div>
            );
            setMessage(alert);
            console.log(error);
        }
    };

  return (
      <>
      <div ref={modalRef} onClick={leaveRegister} className="fixed h-screen w-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
        <div className="bg-white shadow-md rounded-md w-3/4 md:w-1/4 font-lato">
            <div className="px-7 py-8">
                <h2 className="text-maroon font-extrabold text-4xl font-lato">Register</h2>
            </div>
            <div className="px-7 py-4">
            {message && message}
            </div>
            
           
            <div className="px-7">
                <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange} value={email} className="bg-red-50 border-4 border-maroon rounded-md p-3 focus:outline-none placeholder:font-thin text-xl"/>
                    <input type="password" onChange={handleChange} name="password" value={password} placeholder="Password" className="bg-red-50 border-4 border-maroon rounded-md p-3 focus:outline-none placeholder:font-thin text-xl"/>
                    <input type="text" onChange={handleChange} name="fullname" value={fullname} placeholder="Full Name" className="bg-red-50 border-4 border-maroon rounded-md p-3 focus:outline-none placeholder:font-thin text-xl"/>
                    <button type="submit" className="mt-2 bg-maroon text-white rounded-md font-lato font-bold text-xl p-3">Register</button>
                </form>
            </div>
            <div className="m-5 p-2 flex flex-row justify-center items-center text-xl">
                <p>Already have an account ? Klik <button onClick={() => {history.push("/login")}} className="font-bold">Here</button></p>
            </div>
        </div>
      </div>
      </>
  )
};

export default Register;
