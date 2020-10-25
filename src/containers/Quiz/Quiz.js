import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuestion:0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета жопа гитлера?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Вопрос 1', id: 1},
                    {text: 'Вопрос 2', id: 2},
                    {text: 'Вопрос 3', id: 3},
                    {text: 'Вопрос 4', id: 4},
                    {text: 'Вопрос 5', id: 5},
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Питер?',
                rightAnswerId: 3,
                answers: [
                    {text: '1920', id: 1},
                    {text: '2020', id: 2},
                    {text: '1705', id: 3},
                    {text: '1112', id: 4},
                    {text: '1803', id: 5},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout( () => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    }) 
                }
                window.clearTimeout(timeout)
            }, 1000)
           
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                        ? <h1>Finished</h1>
                        : <ActiveQuiz 
                            answers={this.state.quiz[this.state.activeQuestion].answers} 
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz