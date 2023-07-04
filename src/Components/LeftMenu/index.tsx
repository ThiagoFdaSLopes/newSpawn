import React from 'react'
import { LeftMenuComponent, ButtonSelectComponent, InfoPersonMenu } from './style'

type Props = {
  color: string
}

const CharacterMenu: React.FC<Props> = ({ color }) => {
  return (
    <LeftMenuComponent color={color}>
      <InfoPersonMenu />
      <ButtonSelectComponent />
    </LeftMenuComponent>
  )
}

export default CharacterMenu;