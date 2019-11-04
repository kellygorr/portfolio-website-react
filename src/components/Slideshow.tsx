import React from 'react';
import styled from 'styled-components'
import { ISlideshow } from './data/IProject';


interface IPageProps {
    data: ISlideshow[]
}

export const Slideshow: React.FC<IPageProps> = (props:IPageProps) => {
    if(!props.data){
        return null
    }
  return (
    <Container>

      {props.data.map((slide: ISlideshow)=>(
        <Slide>
        <img src={slide.img}/>
        {slide.caption && <Caption>{slide.caption}</Caption>}
        </Slide>
      ))}
 
    </Container>
  );
}


const Container = styled.div`
width: 100%;
`
const Slide = styled.div`

img{
    width: 100%;
}

`
const Caption = styled.div`
width: 100%;
text-align: center;

`