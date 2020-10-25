import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map ( (answer, index) => {
            return (
                <AnswerItem answer={answer} key={index} onAnswerClick={props.onAnswerClick} />
            )
        })}
    </ul>
)

export default AnswersList