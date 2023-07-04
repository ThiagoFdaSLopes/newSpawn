import React from 'react'
import { LeftMenuComponent, ButtonSelectComponent, InfoPersonMenu } from './style'
import { PersonagemSpawn } from '../App'

type Props = {
  color: string
  person: PersonagemSpawn
}

const CharacterMenu: React.FC<Props> = ({ color, person }) => {
  return (
    <LeftMenuComponent color={color}>
      <InfoPersonMenu>
        <p>`${person.Nome}`</p>
      </InfoPersonMenu>
      <ButtonSelectComponent />
    </LeftMenuComponent>
  )
}

export default CharacterMenu;