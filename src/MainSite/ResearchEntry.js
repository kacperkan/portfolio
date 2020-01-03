import React from 'react';
import './ResearchEntry.css';

class ResearchEntry extends React.Component {
	constructor(props) {
		super(props);
		this.imgPath = props.imgPath;
		this.title = props.title;
		this.authors = props.authors;
		this.additionalInfo = props.additionalInfo;
		this.links = props.links;
	}

	render() {
		return (
			<div className="research-entry-wrapper">
				<div className="img-wrapper">
					<img src={this.imgPath} alt={this.title} />
				</div>
				<div className="txt-wrapper">
					<div className="article-title">{this.title}</div>
					<div className="article-authors">{this.authors.join(', ')}</div>
					<div className="article-info">{this.additionalInfo}</div>
					<div className="article-links">
						[
						{this.links}
						]
					</div>
				</div>
			</div>
		);
	}
}

export default ResearchEntry;
