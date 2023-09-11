import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activities';
import NavBar from './navbar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
      </Container>
    </>
  );
}

export default App;
