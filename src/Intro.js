import React from 'react';

const Intro = (props) => {
	return (
		<p className="App-intro">
          {props.name}, To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	)
}

export default Intro;