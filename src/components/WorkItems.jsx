import React, { useEffect, useState } from 'react'
import "../styles/work.css"
import ReactPlayer from 'react-player';

const WorkItems = ({ item }) => {
  const [showVid, setShowVid] = useState(false)
  useEffect(() => {}, [item.video]);
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="workItems_img" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {showVid ? (
        <>
          {" "}
          <ReactPlayer
            width={300}
            height={200}
            url={item.video}
            controls
            muted
          />{" "}
          <span onClick={() => setShowVid(false)} className="close">
            X
          </span>
        </>
      ) : null}

      <span onClick={() => setShowVid(true)} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
    </div>
  );
}

export default WorkItems