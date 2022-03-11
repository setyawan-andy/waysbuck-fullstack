import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useHistory } from "react-router-dom";
import { API } from "../config/api";

const AddToping = () => {

    console.clear();

    let history = useHistory();
    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        title: "",
        price: "",
        image: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.type === "file" ? e.target.files : e.target.value,
        });

        //create image URL preview
        if(e.target.type === "file"){
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            //configuration
            const config = {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            };

            //store data as object
            const formData = new FormData();
            formData.set("image", form.image[0], form.image[0].name);
            formData.set("title", form.title);
            formData.set("price", form.price);

            console.log(form);

            //insert data
            const response = await API.post("/addtoping", formData, config);
            console.log(response);
            history.push("/admin-page");
        } catch (error) {
            console.log(error);
        }
    };
    

  return (
      <>
      <HeaderAdmin />
      <div className="container w-11/12 md:w-9/12 mt-14 mb-10 font-lato">
            <div className="flex flex-col md:flex-row gap-20">
                <div className="flex flex-col w-full md:w-3/5 gap-16">
                    <div className="text-maroon text-4xl font-extrabold">
                        <h2>Toping</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-8">
                        <input type="text" placeholder="Name Toping" autoComplete="off" name="title" onChange={handleChange} className="input placeholder:font-extralight placeholder:text-lightBrown" />
                        <input type="text" placeholder="Price" autoComplete="off" name="price" onChange={handleChange} className="input placeholder:font-extralight placeholder:text-lightBrown" />
                        <input type="file" placeholder="Photo Toping" autoComplete="off" name="image" onChange={handleChange} className="input placeholder:font-extralight placeholder:text-lightBrown" />
                    </div>
                    <div className="flex justify-center items-center mt-7">
                        <button className="w-full btn bg-maroon font-lato font-bold text-lg py-2 text-white">Add Toping</button>
                    </div>
                    </form>
                </div>
                <div className="w-full md:w-2/5">
                    {preview ?
                    <img src={preview} alt="preview" className="object-cover rounded-md w-full h-full" />
                    : null}
                </div>
            </div>
        </div>
      </>
  )
};

export default AddToping;
