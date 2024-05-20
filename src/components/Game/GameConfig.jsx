import React, { useState } from 'react';
import './Game.css'
import { Link } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { TbTicTac } from "react-icons/tb";

const GameConfig = () => {

    const [showConfig, setShowConfig] = useState(false);

    return (
        <div id="config-panel" className={`config-panel d-none d-lg-block ${showConfig ? 'config-panel-open' : 'config-panel-hide'}`}>
            <div className="panel-inner">
                <Link 
                    id="config-trigger" 
                    className="config-trigger text-center" 
                    onClick={()=>setShowConfig(prevState => !prevState)}
                >
                    <IoMdSettings className='svg-inline fa-gear mx-auto'/>
                </Link>
                <h5 className="panel-title">Bored?</h5>
                <p className='panel-body'>
                    Try playing 
                    <Link to="/game" onClick={()=>setShowConfig(prevState => !prevState)} className="ms-1">
                        Tic Tac Toe!<TbTicTac className='svg-inline text-white ms-1'/>
                    </Link>
                </p>
                <Link id="config-close" className="close" onClick={()=>setShowConfig(prevState => !prevState)}>
                    <FaCircleXmark className='svg-inline'/>
                </Link>
            </div>
        </div>
    )
}

export default GameConfig