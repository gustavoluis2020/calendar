

import React from 'react';
import './roomsPage.css'
import { useParams } from 'react-router-dom'; 
import roomsList from '../../mocks/roomsList';
import DayCalendar from '../../components/dayCalendar/dayCalendar';

const RoomPage = ({ isAllRooms , numRooms }) => {
  
  const roomStyle = {
    width: `${100 / numRooms}%`,
    border: '1px solid black',
    };
  if (isAllRooms) {
     return (
      <>
      <div className="rooms-container" >
      {roomsList.map((room) => (
          <div key={room.id} className="room-item" style={roomStyle} >
              <h1 className='center-top-title'> {room.nome}</h1>
              <h1 className='center-top-title' >Sala: {room.id}</h1>
              <DayCalendar roomId={room.id} viewType="Day"/>
          </div>
      ))}
  </div>
  </>
    );
  }
  const { roomId } = useParams();
  const room = roomsList.find(room => room.id === parseInt(roomId));

  if (!room) {
    return <div>Sala não encontrada</div>; 
  }
   return (
    <>
     <h1 className='center-top-title'>Sala {room.id}</h1>
       <h2 className='center-top-title'  >{room.nome}</h2>
      <DayCalendar roomId={room.id} viewType="Week" />
      </>
  );
};

export default RoomPage;
