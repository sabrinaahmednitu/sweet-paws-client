import React from 'react';
import Helmet from 'react-helmet';
import './Error.css';
import error from '../../../images/error/error-404.jpg'
const Error = () => {
   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, []);
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error - SweetPaws</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="error-main">
          <div>
            <img src={error} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Error;