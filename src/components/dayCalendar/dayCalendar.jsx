import React, { useState , useEffect} from 'react';
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react';
import './dayCalendar.css';
import Modal from '../../components/modal/modal';

const DayCalendar = ({ roomId , numRooms , viewType = "Week" , selectedDate: initialSelectedDate  }) => {
    const [calendar, setCalendar] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  
  /// lista de cores para cada sala
  const colorMap = {
    1: "green",
    2: "purple",
    3: "orange",
    4: "red",
   
   };

/// mudar a cor do evento de acordo com a sala
const onBeforeEventRender = (e, s) => {
  /// Verificando se o evento pertence à sala atual
  if ( s &&  s.resourceId === roomId) {
      /// Definindo a cor de fundo com base no mapeamento de cores
      e.backgroundColor = colorMap[roomId] || "";
  }
};


  const onTimeRangeSelected = (args) => {
       const newEvent = {
      start: args.start,
      end: args.end,
      id: DayPilot.guid(), 
      text: "Evento selecionado",
     backColor: colorMap[roomId] || "    "  
    
    };
   
    /// setar os eventos para cada sala pelo id
    setEvents({
      ...events,
      [roomId]: [...(events[roomId] || []), newEvent]
    });
      args.control.clearSelection();
      setSelectedEvent(newEvent);
      setModalIsOpen(true);
      }

  /// selecionar o evento e abrir modal     
  const onEventClick = (args) => {
    setSelectedEvent(args.e.data);
    setModalIsOpen(true);
     }
 
     /// fechar modal
  const closeModal = () => {
    setModalIsOpen(false);
  }
  
  /// salvar evento
  const onSave = () => {
        closeModal();
  }
  
   /// deletar evento  
  const onDelete = () => {
    if (selectedEvent) {
      setEvents({
        ...events,
        [roomId]: events[roomId].filter(event => event.id !== selectedEvent.id)
      });
    }
    closeModal();
  }

  

  useEffect(() => {
    const adjustedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60 * 1000);
    setSelectedDate(adjustedDate);
  }, [initialSelectedDate]);

  const config = {
    locale: "pt-br",
    onTimeRangeSelected: onTimeRangeSelected,  
    events:  events[roomId] || [],
    startDate: selectedDate,
    onEventClick: onEventClick,
    onBeforeEventRender: onBeforeEventRender,
    dayBeginsHour: 7, 
    dayEndsHour: 19 ,
  };
 
  return (
    
    <div className="fullscreen">
    <div className="main-body">
      <DayPilotCalendar
      
       ref={setCalendar}
       viewType={viewType}  {...config}
       heightSpec={"Parent100Pct"}
      />
        <Modal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        event={selectedEvent} 
        onSave={onSave} 
        onDelete={onDelete}
        roomId={roomId}
        numRooms={numRooms}
      />
     </div>
    </div>
  );
}

export default DayCalendar;