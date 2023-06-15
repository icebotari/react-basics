import React, {useState} from 'react'
function AddNewUser (props) {
    return (
        props.hasRender &&
        <div>
            <h1>Functional User component</h1>
            <form>
                <input placeholder={'Name'} type="text"></input>
                <input placeholder={'Age'} type="number"></input>
            </form>
        </div>

    )
}
export default AddNewUser

