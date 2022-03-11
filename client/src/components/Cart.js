import React, { useState, useRef } from 'react';
import Header from './Header';
import Alert from './Alert';
import { useHistory } from 'react-router-dom';

const Cart = () => {

    let history = useHistory();
    const [pay, setPay] = useState(false);
    
    const modalRef = useRef();

    const leavePay = (e) => {
        if(modalRef.current === e.target){
            setPay(false)
        }
    }
    

  return (
      <>
      <Header />
      <section>
        <div className="container w-11/12 md:w-9/12 mt-14 mb-10 font-lato">
            <h2 className='text-maroon text-2xl font-black'>My Cart</h2>
            <div className='flex justify-between flex-col md:flex-row md:gap-14'>
                <div className='w-full md:w-3/5'>
                    <div className='mt-12'>
                        <h2 className='text-lg text-maroon font-normal'>Review Your Order</h2>
                    </div>
                    <div className='flex flex-col gap-6 border-y-2 border-y-lightBrown my-6 py-6'>
                        <div className="flex justify-between">
                            <div className='flex gap-5'>
                                <img src="../img/content1.svg" alt="content1" className='object-cover rounded-md h-28 w-24'/>
                                <div className='flex flex-col gap-5 justify-center'>
                                    <h2 className='font-black text-maroon text-sm'>Ice Coffe Palm Sugar</h2>
                                    <p className='text-sm text-maroon'><span className='text-lightBrown font-extrabold'>Toping</span> : Bill Berry Boba, Bubble Tea Gelatin</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 justify-center text-maroon items-end'>
                                <p className='font-normal text-sm'>Rp. 33.000</p>
                                <button><img src="../img/trash.svg" alt="trash" /></button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex gap-5'>
                                <img src="../img/content1.svg" alt="content1" className='object-cover rounded-md h-28 w-24'/>
                                <div className='flex flex-col gap-5 justify-center'>
                                    <h2 className='font-black text-maroon text-sm'>Ice Coffe Palm Sugar</h2>
                                    <p className='text-sm text-maroon'><span className='text-lightBrown font-extrabold'>Toping</span> : Bill Berry Boba, Manggo</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 justify-center text-maroon items-end'>
                                <p className='font-normal text-sm'>Rp. 36.000</p>
                                <button><img src="../img/trash.svg" alt="trash" /></button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-14 mt-10'>
                        <div className='pt-4 border-t-2 border-t-lightBrown w-3/5'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between flex-row'>
                                    <p className='text-maroon text-sm font-normal'>Subtotal</p>
                                    <p className='text-maroon text-sm font-normal'>69.000</p>
                                </div>
                                <div className='flex justify-between flex-row'>
                                    <p className='text-maroon text-sm font-normal'>Qty</p>
                                    <p className='text-maroon text-sm font-normal'>2</p>
                                </div>
                            </div>
                            <div className='pt-4 mt-4 border-t-2 border-t-lightBrown flex flex-row justify-between'>
                                <p className='text-maroon text-sm font-extrabold'>Total</p>
                                <p className='text-maroon text-sm font-extrabold'>69.000</p>
                            </div>
                        </div>
                        <div className='gap-4 bg-red-50 w-2/5 border-2 border-maroon rounded-md flex flex-col justify-center items-center'>
                            <button><img src="../img/struk.svg" alt="struk" /></button>
                            <p className='text-gray-300'>Attache of Transaction</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/5 md:mt-24 mt-14 md:px-8'>
                    <div>
                        <form action="" className='flex flex-col gap-7'>
                            <input type="text" placeholder='Name' autoComplete='off' className='input'/>
                            <input type="text" placeholder='Email' autoComplete='off' className='input' />
                            <input type="text" placeholder='Phone' autoComplete='off' className='input'/>
                            <input type="text" placeholder='Pos Code' autoComplete='off' className='input'/>
                            <input type="text" placeholder='' autoComplete='off' className='mt-2 input w-full h-40' />
                            <button type="button" onClick={() => setPay(true)} className='btn btn-red'>Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {pay ? <Alert modalRef={modalRef} leavePay={leavePay}/> : null}
      </section>
      </>
  )
};

export default Cart;
