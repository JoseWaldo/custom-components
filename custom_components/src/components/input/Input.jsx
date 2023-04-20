import inputStyle from "./input.module.css";

function Input({className = ""}) {
    return ( 
        <div className={`${className} ${inputStyle.inputContainer}`}>
            <input className={inputStyle.input} type="text" required/>
            <span className={inputStyle.span}>username</span>
        </div>
    );
}

export default Input;