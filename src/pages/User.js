import React from 'react';
import { motion } from "framer-motion";
import Login from '../components/Login/Login'

const User = ({ type }) => {
    return (
        <motion.div
            inherit='initial'
            animate='in'
            exit='out'
            // variants={pageSlide}
            // transition={pageTransition}
        >
            {type === 'login' && <Login/>}
            {type === 'login' && <Login/>}
            {type === 'login' && <Login/>}
            {type === 'login' && <Login/>}
            {type === 'login' && <Login/>}
        </motion.div>
    );
};

export default User;