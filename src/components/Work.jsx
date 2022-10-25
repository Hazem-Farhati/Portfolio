import React from 'react'
import "../styles/work.css"
import Works from './Works'
const Work = ({ theme }) => {
  return (
    <div id={theme}>
      <section className="work section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>
        <Works theme={theme} />
      </section>
    </div>
  );
};

export default Work