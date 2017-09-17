import React from 'react';

class Form extends React.Component {

	handleChange(event){
		this.props.handleChange(event);
	}

	handleSubmit(event){
		this.props.handleSubmit(event);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<label>Title:</label>
				<input 
					name="currentTitle"
					type="text"
					value={this.props.currentTitle}
					onChange={this.props.handleChange}/>
				<textarea
					name="currentDetails"
					value={this.props.currentDetails}
					onChange={this.props.handleChange}/>		
				<div>
					<input type="submit" value="Add Note"/>
				</div>	
			</form>
		);
	}

}

export default Form;