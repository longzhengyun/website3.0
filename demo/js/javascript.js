var UserGist = React.createClass({
	getInitiaState: function(){
		return {
			username:'',
			lastGistUrl:''
		}
	},
	componentDidMount: function(){
		$.get(this.props.source, function(result){
			var lastGist = result[0];
			if(this.isMounted()){
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
		}.bind(this));
	},
	render: function(){
		return (
			<div>
				{this.state.username} is last gist is
				<a herf={this.state.lastGistUrl}>here</a>
			</div>
		)
	}
});

React.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	mountNode
);