import { useState, Fragment, useEffect, useRef, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserContext } from "../context/userContext";
import { Link, useHistory } from "react-router-dom";
import { API } from "../config/api";


const Dropdown = () => {

  const [state, dispatch] = useContext(UserContext);

  let history = useHistory();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await API.get("/users");
      //store to useState
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  }

  const user = users.map(item => {
    return item.id
  });

  return (
      <>

<div className="w-30 text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm">
          <img src="../img/profile.svg" alt="profile" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="px-1 py-1 ">
             
            <Link to={'/profile/' + user[0]}>
              <Menu.Item>
                
                {({ active }) => (
                  
                  <button
                    className={`${
                      active ? 'bg-red-100 text-maroon' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                    
                  >
                    <img src="../img/profileuser.svg" alt="dropdown1" className="w-5 h-5 mr-5"/>
                    Profile
                  </button>
      
                )}
                
              </Menu.Item>
              </Link>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                  className={`${
                    active ? 'bg-red-100 text-maroon' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={logout}
                  >
                    <img src="../img/dropdown3.svg" alt="dropdown3" className="w-5 h-5 ml-1 mr-5"/>
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

    
      </>
  )
};

export default Dropdown;
