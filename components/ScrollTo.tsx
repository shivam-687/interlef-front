import {scroller} from 'react-scroll';

export type ScrollToProps = {
    name: string;
    children?: React.ReactNode;
    duration?: number;
    offset?: number;
    delay?: number;
    smooth?: string|boolean;
};


const ScrollTo = (props: ScrollToProps) => {

    const {name, children, duration , offset, delay, smooth} = props;

    const scrollTo = (element: string) => {
        scroller.scrollTo(element, {
            duration: duration || 1500,
            offset: offset || -100,
            delay: delay || 0,
            smooth: smooth || 'easeInOutQuart'
        });
    }

    return (
        <div onClick={() => scrollTo(props.name)}>
            {children}
        </div>
    );
}

export default ScrollTo;

