import React, { ReactNode } from 'react';
import { ComponentMain } from './style';

const Main: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <ComponentMain>
        { children }
    </ComponentMain>
  )
}

export default Main;