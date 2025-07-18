import { useState, useEffect } from "react"


export default function Timer() {
    const [time, setTime] = useState("00:00:00");


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());  
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <h1>{time}</h1>

    );
}