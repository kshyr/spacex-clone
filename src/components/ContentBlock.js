import React, {Component} from 'react';
import './ContentBlock.css'
import { fadeInUp, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';




class ContentBlock extends Component {
    render() {
        const styles = {
            fadeIn: {
                 animation: 'x 1.3s',
                animationName: Radium.keyframes(fadeInUp, 'fadein'),
            },
            fadeOut: {
                animation: 'x 2s',
                animationName: Radium.keyframes(fadeOut, 'fadeout'),
            },
            background: {
                backgroundImage: `url(https://www.spacex.com/static/images/${this.props.bgImg})`,
            }
        }
        return (
            <StyleRoot>
                <div className="cont" style={[styles.background]}>
                    <div className="text" style={[styles.textBox, styles.fadeIn]}>
                        <h5 className="eventType">{this.props.type}</h5>
                        <h1 className="eventTitle">{this.props.title}</h1>
                        <h6 className="eventDescription">{this.props.description}</h6>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default ContentBlock;