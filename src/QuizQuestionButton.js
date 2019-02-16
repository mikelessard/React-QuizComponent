import React, { Component } from 'react' ;

const QuizQuestionButton = (props) => {
    return (
        <li>
            <button>
                {props.button_text}
            </button>
        </li>   
    )
}

/*
class QuizQuestionButton extends Component {

    render() {
        return (
            <li>
                <button>
                    {this.props.button_text}
                </button>
            </li>   
        )
    }
}
*/
export default QuizQuestionButton;