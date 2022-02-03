import React from "react";

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder} //get from App.js file that passes these through destructuring
    onChange={handleChange}
  />
)