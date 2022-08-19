import {InView, useInView} from 'react-intersection-observer';

export type ScrollAnimationProps = {
    children: React.ReactNode;
    animateIn?: string;
    animateOut?: string;
    animateOnce?: boolean;
    animateDelay?: number;
    animateDuration?: number;
    className?: string;
    style?: React.CSSProperties;
}


const ScrollAnimation = ( {children, animateIn, animateOut, animateOnce, className, style, animateDelay=0, animateDuration=2}: ScrollAnimationProps) => {

    const {ref, inView, entry} = useInView({
        triggerOnce: animateOnce,
    });

    const elementStyle: React.CSSProperties = {
        animationDelay: `${animateDelay}s`,
        animationDuration: `${animateDuration}s`,
        ...style
    }
    return (
        <div ref={ref} className={`animate__animated ${inView?(animateIn?'animate__'+animateIn:''):(animateOut?'animate__'+animateOut:'')} ${className||''}`} style={elementStyle}>
            {children}
        </div>
    );
}


export default ScrollAnimation;