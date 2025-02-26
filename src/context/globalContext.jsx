import React from "react";


const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},    
    showEventModal: false,  
    setShowEventModal: (show) => {},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: (evt) => {},
    setLabels : (labels) => {},
    labels: [],
    updateLabel: ({ label, checked }) => {},
    filteredEvents: [],


});   

export default GlobalContext;