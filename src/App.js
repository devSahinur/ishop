import React, { useEffect, useRef } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import LoadingBar from "react-top-loading-bar";
import { Switch, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className='app-Inner'>
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Header/>
            <Switch>
              <Route path="/signup">
                <User type="signup" />
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>

          </AnimateSharedLayout>
        </AnimatePresence>
      </div>
      <div></div>
      <Footer/>
    </div>
  );
}

export default App;
