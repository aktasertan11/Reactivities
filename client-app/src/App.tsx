import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { Header, List } from 'semantic-ui-react';

function App() {
  const[activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, []);


  return (
    <div className="App">
      <Header  as='h2' icon='user' content='Reactivities'/>
      
        <List>
        {activities.map((activity : any) => (
          <List.Item key={activity.id}> {activity.title}</List.Item>
        ))}
        </List>
       
      
    </div>
  );
}

export default App;
