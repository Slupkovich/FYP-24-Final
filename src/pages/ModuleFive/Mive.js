import React, { useState, useEffect } from 'react';
import './HeroSecMive.css';
import UnderCon from '../../components/UnderCon/UnderCon';
import Footer from '../../components/Footer';
import AuthPrompt from '../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../components/AuthPrompt/LoadingIn';
import { AccountContext } from "../../components/Account";
import { useContext } from 'react';

const HeroSecMive = () => {
  return (
      <section className="heroFive">
          <div className="scroll-indicators">
              <span className="arrow-down left"></span>
              <span className="arrow-down right"></span>
          </div>
      </section>
  );
};



function Mive() {
  const { getSession } = useContext(AccountContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getSession()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getSession]);
  
  // Before the check is complete, you can return null or a loading spinner
  if (isLoading) {
    return <LoadingIn />;
  }
  
  if (!isLoggedIn) {
    return <AuthPrompt />;
  }

  return (
    <div>
      <HeroSecMive />
      <UnderCon />
      <Footer />

    </div>
  );
}

export default Mive;








