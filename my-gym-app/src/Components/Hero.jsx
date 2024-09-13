import React from "react";
import Button from "./Button";
export default function Hero(){
    return(
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>STRENGTH STARTS HERE!!</p>
                <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"><span>POWER</span><span className="text-blue-400">HUB</span></h1>
            </div>
                <p className="text-sm md:text-base  font-light lg:text-lg">
                    Yeah, we know, the <span className="text-blue-400 font-medium">couch is calling</span>, and Netflix just released another season of something you’ll binge. But hey, that six-pack won’t build itself . we’re all about ditching excuses and picking up dumbbells. Whether you’re here to <span className="text-blue-400 font-medium">crush goals, lift heavy,</span> or simply prove to yourself that you can actually <span className="text-blue-400 font-medium">survive leg day</span>, we’ve got you. Because let’s be honest—strength isn’t just about muscles; it’s about <span className="text-blue-400 font-medium">showing up, sweating, and maybe crying a little </span>(we won’t tell). Ready to start? <span className="text-blue-400 font-medium">Yeah, you are</span>
                </p>
                
            <Button func={() => {
                window.location.href= '#generate'
            }} text="Let's crush it"/>
        </div>
    )
}