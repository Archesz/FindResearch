import React, { useState } from 'react';
import Card from './components/Card/Card';
import Find from './components/Find/Find';
import Menu from './components/Menu/Menu';
import Filter from './components/Filter/Filter'; // Certifique-se de importar o componente Filter
import './styles/global.scss';

const cards = [
  {
    "titulo": "Desenvolvimento de Algoritmo de Machine Learning para Classificação de Artefatos Metálicos",
    "description": "As imagens de Tomografia Computadorizada podem possuir ruídos/distorções. Um algoritmo para detecção da presença desses ruídos se faz necessária para auxiliar nos exames médicos.",
    "instituto": "FEEC",
    "area": "Tecnológicas",
    "orientacao": "Letícia Rittner",
    "nivel": "Iniciação Científica",
    "tags": ["Machine Learning", "Saúde", "Tomografia Computadorizada"]
  },
  {
    "titulo": "Medidas de Fotoluminescência e Refletância em Semicondutores Bidimensionais",
    "description": "Este projeto investiga as propriedades ópticas de semicondutores bidimensionais, utilizando técnicas avançadas de fotoluminescência e refletância. O estudo visa compreender a interação entre luz e matéria nesses materiais, com foco em sua estrutura de bandas e efeitos de confinamento quântico, visando aplicações em dispositivos optoeletrônicos de próxima geração.",
    "instituto": "IFGW",
    "area": "Exatas",
    "orientacao": "Odilon Divino",
    "nivel": "Iniciação Científica",
    "tags": ["Física", "Machine Learning", "Óptica"]
  },
  {
    "titulo": "O material e o sublime em 'O Fantasma de Canterville' de Oscar Wilde",
    "description": "Este estudo analisa como 'O Fantasma de Canterville', de Oscar Wilde, utiliza o material e o sublime para explorar a dualidade entre o humor e o terror. Focando nas interações entre os personagens e o fantasma, a pesquisa investiga como Wilde contrasta elementos físicos e espirituais, desafiando as convenções vitorianas e revelando críticas sociais sutis através de uma narrativa irônica e encantadora.",
    "instituto": "IEL",
    "area": "IA",
    "orientacao": "Fabio Akcelrud",
    "nivel": "Iniciação Científica",
    "tags": ["Artística", "Literatura"]
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    selectedInstitutes: '', // Alterado para uma string vazia inicialmente
    selectedArea: '',
    selectedNivel: '',
    selectedTags: [],
    selectedOrientador: ''
  });

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredCards = cards.filter(card => {
    const isInstitutoMatch = !filters.selectedInstitutes || filters.selectedInstitutes === card.instituto;
    const isAreaMatch = !filters.selectedArea || filters.selectedArea === "Selecione a Área" || filters.selectedArea === card.area;
    const isNivelMatch = !filters.selectedNivel || filters.selectedNivel === "Selecione o Nível" || filters.selectedNivel === card.nivel;
    const isTagsMatch = filters.selectedTags.length === 0 || filters.selectedTags.every(tag => card.tags.includes(tag.value));
    const isOrientadorMatch = !filters.selectedOrientador || card.orientacao.toLowerCase().includes(filters.selectedOrientador.toLowerCase());

    return isInstitutoMatch && isAreaMatch && isNivelMatch && isTagsMatch && isOrientadorMatch &&
      (card.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="container">
      <Menu />
      
      <div className='container-main'>
        <Filter
          isVisible={true}
          onClose={() => {}}
          onApplyFilters={handleApplyFilters}
          selectedInstitutes={filters.selectedInstitutes} // Passando o estado de selectedInstitutes para o componente Filter
        />
        <Find setSearchQuery={setSearchQuery} />
        <div className='container-area'>
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              titulo={card.titulo}
              description={card.description}
              instituto={card.instituto}
              area={card.area}
              orientacao={card.orientacao}
              nivel={card.nivel}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
