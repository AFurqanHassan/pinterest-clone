import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'

function Mainboard(props) {

    let { pins } = props;

    return (
        <Wrapper>
            <Container>
                {pins.map((pin) => {
                    let {urls} = pin;
                    return <Pin urls={urls} />
                })}
                
            </Container>
        </Wrapper>
    )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // align-items: flex-start;
    column-count: 5;
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    max-width: 1260px;
    background-color: White;
`