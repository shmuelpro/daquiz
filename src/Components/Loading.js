export default function Loading(props){


    return <div className="loading-window"><div className="loading-message">{props.errors?"Oops Something went wrong":"Loading..."}</div></div>
}