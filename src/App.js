// * react basic import
import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Slide from './components/Slide'

function App() {
    return (
        <Container>
            <Header />
            <Slide />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;
`

export default App
