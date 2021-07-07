import React from 'react';
import { motion } from "framer-motion";
import CarouselBannar from '../components/CarouselBannar/CarouselBannar'
import Categories from '../components/Categories/Categories'

const Home = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
        >
            <CarouselBannar/>
            <Categories/>
        </motion.div>
    );
};

export default Home;