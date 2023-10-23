import ButtonPrimary from "../ButtonPrimary";

export default function DialogInfo(){
    return(
        <div className="dsc-dialog-background">
            <div className="dsc-dialog-box">
                <h2>Operação realizada com sucesso!</h2>
                <ButtonPrimary text="Confirmar" />
            </div>
        </div>
    );
}