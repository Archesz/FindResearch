import React from 'react'

function Info(props) {

    if(props.name == "Orientador(a)"){
        return (
            <div className='info-field'>
                <div className='row'>
                    <span className='info-icon'>
                        {props.icon}
                    </span>
                    <span className='info-name'>
                        <a href={props.link} target='_blank'>{props.response}</a>
                    </span>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='info-field'>
    
                <div className='row'>
                    <span className='info-icon'>
                        {props.icon}
                    </span>
                    <span className='info-name'>
                        {props.response}
                    </span>
                </div>
            </div>
        )
    }
}

export default Info