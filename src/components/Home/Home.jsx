import React from 'react';
import Banner from './Banner/Banner';
import FavouriteBreeds from './FavouriteBreeds/FavouriteBreeds';
import PuppyChar from './PuppyChar/PuppyChar';
import SaleEverywhere from './SaleEverywhere/SaleEverywhere';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FavouriteBreeds></FavouriteBreeds>
            <PuppyChar></PuppyChar>
            <SaleEverywhere></SaleEverywhere>
        </div>
    );
};

export default Home;