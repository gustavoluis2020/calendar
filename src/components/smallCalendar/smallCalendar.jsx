

import React, { useContext, useEffect, useState } from "react";
 import { getMonth } from "../../utils/month";
 import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
 import ChevronRightIcon from '@mui/icons-material/ChevronRight';
 import dayjs from "dayjs";
 import GlobalContext from "../../context/globalContext";
 import "./smallCalendar.css";
 import "dayjs/locale/pt-br";
 
 
const SmallCalendar = () => {
    dayjs.locale('pt-br');
  

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth , setCurrentMonth] = useState(getMonth());


    const { monthIndex , setSmallCalendarMonth , setDaySelected , daySelected  } = useContext(GlobalContext);


    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);
    
        function handlePrevMonth() {
            setCurrentMonthIdx(currentMonthIdx - 1);
          }
          function handleNextMonth() {
            setCurrentMonthIdx(currentMonthIdx + 1);
          }
              function getDayClass(day) {
            const format = "DD/MM/YYYY";
            const nowDay = dayjs().format(format);
            const currDay = day.format(format);
           const slcDay = daySelected && daySelected.format(format);
           if (nowDay === currDay) {
            return "current-day";
          } else if (currDay === slcDay) {
            return "selected-day";
          } else {
            return "";
          }        
          }

          const daysInPortuguese = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; 

  return (
    <div className="">
    <header className="topB">
      <p className="textTitle">
        {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
          "MMMM YYYY"
        )}
      </p>
      <div>
      <button onClick={handlePrevMonth}>
  <ChevronLeftIcon className="iconStyle"/>
</button>
<button onClick={handleNextMonth}>
  <ChevronRightIcon className="iconStyle"/>
</button>
       
      </div>
    </header>
    <div className="grid">
      {currentMonth[0].map((day, i) => {
         const dayOfWeek = day.day(); 
         const dayInPortuguese = daysInPortuguese[dayOfWeek]; 
                 return(
        <span key={i} className="text-sm">
             {dayInPortuguese}
                </span>
         );
})}
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSmallCalendarMonth(currentMonthIdx);
                setDaySelected(day);
              }}
              className={`w-full ${getDayClass(day)}`}
            >
              <span className="text-sm">{day.format("D")}</span>
            </button>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
  )
}

export default SmallCalendar