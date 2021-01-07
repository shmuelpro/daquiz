const key = "scores";

export function addScore(score) {

    let scores = getScores();
    
    if(!Array.isArray(scores)){
        return { status: "failure",err:"local storage data was not an array" };
    }
    scores.unshift(score)


    try {
        localStorage.setItem(key, JSON.stringify(scores));

    } catch (err) {

        return { status: "failure", err };
    }

    return {status:"success"};



}

export function getScores() {


    let scores = localStorage.getItem(key);
    if (!scores) {
        scores = []
    } else {
        try {
            console.log(scores)
            scores = JSON.parse(scores)

        } catch (err) {

            console.log(err)
            scores = []

        }

    }

    return scores;
    

}