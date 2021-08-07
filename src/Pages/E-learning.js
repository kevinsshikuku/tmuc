import ReactGA from 'react-ga';
import "./pages.scss";
import { useLoadDispatch } from '../Context/loading';

function Elearning() {

   const loadDispatch = useLoadDispatch();
   const handleClick = () => {
        ReactGA.event({
              category:"View",
              action:"clicked",
              transport:"beacon",
              label:"E-learning",
            })
         handleClick()
      }


   const clickHandler = () => {
     loadDispatch({
       type: "LOAD",
       payload: true
     })
     handleClick()
   }

  return (
    <div className="Elearning">
       <h4>E-learning</h4>
       <button className="E"  >
          <a onClick={clickHandler} href="https://elearning.tmuc.ac.ke/">E-learning</a>
        </button>
    </div>
  )
}

export default Elearning;
