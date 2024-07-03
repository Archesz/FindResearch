import React, { useState } from 'react';
import './Menu.scss';
import { FaRegBookmark, FaAngleRight, FaRegListAlt, FaPlus } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import Modal from '../Modal/Modal';

function Menu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlusClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='menu-container'>
            <div className='menu-logo'>
                {/* Logo content */}
            </div>

            <div className='menu-items'>
                <div className="menu-item">
                    <FaRegListAlt />
                </div>
                <div className="menu-item">
                    <FaRegBookmark />
                </div>
                <div className="menu-item">
                    <MdGroups2 />
                </div>
                <div className='menu-item' onClick={handlePlusClick}>
                    <FaPlus />
                </div>
            </div>

            <div className='expand-area'>
                <button className='btn-expand'>
                    <FaAngleRight />
                </button>
            </div>

            <Modal show={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default Menu;