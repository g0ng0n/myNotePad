import React from 'react';

const Header = (props) => {
	return(
 		<div className="App-header">
          <h2>{props.name}, Note Pad</h2>
        </div>
	);
}

export default Header;