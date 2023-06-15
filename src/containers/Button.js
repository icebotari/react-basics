import {useNavigate} from "react-router-dom";
import '../style/header.css'
import UserFunc from './AddNewUser'
import React, {useState} from "react";
import '../style/button.css'

function Button(props) {
    const navigate = useNavigate()
    const [hasRender, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender((current) => !current), []);
    return (
        <>
            <button
                className={props.className}
                    onClick={
                        props.navigateTo ?
                            () => navigate(props.navigateTo) :
                            () => onShow()}
            >
                {props.buttonName}
            </button>
            {<UserFunc hasRender={hasRender}/>}

        </>


    )
}

export default Button;
