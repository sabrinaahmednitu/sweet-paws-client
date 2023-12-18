import React from 'react';
import Banner from './Banner/Banner';
import DeliverJoy from './DeliverJoy/DeliverJoy';
import FavouriteBreeds from './FavouriteBreeds/FavouriteBreeds';
import PuppyChar from './PuppyChar/PuppyChar';
import SaleEverywhere from './SaleEverywhere/SaleEverywhere';
import TrustedCommunity from './TrustedCommunity/TrustedCommunity';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FavouriteBreeds></FavouriteBreeds>
            <TrustedCommunity></TrustedCommunity>
            <PuppyChar></PuppyChar>
            <DeliverJoy></DeliverJoy>
            <SaleEverywhere></SaleEverywhere>
        </div>
    );
};

export default Home;