import React, { useState } from 'react'
import { debugData } from '../utils/debugData';
import Main from './Main';
import CharacterMenu from './LeftMenu';
import CreatorCharacter from './CharacterCreator';
import { useNuiEvent } from '../hooks/useNuiEvent';

export interface PersonagemSpawn {
  Banco: number,
  Barber: Number[],
  Blood: string,
  Clothes: {},
  Nome: string,
  Passport: number,
  Sexo: string,
  Skin: string,
  Tattoos: [],
}


debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {
  const [personagens, setPersonagens] = useState<PersonagemSpawn[] | []>([])

  useNuiEvent<PersonagemSpawn[] | []>("Spawn", (data) => {
    setPersonagens(data)
  })

  return (
    <Main>
      {
        personagens.length === 0 ? <CreatorCharacter /> :
        personagens.map((e) => <CharacterMenu color="red" person={e}/>)
      }
    </Main>
  )
}

export default App;