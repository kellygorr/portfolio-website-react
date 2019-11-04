import React from 'react';
import styled from 'styled-components'
import { IProject, ISection } from './data/IProject';
import {Section} from './Section'

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
      {props.data.content.map((test: ISection)=>{
        let items = Object.entries(test);
        console.log('items', items)
        return (items.map((type,index) => {
          // let value = test[key];
          console.log(type)
          return <Section key={index} type={type[0]} data={type[1]} />
         }))
        })}
 
    </Container>
  );
}


const Container = styled.div`
height: 100%;
width: 100%;
`