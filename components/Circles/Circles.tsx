import { memo, useRef, useLayoutEffect, useEffect } from "react";
import styles from './Circles.module.scss'
import classnames from "classnames";

import { gsap, Power3} from 'gsap';

export type Props = {
    className?: string
}

function Circles ({className} : Props) {
   
    let circleBlue = useRef<HTMLDivElement>(null);
    let circleRed = useRef<HTMLDivElement>(null);
    let circleYellow = useRef<HTMLDivElement>(null);
    const timeline = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
        timeline.current = gsap.timeline()
        .from(circleBlue.current, {duration: 0.8,  opacity: 0, x:40, ease: Power3.easeOut})
        .from(circleRed.current, {duration: 0.8, opacity: 0, x:40, ease: Power3.easeOut, delay: 0.2})
        .from(circleYellow.current, {duration: 0.8, opacity: 0, x:40, ease: Power3.easeOut, delay: 0.4})
//: /:ww

    }, [])


    return (
        <div className={classnames(styles.Circles)}>
            <div ref={circleBlue} className={classnames(styles.circle, styles.blue)}/>
            <div ref={circleRed} className={classnames(styles.circle, styles.red)}/>
            <div ref={circleYellow} className={classnames(styles.circle, styles.yellow)}/>
        </div>
    );
}


export default Circles;