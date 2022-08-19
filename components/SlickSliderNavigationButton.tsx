

export type SlickSliderNavigationButtonProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void,
    children?: React.ReactNode;
}



const SlickSliderNavigationButton = ({className, style, onClick, children}: SlickSliderNavigationButtonProps) => {


    return (
        <div className={className}>
            <button className= "btn btn-primary btn-circle" onClick={onClick}>{children}</button>
        </div>
    );
}

export default SlickSliderNavigationButton;