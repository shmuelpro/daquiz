import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { getScores } from '../lib/lStorage'
import NoScores from './NoScores';
import ScoreList from './ScoreList';
export default function ScoreResults(props) {
    
    const history = useHistory();
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const loadedScores = getScores()
        setScores(loadedScores)
    }, [])



    return <div>
        {
            scores.length === 0 ? <NoScores /> : <ScoreList scores={scores} />
        }
       <div></div> <button onClick={()=>{history.push("/")}} >Play Again</button>


    </div>


}