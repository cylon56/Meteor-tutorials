import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component
{
	handleSubmit (e)
	{
		let playername = e.target.playerName.value;

		e.preventDefault();

		if(playername)
		{
			e.target.playerName.value = '';
			Players.insert({
			name: playername,
			score: 0
		});
		}
	}

	render()
	{
		return (
			<div className ="item">
				<form className = "form" onSubmit={this.handleSubmit.bind(this)}>
						<input className="form__input" type="text" name = "playerName" placeholder = "Player Name"/>
						<button className="button">Add player</button>
				</form>
			</div>
		);
	}
}