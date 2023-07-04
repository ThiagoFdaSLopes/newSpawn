import React from 'react'
import { debugData } from '../utils/debugData';
import Main from './Main';
import CharacterMenu from './LeftMenu';


debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {
  return (
    <Main>
      <CharacterMenu color="red"/>
      <CharacterMenu color="blue"/>
      <CharacterMenu color="white"/>
    </Main>
  )
}

export default App;