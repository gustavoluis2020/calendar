import React from 'react';
import './modal.css'; 

const Modal = ({ isOpen, onClose, children , event, onSave, onDelete ,  roomId    }) => {


  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal'  >
        <button className='modal-close-button' onClick={onClose}>
          Fechar
        </button>
        {event && (
          <>  
        <h2>{event.text}</h2>
        <p>ID da sala: {roomId}</p>  
        <p>ID do evento: {event.id}</p>
        <p>Data: {event.start.toString()}</p>
        <p>Hora de início: {event.start.toString()}</p>
        <p>Hora de término: {event.end.toString()}</p>
        </>
        )}
        <div className='modal-buttons'>
          <button onClick={onSave}>Salvar</button>
          <button onClick={onDelete}>Excluir Evento</button>
        </div>
       
        {children}
      </div>
    </div>
  );
};

export default Modal;
