import React from 'react'

const Single = (props) => {
    return(
        <li className="col s4">
        	<div className="card teal darken-1">
        		<div className="card-content white-text">
        			<span className="card-title">{props.title}</span>
        			<p> {props.note} </p>
        		</div>
        		<div className="card-action">
           			<a onClick={() => props.deleteNote(props.id)}> Delete </a>
           		</div>    
           	</div>
           	        
        </li>
    );
};

export default Single;