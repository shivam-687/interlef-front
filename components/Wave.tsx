export type WaveProps = {
    image?: string;
    position?: 'top'|'bottom'|'center'
}

const Wave = ({image, position}: WaveProps) => {
    const styles = {
        backgroundImage: `url(${image||'/images/shapes/shape-3.svg'})`,
        backgroundPosition: position||'bottom'
    }
    return (
        <div className="wave absolute left-0 bottom-0 w-full h-52" style={styles}>
        </div>
    );
}


export default Wave;