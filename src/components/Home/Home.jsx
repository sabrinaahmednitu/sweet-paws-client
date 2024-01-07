import React from 'react';
import NewFriend from './NewFriend/NewFriend';
import Banner from './Banner/Banner';
import DeliverJoy from './DeliverJoy/DeliverJoy';
import FavouriteBreeds from './FavouriteBreeds/FavouriteBreeds';
import FeaturedPuppy from './FeaturedPuppy/FeaturedPuppy';
import PuppyChar from './PuppyChar/PuppyChar';
import SaleEverywhere from './SaleEverywhere/SaleEverywhere';
import TrustedCommunity from './TrustedCommunity/TrustedCommunity';
import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
import Helmet from 'react-helmet';
import FacebookMsg from '../FacebookMsg/FacebookMsg';
const Home = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - SweetPaws</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Banner></Banner>
        <FavouriteBreeds></FavouriteBreeds>
        <TrustedCommunity></TrustedCommunity>
        <PuppyChar></PuppyChar>
        <NewFriend></NewFriend>
        <FeaturedPuppy></FeaturedPuppy>
        <DeliverJoy></DeliverJoy>
        <RecentlyViewed></RecentlyViewed>
        <SaleEverywhere></SaleEverywhere>
        {/* <div>
          <MessengerCustomerChat
            pageId="204969982695796"
            appId="<3296407690658074>"
            htmlRef="<REF_STRING>"
          />
        </div> */}
        <FacebookMsg></FacebookMsg>
      </div>
    );
};

export default Home;