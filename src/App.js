import React, { useRef, useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import View from "./components/View";
import Write from "./components/Write";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";

import Swap from "./pages/Swap";
import About from "./pages/About";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const PostStateContext = React.createContext();
export const CreateStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(1);

  const onCreate = (title, writer, content, label, type) => {
    dispatch({
      type: "CREATE",
      data: {
        seq: dataId.current,
        title,
        writer,
        content,
        createdAt: new Date().getTime(),
        label,
        type,
      },
    });
    dataId.current += 1;
  };

  return (
    <PostStateContext.Provider value={data}>
      <CreateStateContext.Provider value={{ onCreate }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/view/:seq">
              <View />
            </Route>
            <Route path="/write">
              <Write />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/swap">
              <Swap />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/mypage">
              <Mypage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CreateStateContext.Provider>
    </PostStateContext.Provider>
  );
}

export default App;
