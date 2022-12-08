import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  

  function refreshPage() {
    window.location.reload(false);
  }

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  const [initialData, setInitialData] = useState([{}]) 

  useEffect(() => {
    fetchJson('./all_in_prediction')
      .then(data => setInitialData(data));
  }, []);

  if(!initialData.sample) {
    return <div>Loading...</div>
  }
  else
  return (
    <div className="App">
          <div>
      <button onClick={refreshPage}>Refresh</button>
    </div>
      <div id="prediction"> <h2 > {initialData.prediction}</h2>   </div>
 
      <div id="content-div">
      <div id="comment-sample-data"> 
        
        <h2> Port Statistics</h2>
        <h4>Received Packets: </h4>
        <h4>Received Bytes:</h4>
        <h4>Sent Bytes: </h4>
        <h4>Sent Packets: </h4>
        <h4>Port alive Duration (S): </h4>

        <h2> Delta Port Statistics</h2>
        <h4>Delta Received Packets: </h4>
        <h4>Delta Received Bytes: </h4>
        <h4>Delta Sent Bytes: </h4>
        <h4>Delta Sent Packets: 	</h4>

        <h2> Statistics</h2>
        <h4>Total Load/Rate:</h4>
        <h4>Total Load/Latest: </h4>
        <h4>Unknown Load/Rate: 	</h4>
        <h4>Unknown Load/Latest: 	</h4>
        <h4>Packets Looked Up: 	</h4>
        <h4>Packets Matched: </h4>  
        </div>
        <div id="comment-sample-data-v2"> 
        
        <h2> Port Statistics comment</h2>
        <h4>Number of packets received by the port</h4>
        <h4>Number of bytes received by the port</h4>
        <h4>Number of bytes sent</h4>
        <h4>Number of packets sent by the port</h4>
        <h4>The time port has been alive in seconds</h4>

        <h2> Delta Port Statistics comment</h2>
        <h4>Number of packets received by the port</h4>
        <h4>Number of bytes received by the port</h4>
        <h4>Number of bytes sent</h4>
        <h4>Number of packets sent by the port</h4>

        <h2> Statistics comment</h2>
        <h4>Obtain the current observed total load/rate (in bytes/s) on a link.</h4>
        <h4>Obtain the latest total load bytes counter viewed on that link.</h4>
        <h4>Obtain the current observed unknown-sized load/rate (in bytes/s) on a link.</h4>
        <h4>Obtain the latest unknown-sized load bytes counter viewed on that link.</h4>
        <h4>Returns the number of packets looked up in the table.</h4>
        <h4>Returns the number of packets that successfully matched in the table.</h4>  
        </div>

        <div id="sample-data">
        <h2> Port Statistics data</h2>
        <h4>{initialData.sample['Received Packets'][initialData.id]}</h4>
        <h4>{initialData.sample['Received Bytes'][initialData.id]}</h4>
        <h4>{initialData.sample['Sent Bytes'][initialData.id]}</h4>
        <h4>{initialData.sample['Sent Packets'][initialData.id]}</h4>
        <h4>{initialData.sample['Port alive Duration (S)'][initialData.id]}</h4>
        <h2> Delta Port Statistics data</h2>
        <h4>{initialData.sample['Delta Received Packets'][initialData.id]}</h4>
        <h4>{initialData.sample['Delta Received Bytes'][initialData.id]}</h4>
        <h4>{initialData.sample['Delta Sent Bytes'][initialData.id]}</h4>
        <h4>{initialData.sample['Delta Sent Packets'][initialData.id]}</h4>
        <h2> Statistics data</h2>
        <h4>{initialData.sample['Total Load/Rate'][initialData.id]}</h4>
        <h4>{initialData.sample['Total Load/Latest'][initialData.id]}</h4>
        <h4>{initialData.sample['Unknown Load/Rate'][initialData.id]}</h4>
        <h4>{initialData.sample['Unknown Load/Latest'][initialData.id]}</h4>
        <h4>{initialData.sample['Packets Looked Up'][initialData.id]}</h4>
        <h4>{initialData.sample['Packets Matched'][initialData.id]}</h4>  
        </div>


      {/* <div id="sample-data">
        <h4>'Received Packets' : {initialData.sample['Received Packets'][initialData.id]}</h4>
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
        <h4>'Packets Looked Up' : {initialData.sample['Packets Looked Up'][initialData.id]}</h4>
        <h4>'Packets Matched' : {initialData.sample['Packets Matched'][initialData.id]}</h4>  
        </div> */}

       
        </div>

      </div>

  );
}

export default App;
