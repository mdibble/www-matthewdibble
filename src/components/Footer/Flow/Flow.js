import React, { useState, useEffect } from 'react';

import './Flow.css';

function Flow(props) {
    const [offsetX, setOffsetX] = useState(Math.random() * 500);
    const [speed, setSpeed] = useState((Math.random() * 2) + 0.5);
    const [initSpeed] = useState(speed);
    const [accel, setAccel] = useState(false);
    const [accelCeil, setAccelCeil] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            if (accel) {
                if (speed < accelCeil)
                    setSpeed(speed * 1.01);
                else
                    setAccel(false);
            }
            else {
                if (speed > initSpeed) {
                    setSpeed(speed * 0.99);
                } 
                else {
                    const rndNum = Math.random();
                    if (rndNum < 0.0005) {
                        setAccelCeil(Math.random() + 10)
                        setAccel(true);
                    }
                }
                    
            }
            setOffsetX(() => (offsetX + speed) % 1500);
        }, 15);
        return () => clearInterval(interval);
    }, [offsetX, speed, accel, accelCeil, initSpeed]);

    return (
        <div className='flow' style={{backgroundPositionY: props.offsetY, backgroundPositionX: offsetX + 'px'}}/>
    )
}
export default Flow
