export default function Button(props){
    const {text , func} = props
    return(
        <button className="px-8 py-4 mx-auto rounded-md border-[2px] border-solid border-blue-400 bg-slate-950 capitalize blueshadow"
                onClick={func}>
                    <p>{text}</p>
                </button>
            
    )
}