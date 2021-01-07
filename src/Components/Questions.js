import { useEffect, useContext } from 'react'
import ScoreContext from '../Components/ScoreContext'
import QuestionGroup from "./QuestionGroup"
import { addScore } from '../lib/lStorage'
import { useHistory } from "react-router-dom";

export default function Questions(props) {

    const history = useHistory();

    const scoreHandler = useContext(ScoreContext)

    useEffect(() => {
        scoreHandler.setScore(0)
    }, [])

    return (<div>
        {
            props.data.map((question) => {
                return <QuestionGroup key={question.id} {...question} />

            })
        }
        <div> <button onClick={() => {


            addScore(scoreHandler.score)
            history.push("/results");


        }} >Submit</button></div>
    </div>)
}