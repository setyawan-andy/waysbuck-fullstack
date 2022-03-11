const Alert = ({modalRef, leavePay}) => {
    
  return (
      <>
      <div ref={modalRef} onClick={leavePay} className="fixed h-screen w-full left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
        <div className="bg-white shadow-md rounded-md w-2/5 md:w-2/5 font-lato">
            <div className="px-7 py-8 flex justify-center items-center">
                    <h2 className="text-green font-normal text-lg font-lato">Thank you for ordering in us, please wait to verify your order</h2>
            </div>
        </div>
      </div>
      </>
  )
};

export default Alert;
