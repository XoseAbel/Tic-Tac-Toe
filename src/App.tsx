import React from 'react';
import Title from './Components/TitleArea';
import useStyles from './App.style';
import PlayArea from './Components/PlayArea';
import ButtonGame from './Components/ButtonGame';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.gridArea}>
        <Title />
        <ButtonGame />
        <PlayArea />
      </div>
    </Provider>
  );
}

export default App;
