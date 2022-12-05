import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [initialData, setInitialData] = useState([{}]) 


  useEffect(() => {
    fetch('./all_in_prediction')
      .then(response => response.json())
      .then(data => setInitialData(data))
      
      // (async () => {
      //   try {
      //     // await async "fetchBooks()" function
      //     const initialData = await fetch('./all_in_prediction');
      //     setInitialData(initialData);
      //   } catch (err) {
      //     console.log('Error occured when fetching initialdata');
      //   }
      // })();

  }, []);

 
  return (
    <div className="App">
      <h1> {initialData.prediction}</h1>    
      
        {/* <h4>'Received Packets' : {initialData.sample['Received Packets'][initialData.id]}</h4>
         <h4>'Received Bytes' : {initialData.sample['Received Bytes'][initialData.id]}</h4>
         <h4>'Sent Bytes' : {initialData.sample['Sent Bytes'][initialData.id]}</h4>
         <h4>'Sent Packets' : {initialData.sample['Sent Packets'][initialData.id]}</h4>
         <h4>'Port alive Duration (S)' : {initialData.sample['Port alive Duration (S)'][initialData.id]}</h4>
         <h4>'Delta Received Packets' : {initialData.sample['Delta Received Packets'][initialData.id]}</h4>
         <h4>'Delta Received Bytes' : {initialData.sample['Delta Received Bytes'][initialData.id]}</h4>
         <h4>'Delta Sent Bytes' : {initialData.sample['Delta Sent Bytes'][initialData.id]}</h4>
         <h4>'Delta Sent Packets' : {initialData.sample['Delta Sent Packets'][initialData.id]}</h4>
         <h4>'Total Load/Rate' : {initialData.sample['Total Load/Rate'][initialData.id]}</h4>
         <h4>'Total Load/Latest' : {initialData.sample['Total Load/Latest'][initialData.id]}</h4>
         <h4>'Unknown Load/Rate' : {initialData.sample['Unknown Load/Rate'][initialData.id]}</h4>
         <h4>'Unknown Load/Latest' : {initialData.sample['Unknown Load/Latest'][initialData.id]}</h4>
         <h4>'Latest bytes counter' : {initialData.sample['Latest bytes counter'][initialData.id]}</h4>
         <h4>'Packets Looked Up' : {initialData.sample['Packets Looked Up'][initialData.id]}</h4>
         <h4>'Packets Matched' : {initialData.sample['Packets Matched'][initialData.id]}</h4>   */}
    

      </div>

  );
}

export default App;
