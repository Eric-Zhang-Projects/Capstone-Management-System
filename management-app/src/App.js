import React from "react";
import Home from "./Pages/Home/Home.js";
import Header from "./components/Header/Header.js";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  //user: null,
  //token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //localStorage.setItem("user", JSON.stringify(action.payload.user));
      //localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        //user: action.payload.user,
        //token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        //user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token,
        },
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
