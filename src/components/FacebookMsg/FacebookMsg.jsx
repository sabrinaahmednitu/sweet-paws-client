import React from 'react';
"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
      <FacebookProvider appId="197048946764609" chatSupport>
        <CustomChat pageId="204969982695796" minimized={true} />
      </FacebookProvider>
    );
};

export default FacebookMsg;