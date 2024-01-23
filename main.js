import React,{useRef,useState,useEffect} from "react";
import styles from "./styles/main.css";
import Machine from "./machine";
import { useInView } from 'react-intersection-observer';

const Mainpage=() =>{
  // const {ref,InView}= useInView();

  const ref=useRef();
  const [myElementIsVisible,setMyElementIsVisible]=useState();

  useEffect(()=> {
    const observer=new IntersectionObserver((entries)=>{
      const entry=entries[0];
      setMyElementIsVisible(entry.isIntersecting);
      
    })
    observer.observe(ref.current);
  },[]);

 

  

    


      const [bada, setBada] = useState(true);

      const showButton = () => {
        if (window.innerWidth <= 960) {
          setBada(false);
        } else {
          setBada(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);

      window.addEventListener("resize", showButton);
  return (
    <div>
          {bada &&
            <div className="hero-2">
        <div className="mainheading">
          <div className="titlecont">
            <h1 style={{ fontSize: "5rem", fontWeight: "800" }}>Get Charged</h1>
            <h1 style={{ fontSize: "5rem", fontWeight: "800" }}>Or Exhange</h1>
            <p style={{ fontSize: "1.6rem", fontWeight: "500" }}>
              Your Batteries
            </p>
            <p className="headingpara" style={{ width: "500px" }}>
              The web-app is to provide EV owner the convenience of locating
              charging stations on aerial map, exchange the batteries,
              recommendations on paying charges online!
            </p>
          </div>
          <div>
            <img
              src="2.0.png"
              alt="..."
              style={{ width: "100%", paddingLeft: "150px" }}
            />
          </div>
        </div>
        <div>
          <img className="gradient" src="BG website.png" alt="avatar" />
        </div>
          </div>}
          {!bada && <div>
              
          </div>}
          <div>
              <Machine/>
          </div>

          <div className="newDiv">
          <h1 ref={ref}  ><span className={`${myElementIsVisible ? styles.animate:styles.newH1}`}>We are the biggest battery Batt-ex</span></h1>
          </div>
          <div className="newDiv">
          <h1 ref={ref} className="newH1"><span>{myElementIsVisible ? "yes":"no"}</span></h1>
          </div>
          <div className="newDiv">
          <h1 ref={ref} className="newH1"><span>{myElementIsVisible ? "yes":"no"}</span></h1>
          </div>
          <div className="newDiv">
          <h1 ref={ref} className="newH1"><span>{myElementIsVisible ? "yes":"no"}</span></h1>
          </div>
      
          
    </div>

    
  );
}

export default Mainpage;
