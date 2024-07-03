import React, {useState} from 'react';
import './Card.scss';

import { FaUniversity, FaChalkboardTeacher, FaGraduationCap, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

import Tag from './Tag';
import Info from './Info';

function Card(props) {
    return (
        <div className='card-container'>
            <span className='card-title'>{props.titulo}</span>

            <div className='card-description-area'>
                {props.description}
            </div>

            <div className='card-infos'> 
                <Info icon={<FaUniversity />} name="Instituto" response={props.instituto}/> |
                <Info icon={<FaChalkboardTeacher />} name="Orientador(a)" response={props.orientacao} link="http://lattes.cnpq.br/6540619386101635"/> |
                <Info icon={<MdOutlineScience />} name="Área" response={props.area}/> | 
                <Info icon={<FaGraduationCap />} name="Nível" response={props.nivel}/> 
            </div>

            <span className='card-label'>Tags: </span>

            <div className='tag-row'>
                
                {props.tags.map((tag) => {
                    return(<Tag tag={tag}/>)
                })}

            </div>

            <div className='card-bottom'>

                <button className='btn-card'>Tenho Interesse!</button>
                
                <div className='bottom-btns'>

                    <div className='icon-btn'>
                        <FaRegBookmark />
                        <span>Salvar</span>
                    </div>

                    <div className='icon-btn'>

                        <span><FaShareAlt /> Compartilhar</span>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Card;