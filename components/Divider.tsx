import { Fade } from "react-awesome-reveal";


const Divider = () => {
    return (
        <div className="overflow-hidden w-full">
            <Fade triggerOnce direction="left">
            <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-2xl"></div>
            </Fade>
        </div>
    );
}

export default Divider;