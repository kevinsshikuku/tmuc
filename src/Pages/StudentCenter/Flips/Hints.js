import React from 'react'
import "./studentcenter.scss";
import colorTheme from "../../../Components/colorTheme";

function Hints({hide}) {
const theme = colorTheme();
  return (
      <div className='hints' style={{color: theme.primary, backgroundColor: theme.farground}}>
        <h1>FLIP GAME</h1>
        <br/> <br/>
          <h3>How well can you remember previous cards and predict the next matching card?</h3> <br/>
          <p>This is a game of flips! take the least number of flip-turns to rank higher
            <span style={{color:"#3cb371"}}> 8 </span> is the highes rank overal which is 100% score</p>
          <br/> <br/>
          <p >Here are some jiberish ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat eaque obcaecati aperiam quod. 
            A, facere nulla veniam laudantium laboriosam vero, vel cumque asperiores molestias adipisci nemo ipsum iure, 
            architecto saepe ipsam dicta deserunt rerum quos maxime consequuntur natus in eos quod. Maxime minus officia ipsum 
            reiciendis suscipit, reprehenderit eligendi?</p> <br/>
          <p className="close" onClick={() => hide()} >Close hints</p>  
      </div>
  )
}
export default Hints;