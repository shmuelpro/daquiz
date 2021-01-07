export default function Answer(props) {
    const id = `answer${props.qid}-${props.id}`;
    return (<div className="inputGroup"  onClick={(event)=>{props.changeSelection(props);event.preventDefault()}}>
        <input id={id} name="radio" type="radio" checked={props.selected===props.id} onChange={e => {}}/>
        <label htmlFor={id}  >{props.answer}</label>
    </div>)


}