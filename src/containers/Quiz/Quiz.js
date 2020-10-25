import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого цвета жопа гитлера?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Вопрос 1', id: 1},
                    {text: 'Вопрос 2', id: 2},
                    {text: 'Вопрос 3', id: 3},
                    {text: 'Вопрос 4', id: 4},
                    {text: 'Вопрос 5', id: 5},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer ID: ', answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers} 
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz