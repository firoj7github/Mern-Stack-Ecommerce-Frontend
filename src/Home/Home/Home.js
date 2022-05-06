import React from 'react';
import Footer from '../../Share/footer/Footer';
import Header from '../../Share/Header/Header';




import Touce from '../Touce/Touce';
import Banner from './Banner/Banner';
import Design from './design/Design';
import Feature from './feature/Feature';
import Inventory from './Inventory/Inventory';
import Side from './side/Side';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Design></Design>
            <Feature></Feature>
            <Inventory></Inventory>
            <Side></Side>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;