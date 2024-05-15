
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import RoomPage from './components/roomsPage/roomsPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState  } from 'react';
import roomsList from './mocks/roomsList';


const App = () => {
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [numRooms, setNumRooms] = useState(0);
  
 

  return (
    <>
    <Router>
    <div className='app-container'>
    <Sidebar setShowAllRooms={setShowAllRooms} setNumRooms={setNumRooms} /> 
    <div className='padding2'>
    
        <Routes>
          
          <Route path="/room/:roomId" element={<RoomPage      />} />
          <Route path="/all-rooms" element={<RoomPage numRooms={numRooms} isAllRooms={showAllRooms} />} />
      
       </Routes>
       </div>
       </div>
    </Router>
     </> 
  );
};
export default App;

// function App() {
 

//   return (
//     <>
//     <div>
//         <Sidebar>
//             </Sidebar>

//     </div>
//       {/* <Sidebar/> */}
     
//     </>
//   )
// }

// export default App
