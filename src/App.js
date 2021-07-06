import React, { useEffect, useRef } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import LoadingBar from "react-top-loading-bar";
import { Switch, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className='app-Inner'>
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Header/>
            <Switch>
              <Route path="/login">
                {/* <UserPage type="login" /> */}
              </Route>
            </Switch>

          </AnimateSharedLayout>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
