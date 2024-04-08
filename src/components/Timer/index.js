import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

const Timer = () => {

    const formatTimer = (totalSeconds) => {
        const seconds = totalSeconds % 60;
        const minutes = (totalSeconds - seconds) / 60
        return appendZero(minutes) + ":" + appendZero(seconds);

    }
    const appendZero = (val) => {
        if (val >= 0 && val <= 9) {
            return '0' + val
        }
        return val
    }
    const [timer, setTimer] = useState(1);
    useEffect(() => {
        const intervalId = setInterval(() => {
            
            setTimer((prev)=>{
                if(prev===5){
                    clearInterval(intervalId);
                    return prev
                }
                return prev + 1
            })
        }, 1000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <Text>{formatTimer(timer)}</Text>
    )
}

export default Timer