import React, { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

const AntDatepicker = ({onChange, name, value}) => {
  const [date, setDate] = useState(new Date());

  

  function onChange(date, dateString) {
    setDate(date);
  }
  

  return (
    
    
    <div>
     
     <label>{name}</label>
      <div style={{marginTop: '4px'}}>
      <DatePicker 
      name={name}
      onChange={onChange} />
      </div>
      
    </div>
  );
}

export default AntDatepicker
{/* <DatePicker onChange={onChange} /> */}