import React, { useState } from 'react';
import './Filter.scss';
import { MdClose } from "react-icons/md";
import Select from 'react-select';

const institutos = ["Selecione o Instituto", "CEL", "FCA", "FCF", "FCM", "FE", "FEF", "FENF", "FEAGRI", "FEA", "FEEC", "FEM", "FEQ", "FOP", "FT", "IA", "IB", "IC", "IE", "IEL", "IFCH", "IFGW", "IG", "IMECC", "IQ"];
const tagsOptions = [
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Deep Learning', label: 'Deep Learning' },
    { value: 'Saúde', label: 'Saúde' },
    { value: 'Física', label: 'Física'},
];

const MAX_TAGS = 3; // Define o número máximo de tags permitidas

function Filter({ isVisible, onClose, onApplyFilters }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedInstituto, setSelectedInstituto] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedNivel, setSelectedNivel] = useState('');
    const [selectedOrientador, setSelectedOrientador] = useState('');

    const handleTagChange = (selectedOptions) => {
        if (selectedOptions.length <= MAX_TAGS) {
            setSelectedTags(selectedOptions);
        }
    };

    const handleInstitutoChange = (event) => {
        setSelectedInstituto(event.target.value);
    };

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
    };

    const handleNivelChange = (event) => {
        setSelectedNivel(event.target.value);
    };

    const handleOrientadorChange = (event) => {
        setSelectedOrientador(event.target.value);
    };

    const handleApplyFilters = () => {
        const filters = {
            selectedTags,
            selectedInstituto,
            selectedArea,
            selectedNivel,
            selectedOrientador
        };
        onApplyFilters(filters);
    };

    return (
        <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <div className='filter-top'>
                <h2 className='filter-title'>Filtro</h2>
                <button className='close-btn' onClick={onClose}><MdClose /></button>
            </div>

            <div className='filtros'>
                <div className='filtro-field'>
                    <div className='filtro-row'>
                        <span>Instituto</span>
                    </div>
                    <select
                        className='select-filter'
                        value={selectedInstituto}
                        onChange={handleInstitutoChange}
                    >
                        {institutos.map((instituto) => {
                            return(
                                <option value={instituto}>{instituto}</option>
                            )
                        })}
                    </select>
                </div>

                <div className='filtro-field'>
                    <div className='filtro-row'>
                        <span>Orientador(a)</span>
                    </div>
                    <input
                        className="filter-input"
                        placeholder='Ex: João Vitor Souza'
                        value={selectedOrientador}
                        onChange={handleOrientadorChange}
                    />
                </div>

                <div className='filtro-field'>
                    <div className='filtro-row'>
                        <span>Área</span>
                    </div>
                    <select
                        className='select-filter'
                        value={selectedArea}
                        onChange={handleAreaChange}
                    >
                        <option>Selecione a Área</option>
                        <option value="Artes">Artes</option>
                        <option value="Humanas">Humanas</option>
                        <option value="Biomédicas">Biomédicas</option>
                        <option value="Exatas">Exatas</option>
                        <option value="Tecnológicas">Tecnológicas</option>
                    </select>
                </div>

                <div className='filtro-field'>
                    <div className='filtro-row'>
                        <span>Nível</span>
                    </div>
                    <select
                        className='select-filter'
                        value={selectedNivel}
                        onChange={handleNivelChange}
                    >
                        <option>Selecione o Nível</option>
                        <option value="Iniciação Científica">Iniciação Científica</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                        <option value="PosDoutorado">Pós Doutorado</option>
                    </select>
                </div>

                <div className='filtro-field'>
                    <div className='filtro-row'>
                        <span>Tags</span>
                    </div>
                    <span className='instruction'>(Selecione no máximo 3)</span>

                    <Select
                        isMulti
                        options={tagsOptions}
                        className="select-multi"
                        onChange={handleTagChange}
                        value={selectedTags}
                        placeholder="Selecione Tags"
                        isOptionDisabled={() => selectedTags.length >= MAX_TAGS}
                    />
                </div>
            </div>

            <button className='filter-btn' onClick={handleApplyFilters}>Aplicar Filtros</button>
        </div>
    );
}

export default Filter;
