import React, {Component} from 'react';
import './ContentBlock.scss'

class ContentBlock extends Component {

    render() {
        return (
            <div className="cont" style={{backgroundImage: `url(https://www.spacex.com/static/images/${this.props.bgImg})`}}>
            </div>
        );
    }
}

export default ContentBlock;