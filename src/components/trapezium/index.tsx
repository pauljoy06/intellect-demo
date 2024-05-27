import './index.css';

type TrapeziumProps = {
    className?: string,
    width?: string,
    height?: string,
    onClick?: () => void,
}

const Trapezium = ({
    width='30px',
    height='39px',
    className,
    onClick
}: TrapeziumProps): React.JSX.Element => {
    const style={ width, height };

    return <div className={`trapezium${className}`}
        style={style}
        onClick={onClick}
    />
}

export default Trapezium;
