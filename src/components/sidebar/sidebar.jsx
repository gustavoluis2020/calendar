import React, { useState , useEffect  } from 'react';
import './sidebar.css';
import roomsList from '../../mocks/roomsList';
import { useNavigate , useLocation} from 'react-router-dom';
import { registerLocale } from "react-datepicker"; 
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import SmallCalendar from '../smallCalendar/smallCalendar';


registerLocale('pt-BR', ptBR);

const Sidebar = ({ children , setShowAllRooms , setNumRooms }) => {
  const navigate = useNavigate();
  const location = useLocation();
   
   /// definir botão todas como default  
    useEffect(() => {
      setNumRooms(roomsList.length);
      if (location.pathname === '/') {
          setActiveButton('all');
          setShowAllRooms(true);
          navigate('/all-rooms');
      } else if (location.pathname === '/all-rooms') {
          setActiveButton('all');
          setShowAllRooms(true);
      } else {
          const roomId = location.pathname.split('/room/')[1];
          setActiveButton(roomId);
          setShowAllRooms(false);
      }
  }, []);
   
  const [activeButton, setActiveButton] = useState('all');
   
    const handleClick = (roomId) => {
        setActiveButton(roomId);
        setShowAllRooms(false);
       navigate(`/room/${roomId}`);
      };

  
    return (
      <div className="container">
       
          <h2>Calendario</h2>
          <SmallCalendar />
      {/* <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date) } dateFormat={'dd/MM/yyyy'} locale="pt-BR" /> */}
     
         <div className="sidebar">
         <h2>Salas</h2>
        
              <button className={   activeButton === 'all' ? 'active' : ''}
         onClick={() => { setActiveButton('all'); setShowAllRooms(true); navigate('/all-rooms'); }}
        >Todas</button>

        {roomsList.map((room) => (
          <button key={room.id}
          className={activeButton === room.id ? 'active' : ''} 
          onClick={() => handleClick(room.id)}
           >{room.nome}
           </button>
        ))}
        {children}
        </div>
    
     
  </div>
    );
  };
  
  export default Sidebar;
