import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { OnClick } from './actions/index'
import styled from 'styled-components'




const Main = () => {

    const Wrapper = styled.div`

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border-width: 15px;
    border-style: solid;
    border-image: linear-gradient(to right,#8787ff,#bf3fff) 1;
    text-align: center;
   
    `;

    const Section = styled.section`
    border-width: 10px;
    border-style: solid;
    border-image: linear-gradient(to right,#8787ff,#bf3fff) 1;
    text-align: center;
    padding: 2rem 4rem;
    `

    const Para = styled.p`
    font-family: cursive;
  font-size: 2rem
  `;

    const Button = styled.button`
    background-color: transparent;
    border: 2px solid currentColor;
  border-radius: 3rem;
  color: #a166ff;
  font-family: cursive;
  font-size: 2rem;
  font-weight: 100;
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  cursor: pointer;

}
&::after {
  background-color: #a166ff;
  border-radius: 3rem;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0) rotate(10deg);
  transform-origin: top left;
  transition: 0.2s transform ease-out;
  will-change: transform;
  z-index: -1;
}
&:hover::after {
  transform: translate(0, 0);
}
&:hover {
  border: 2px solid transparent;
  color: #fff;
  transform: scale(1.05);
  will-change: transform;
}
    `;

    const myState = useSelector((state) => state.RandomNum);
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Section>
            <Para>{myState}</Para>
            <Button onClick={() => dispatch(OnClick())}>Click me</Button>
            </Section>
        </Wrapper>
    )
}

export default Main