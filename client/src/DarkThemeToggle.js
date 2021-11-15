import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_DARKTHEME } from './actions';
import './App.css';

const DarkThemeProvider = () => {
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  const dispatch = useDispatch();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}></input>
      <span className="slider round"></span>
    </label>
  );
};

export default DarkThemeProvider;
