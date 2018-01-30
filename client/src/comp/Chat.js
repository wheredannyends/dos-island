import React, { Component } from 'react';
import mySocket from "socket.io-client";

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			chatMode: 0,
			userName: ""
		}
	}
	
	componentDidMount() {
		this.socket = mySocket("http://localhost:10001");
	}
	
	userNameUpdate = (e) => {
		this.setState({
			userName: e.target.value
		});
	}
	
	joinChat = () => {
		if (this.state.userName != "") {
			this.setState({
				chatMode: 1
			});
		} else {
			alert("Enter your name");
		}
	}
	
	render() {
		let chatComp = null;
		
		if (this.state.chatMode === 0) {
			chatComp = (
				<div className="chat-login flex">
					<h3>Join the Chat</h3>
					<input className="input" placeholder="Enter your name" maxlength="10" onChange={this.userNameUpdate} />
					<button className="button" onClick={this.joinChat}>Enter</button>
				</div>
			);
		} else if (this.state.chatMode === 1) {
			chatComp = (
				<div className="flex">
					<div className="chat-content chat-users">
						<div className="flex">
							<h4>Connected Users</h4>
							<div className="chat-users-list">
								<div className="flex">
									<article className="chat-users-thumb flex">
										D
									</article>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-content chat-messages">
						<div className="flex">
							<article className="chat-bubble">Hello</article>
							<article className="chat-bubble">This is a test message</article>
							<article className="chat-bubble">Penis lol wtf</article>
						</div>
					</div>
					<div className="chat-content chat-input">
						<div className="flex">
							<input className="input" placeholder="Type a message" />
							<button className="button">Send</button>
						</div>
					</div>
				</div>
			);
		}
		
		return (
			<section className="chat">
				{chatComp}
			</section>
		);
	}
}

export default App;