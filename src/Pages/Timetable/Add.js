import React, { useState } from 'react';
import { TextareaAutosize} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, Check} from '@mui/icons-material';
import colorTheme from "../../Components/colorTheme";

function Add({close}) {

const initial_values = {Day:'', Time:'', Activity:''}
const [ values, setValue] = useState(initial_values);
const [ day, setDay] = useState(false);
const theme = colorTheme();


/* ---------------------------------------------------------------------------------------------- */
// Save student timetable data to localstorage.
const saveData = (e) => {

//check for empty fields.
  if(values.Day === '' || values.Time === '' || values.Activity === '') {
     return
  }

//New data
  let newData = JSON.stringify( [ values ]);
  let existingData = JSON.parse(localStorage.getItem(values.Day));

//If there is existing data check if the day in values exists
  if(existingData){
     let updatedData = JSON.stringify([ ...existingData, values]);
     localStorage.setItem(values.Day,  updatedData);
     setValue(initial_values);
     close(true);
     return
  }

  if(!existingData){
    localStorage.setItem( values.Day, newData);
    setValue(initial_values);
    close(true);
    return
  }
}


/* -------------------------------------------------------------------------- */

const changeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValue({...values, [name]: val})
}

const setdayHandler = (e) => {
  const day = e.target.innerText;
  setValue({...values, "Day": day})
  setDay(!day)
}

//Save data and close the input form
const complete = () => {
   saveData()
   close()
}
  return (
     <div  className="add_item">
         <div className='close' onClick={complete}> <sub>Add</sub> <Check/></div>
         <div className="item_data">
             <div className="day_input">
                <div className="day"  onClick={() => setDay(!day)}>
                  <div> { !values?.Day && "Day : eg. "}  {values?.Day === "" ?
                     <span style={{color:"green"}}>Sunday</span> : values?.Day}
                  </div>
                  { day &&  <KeyboardArrowUp/>}
                  { !day && <KeyboardArrowDown/>}
              </div>
              { day &&
                <div className="day_list">
                <table>
                   <br/>
                    <tr>
                      <td onClick={setdayHandler}>Monday</td> <br/>
                      <td onClick={setdayHandler}>Friday</td>
                    </tr> <br/>
                    <tr>
                      <td onClick={setdayHandler}>Tuesday</td>
                      <td onClick={setdayHandler}>Thursday</td>
                    <td onClick={setdayHandler}>Saturday</td> <br/>

                    </tr> <br/>
                    <tr>

                    <td onClick={setdayHandler}>Wednesday</td> <br/>
                    <td onClick={setdayHandler}>Sunday</td>
                    </tr>
                </table>
                </div>
               }
             </div>

              <input
                autocomplete="off"
                value={values?.Time}
                className="time_input" type="text"
                name="Time" onChange={changeHandler}
                placeholder=" Time eg 17:00 - 18:00"
                style={{color: theme.primary}}
                />

              <TextareaAutosize
                    minRows={1}
                    name="Activity"
                    autoComplete="off"
                    onChange={changeHandler}
                    value={values?.Activity}
                    className="activity_input"
                    style={{color: theme.primary}}
                    placeholder=" Activity eg. Football, UCI 404, Lunch etc"
                  />
         </div>
       </div>
  )
}

export default Add
