import React, { Component } from 'react';
import '../stylesheets/css/style.css';

class Overlay extends Component {
	render() {
		const data = this.props.profData;
		
		return (
			<section className="profile-card">
				<div className="flex">
					<img src={require('../img/' + data.thumbnail)} alt={data.name + "'s Face"} />
					<h1>{data.name}</h1>
					<h2>{data.title}</h2>
					<a href={data.url} target="_blank" className="button">View Portfolio</a>
				</div>
			</section>
		);
	}
}

export default Overlay;
