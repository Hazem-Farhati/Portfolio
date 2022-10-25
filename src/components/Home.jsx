import React from 'react'
import '../styles/home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'

const Home = ({theme}) => {
  return (
    <div id={theme}>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img">
              <img
                src="/assets/hazem.jpg"
                alt="about__img"
                className="home__img"
              />
            </div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
}

export default Home