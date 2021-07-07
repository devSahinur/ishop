import React from 'react';
import { motion } from "framer-motion";
import CarouselBannar from '../components/CarouselBannar/CarouselBannar'
import Categories from '../components/Categories/Categories'
import Main from '../components/Main/Main'

const Home = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
        >
            <CarouselBannar/>
            <Categories/>
            <Main/>
        </motion.div>
    );
};

export default Home;