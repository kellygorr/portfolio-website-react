import React from 'react';
import styled from 'styled-components'
import { IProject } from './data/IProject';

interface IPageProps {
    data: IProject | null
}

export const Page: React.FC<IPageProps> = (props:IPageProps) => {
    if(!props.data){
        return null
    }
  return (
    <Container>
      {props.data.title}
      <p>{props.data.subtitle}</p>
    </Container>
  );
}

const Container = styled.div`
position:relative;
height: 100%;
width: 100%;
`