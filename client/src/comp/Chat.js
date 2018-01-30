import React, { Component } from 'react';
import mySocket from "socket.io-client";

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
	}
	
	componentDidMount() {
		this.socket = mySocket("http://localhost:10001");
	}
	
	render() {
		return (
			<section className="chat">
				
			</section>
		);
	}
}

export default App;