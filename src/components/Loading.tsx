import {Icon} from './Icon';
import styled from 'styled-components';
import React from 'react';
import c from 'classnames';

const Div = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg{
    animation: spin 2s linear infinite;
  }
`
interface Props {
  className?: string
    message?: string
}

export const Loading: React.FC<Props> = ({className,message}) => {
  return (
      <Div className={c('flex flex-col justify-center items-center py-48px', className)}>
        <Icon name="loading" className="w-128px h-128px"></Icon>
          <p p-8px text-lg>{message || '加载中...'}</p>
      </Div>
  )
}
