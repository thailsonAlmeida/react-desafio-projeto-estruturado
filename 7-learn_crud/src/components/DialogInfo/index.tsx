/* eslint-disable @typescript-eslint/ban-types */
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({message, onDialogClose}: Props){
    return(
        <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                
                <div onClick={() => onDialogClose()} className="dsc-dialog-btn">
                    <ButtonPrimary text="Confirmar" />
                </div>
                
            </div>
        </div>
    );
}