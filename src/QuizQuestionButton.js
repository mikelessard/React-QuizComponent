import React, { Component } from 'react' ;

/*
const QuizQuestionButton = (props) => {
    
    return (
        <li>
            <button onClick={handleClick}>
                {props.button_text}
            </button>
        </li>   
    )
}
*/

class QuizQuestionButton extends Component {

    handleClick = () => {
        this.props.clickHandler(this.props.button_text);
    }

    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>
                    {this.props.button_text}
                </button>
            </li>   
        )
    }
}

export default QuizQuestionButton;