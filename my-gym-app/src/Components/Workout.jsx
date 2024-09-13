import Sectionwrapper from "../Sectionwrapper"
import Exercisecard from "./Exercisecard"

export default function Workout(props){
    const {workout} = props
    return (
        <Sectionwrapper 
            id='workout'
            header={"welcome to"}
            title={['The', 'DANGER', 'zone']} >
                <div className="flex flex-col gap-4"> 
                    {workout.map((exercise,i) => {
                        return (
                            <Exercisecard exercise = {exercise} key={i} i={i}/>
                        )
                    })}

                </div>


        </Sectionwrapper>
    )
}