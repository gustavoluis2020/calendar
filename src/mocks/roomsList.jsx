const roomsList = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    nome: `Sala ${index + 1}`,
  }));


  roomsList[0].nome = "Fisio";
roomsList[1].nome = "Pilates";
roomsList[2].nome = "Dentista";
roomsList[3].nome = "Cardio";
  
  export default roomsList; 