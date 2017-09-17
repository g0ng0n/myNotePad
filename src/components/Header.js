import Reactt from 'react';

const Header = (props) => {
	return(
 		<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{props.name}, Note Pad</h2>
        </div>
	);
}

export default Header;