import Landing from "./components/Landing";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import AdminPage from "./components/AdminPage";
import AddProduct from "./components/AddProduct";
import AddToping from "./components/AddToping";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./components/Auth";

import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

//init token on axios everytime it refreshed
if (localStorage.token){
  setAuthToken(localStorage.token);
}


function App() {

  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);

  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }

    //redirect auth
    if(state.isLogin === false){
      history.push("/");
    } else {
      if(state.user.status === "admin"){
        history.push("/admin-page");
      } else if(state.user.status === "customer"){
        history.push("/home");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      //if token is incorrect
      if(response.status === 404){
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      
      //get user data
      let payload = response.data.data.user;
      //get token from local storage
      payload.token = localStorage.token;

      //senda data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
    {/* <Dropdown /> */}
    <Switch>
     
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Landing} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/product/:id" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin-page" component={AdminPage} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/addtoping" component={AddToping} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
     
    </Switch>
      {/* <Landing /> */}
      {/* <Products /> */}
      {/* <Profile /> */}
      {/* <Cart /> */}
      {/* <Transaction /> */}
      {/* <AddProduct /> */}
      {/* <AddToping /> */}
      {/* <Dropdown /> */}
    </>
  );
}

export default App;
