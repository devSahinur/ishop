import React from 'react';
import { motion } from "framer-motion";
import CarouselBannar from '../components/CarouselBannar/CarouselBannar'

const Home = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
        >
            <CarouselBannar/>

        </motion.div>
    );
};

export default Home;