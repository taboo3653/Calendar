import React from 'react';
import Calendar from './containers/Calendar';
import 'antd/dist/antd.css';
import './App.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store/configureStore';

function App() {
 
  store.subscribe(() => {
    const { events } = store.getState();
    localStorage.setItem('events', JSON.stringify(events));
  }
  );

  return (
    <Provider store = {store}>
      <div className="App">
        <Calendar />
      </div>
      </Provider>
  );
}


export default App;
