import './styles.css';

type Props = {
    text : string,
}

export default function ButtonInversa( {text} : Props){
    return (
        <div className="dsc-btn dsc-btn-white">{text}</div>
    );
}