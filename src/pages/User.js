import React from 'react';
import { motion } from "framer-motion";
import Login from '../components/Login/Login'
import Singup from '../components/Signup/Signup'
import Welcome from '../components/Welcome/Welcome'
import PasswordReset from '../components/PasswordReset/PasswordReset'
import Profile from '../components/Profile/Profile'

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
            {type === 'signup' && <Singup/>}
            {type === "welcome" && <Welcome />}
            {type === "passwordReset" && <PasswordReset />}
            {type === "profile" && <Profile />}
        </motion.div>
    );
};

export default User;