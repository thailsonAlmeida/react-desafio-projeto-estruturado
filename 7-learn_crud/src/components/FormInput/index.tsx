/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormInput(props: any){
    
    const { 
        validation, 
        invalid = "false", 
        onTurnDirty, 
        dirty = "false", 
        ...inputProps 
    } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return(
        <input            
            { ...inputProps } 
            onBlur={handleBlur} 
            data-invalid={invalid} 
            data-dirty={dirty}
        />
    );
}