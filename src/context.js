import React from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];

const LanguagesContext = React.createContext();

const initialState = {value: true};

function reducer (state, action) {
  switch(action.type){
    case 'change-toggle':
      return {value: !state.value};
    default:
      throw new Error;
  }
}

const MainSection = () => {
const {changeToggles, state} = React.useContext(LanguagesContext);
  return (
    <div>
      <p id="favoriteLanguage">Favorite programing language: {state.value ? languages[0] : languages[1]}</p>
      <button onClick={changeToggles} id="changeFavorite">Toggle language</button>
    </div>
  )
}

const App = () => {
const [state, dispatch] = React.useReducer(reducer, initialState);
  const changeToggles = () => {
    dispatch({type: 'change-toggle'})
  }
  return (
    // implement Context here so can be used in child components
    <LanguagesContext.Provider
      value={{
        changeToggles,
        state
      }}
    
    >
      <MainSection />
    </LanguagesContext.Provider>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);