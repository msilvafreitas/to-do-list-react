import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Work',
      corPrimaria: '#57C278',
      corSecundaria: '#181824'
    },
    {
      nome: 'Personal',
      corPrimaria: '#82CFFA',
      corSecundaria: '#181824'
    }, 
    {
      nome: 'Hobbie',
      corPrimaria: '#FFBA05',
      corSecundaria: '#181824'
    },
    {
      nome: 'Others',
      corPrimaria: '#FF8A29',
      corSecundaria: '#181824'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
