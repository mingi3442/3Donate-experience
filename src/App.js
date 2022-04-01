import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
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
        <Route path="/profile">Profile</Route>
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
  );
}

export default App;
