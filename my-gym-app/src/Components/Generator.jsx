import Sectionwrapper from "../Sectionwrapper"
import { WORKOUTS,SCHEMES } from "../utils/Powerhub"
import Button from "./Button"
import { useState } from "react"

const Header = (props) => {
    const {title, index, description} = props
   
    return(
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 justify-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
                <h4 className='text-xl sm:text-3xl md:text-4xl'>{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}


export default function Generator(props){

    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props

    const[showModal, setShowmodal] = useState(false)



const toggleModal = () => {
    setShowmodal(!showModal)
}

const updatemuscles = (musclegroup) => {
    if(muscles.includes(musclegroup)){
        setMuscles(muscles.filter(val => val !== musclegroup))
        return
    }
    if(muscles.length > 2){
        return
    }
    if (poison !== 'individual'){
        setMuscles([musclegroup])
        setShowmodal(false)
        return
    }
    
    setMuscles([...muscles,musclegroup])
    if(muscles.length === 2){
        setShowmodal(false)
    }
}

    return(
<Sectionwrapper 
    id='generate'
    header={"generate your workout"}
    title={['Plan your', 'Pain']} >
       <Header index='01' 
               title='Pick your poison'
               description='Select the workout you wish to endure.' />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type, typeidx) => {
                return (
                    <button key={typeidx}
                            onClick={() => {
                                setMuscles([])
                                setPoison(type);
                                console.log(type);
                            }} 
                            className={`bg-slate-950 p-4 rounded-lg border border-blue-400 duration-200 hover:border-blue-600 ${ type === poison ? 'border-blue-600' : ' border-blue-400'}`} >
                        <p className="capitalize">{type.replace('_', ' ')}</p>
                    </button>
                )
            })}
        </div>
        <Header index='02' 
               title='Lock on targets'
               description='Select the muscles judged for annihilation' />
        <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
            <button className="relative flex items-center justify-center p-3" 
                    onClick={toggleModal}>
                <p className="capitalize">{muscles.length == 0 ? 'Select muscle group' : muscles.join(' ')}</p>
                <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
            </button>
            {showModal && (
            <div className="flex flex-col p-3">
                {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclegroup, musclegroupidx) => {
                    return(
                        <button key={musclegroupidx} className={`m-2 hover:text-blue-400 duration-200 ${muscles.includes(musclegroup) ? 'text-blue-400' : ''}`}
                                onClick={() => {
                                    updatemuscles(musclegroup)
                                }}>
                            <p className="uppercase">{musclegroup.replace('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
        )}
        </div>
        <Header index='03' 
               title='Choose your stuggle.'
               description='Select your ultimate objective.' />
        <div className="grid grid-cols-1 grid-cols-3 gap-4">
            {Object.keys(SCHEMES).map((scheme, schemeidx) => {
                return (
                    <button key={schemeidx} 
                            onClick={() => {
                                setGoal(scheme);
                            }}
                           className={`bg-slate-950 py-3 px-4 rounded-lg border border-blue-400 duration-200 hover:border-blue-600 ${scheme === goal ? 'border-blue-600' : 'border-blue-400'}` }>
                        <p className="capitalize">{scheme.replace('_', ' ')}</p>
                    </button>
                )
            })}
        </div>
        <Button text='formulate' func={updateWorkout}/>
</Sectionwrapper>
        
    )
}