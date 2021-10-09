import React from 'react'
import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadContext } from '../../Context';


/** Photos from google maps */
function Photos() {

   const [,dispatch] = useLoadContext();
   const handleClick = () => {
        ReactGA.event({
              category:"Button",
              action:"clicked on school photos",
              transport:"beacon",
              label:"SCHOOL PHOTOS",
            })
    }

   const clickHandler = () => {
     dispatch({
       type: "LOAD",
       payload: true
     })
    handleClick()
   }

  return (
    <div className="Photos">
       <h4>photos</h4>
         <a className="P" onClick={clickHandler}  href="https://www.google.com/maps/uv?pb=!1s0x19d4d455c5c14c23%3A0x49c2401d906f4a6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP4WgWGyXr99V12ReGAzwwAqzgBRBScFMN3Q39U%3Dw120-h160-k-no!5stmuc%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNMYCopuu9kCfQfWj2rwpHmO7iuIZg0G0Gu1EoR&hl=en&sa=X&ved=2ahUKEwjChY-hrPvxAhUXA2MBHUCyAqwQoiowEnoECEIQAw&viewerState=ga">photos</a>
    </div>
  )
}

export default Photos;