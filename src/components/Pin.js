import React from 'react'
import styled from 'styled-components'

function Pin(props) {
    let {urls} = props
    return (
        <wrapper>
            <Container>
                <img src={urls?.regular} alt="pin" />
            </Container>
        </wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    curser: pointer;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        cursor:zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`