import React from 'react'
import ShowPlaylistsList from '../ShowPlaylistsList'

import {MainContainer} from './styled'

export default class Main extends React.Component {
    
    render() {
        return (
            <MainContainer>
                <ShowPlaylistsList />
            </MainContainer>
        )
    }
}