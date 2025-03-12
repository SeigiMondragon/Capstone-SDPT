import React from 'react';
import NavBar from './Navbar.jsx';
import HomeBody from './HomeBody.jsx'

function Home() {
    return (
        <>
          <NavBar useHomeBG={true}/>
          <HomeBody/>
        </>
    );
}

export default Home;