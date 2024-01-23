import React, { startTransition, useState,useRef} from "react";
import "./machine.css";
import { useInView } from 'react-intersection-observer';
import {Animator,ScrollContainer,ScrollPage,batch,Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { useEffect } from "react";
const Machine = () => {
  
  const ref=useRef();
  const [myElementIsVisible,setMyElementIsVisible]=useState();

  useEffect(()=> {
    const observer=new IntersectionObserver((entries)=>{
      const entry=entries[0];
      setMyElementIsVisible(entry.isIntersecting);
      
    })
    observer.observe(ref.current);
  },[]);
 

  
  return (
    <div>
      <div className="hero-2">
        <div className="mainheading">
          <div className="titlecont">
 
    <h1 ref={ref}
              style={{
                width: "30rem",
                textAlign: "left",
                fontSize: "3rem",
                paddingTop: "15rem",
                
              }}
              
            >
              Never wait to charge. Swap to full batteries in seconds.
            </h1>
    
          </div>
        </div>
        <div>
          <img
            className="gradient"
            src="battery popup edited.png"
            alt="avatar"
          />
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>We are Bat-Ex</h1>
        <div className="day">
          <video
            className="cen"
            src="Day and night battery station video.mp4"
            alt="..."
            autoPlay
            loop
            muted
          />
        </div>
        <div>
          {/* <div>
            <Cards heading="</div>" content="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Machine;
