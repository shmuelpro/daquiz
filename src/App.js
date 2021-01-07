
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { loadQuestions } from './lib/comm'
import './App.css';
import Questions from './Components/Questions';
import ScoreContext from './Components/ScoreContext'
import Loading from './Components/Loading';
import ScoreResults from './Components/ScoreResults';

function App() {

  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [loadingErrors,setLoadingErrors] = useState(false)




  useEffect(() => {

    loadQuestions().then((loadedQuestions) => {
      setQuestions(loadedQuestions)

    }).catch((err)=>{

      setLoadingErrors(true)
    })



  }, [])


  return (
    <div className="App">
      <ScoreContext.Provider value={{ score, setScore }}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {questions.length === 0 ? <Loading errors={loadingErrors} /> : <Questions data={questions} />}
            </Route>

            <Route path="/results">
              <ScoreResults />
            </Route>
          </Switch>
        </Router>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
