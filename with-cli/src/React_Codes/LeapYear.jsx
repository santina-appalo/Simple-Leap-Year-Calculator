import React, { useState } from 'react';

function LeapYear() {
  const [year, setYear] = useState('');
  const [isLeapYear, setIsLeapYear] = useState(null);

  const handleInputChange = (e) => {
    setYear(e.target.value);
  };

  const checkLeapYear = () => {
    const yearInt = parseInt(year, 10);
    if (!isNaN(yearInt)) {
      const leap = (yearInt % 4 === 0 && yearInt % 100 !== 0) || yearInt % 400 === 0;
      setIsLeapYear(leap);
    } else {
      setIsLeapYear(null);
    }
  };

  return (
    <div style={{ padding: '20px', marginLeft:"550px", marginTop:"50px" }} >
      <h1>Leap Year Finder</h1>
      <input 
        type="text"
        value={year}
        onChange={handleInputChange}
        placeholder="Enter a year" style={{marginLeft:"35px", marginTop:"15px"}}
      />
      <button onClick={checkLeapYear} style={{marginLeft:"5px"}}>Find</button>
      {isLeapYear !== null && (
        <p style={{marginLeft:"55px", marginTop:"5px"}}>" {year} is {isLeapYear ? '' : 'not '}a leap year"</p>
      )}
    </div>
  );
}

export default LeapYear;
