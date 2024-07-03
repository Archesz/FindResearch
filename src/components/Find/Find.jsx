import React, { useState } from 'react';
import './Find.scss';
import { IoFilterOutline } from "react-icons/io5";

function Find({ setSearchQuery }) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <div className='top-container'>
            <input
                className='find-research'
                placeholder='Procure uma pesquisa pelo contexto.'
                onChange={handleInputChange}
            />
            <div className='filter-btns'>
                <button onClick={toggleFilter}>
                    <IoFilterOutline />
                    Filter
                </button>
            </div>
        </div>
    );
}

export default Find;