import React from 'react';
import NewFriend from '../NewFriend/NewFriend';
import Banner from './Banner/Banner';
import DeliverJoy from './DeliverJoy/DeliverJoy';
import FavouriteBreeds from './FavouriteBreeds/FavouriteBreeds';
import FeaturedPuppy from './FeaturedPuppy/FeaturedPuppy';
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
            <NewFriend></NewFriend>
            <FeaturedPuppy></FeaturedPuppy>
            <DeliverJoy></DeliverJoy>
            <SaleEverywhere></SaleEverywhere>
        </div>
    );
};

export default Home;