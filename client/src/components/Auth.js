import { useState, useRef } from "react"
import Login from "./Login";
import Register from "./Register";
import Hero from "./Hero";

const Auth = () => {
  
    const [modLog, setModLog] = useState(false);
    const [modReg, setModReg] = useState(false);

    const modalRef = useRef();

    const modalLogin = () => {
        setModLog(true);
    };

    const modalRegister = () => {
        setModReg(true);
    };

    const leaveLogin = (e) => {
        if(modalRef.current === e.target) {
          setModLog(false);
        }
      }

    const leaveRegister = (e) => {
        if(modalRef.current === e.target){
          setModReg(false)
        }
      }
  
    return (
    <div>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
            <img src="../img/waysbuck-logo.svg" alt="waysbucklogo" />
        </div>
          <ul className="hidden md:flex flex-1 justify-end items-center gap-8">
          <button type="button" className="btn btn-outline" onClick={modalLogin} >Login</button>
          <button type="button" className="btn btn-red" onClick={modalRegister} >Register</button>
          </ul>
      </nav>
      {modLog && <Login modalRef={modalRef} leaveLogin={leaveLogin}/>}
      {modReg && <Register modalRef={modalRef} leaveRegister={leaveRegister}/>}

        <Hero />

      <div className="container md:w-9/12 w-11/12 mb-10">
        <h2 className="text-maroon mt-14 font-bold text-4xl md:text-5xl">Let's Order</h2>
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-14">
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg" onClick={modalLogin}>
                <img src="../img/content1.svg" alt="content1" className="h-full"/>
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">Ice Coffee Palm Sugar</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. 27.000</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg" onClick={modalLogin}>
                <img src="../img/content2.svg" alt="content1" className="h-full"/>
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">Ice Coffee Green Tea</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. 31.000</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg" onClick={modalLogin}>
                <img src="../img/content3.svg" alt="content1" className="h-full"/>
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">Hanami Latte</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. 29.000</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-4 bg-card rounded-lg" onClick={modalLogin}>
                <img src="../img/content4.svg" alt="content1" className="h-full"/>
                <div className="flex flex-col gap-2 px-5 mb-5">
                    <h3 className="text-maroon text-base font-lato font-black">Clepon Coffee</h3>
                    <p className="text-sm font-lato font-thin text-lightBrown">Rp. 28.000</p>
                </div>
            </div>
        </div>
      </div> 

    </div>
  )
}

export default Auth