
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

@inject('store') @observer
export default class AuthorizedLayout extends Component {
  
    isAuthorized = () => this.props.store.userStore.token

    render() {
        return !this.isAuthorized()? 
            <Redirect to='/login'></Redirect>
            : <AuthorizedContent>
                { !this.props.noheaders? (<Header />): '' }
                <ContentContainer>
                    { this.props.children }
                </ContentContainer>
            </AuthorizedContent>
    }
}

const AuthorizedContent = styled.div`
    background-color: #111111;
    min-height: 100vh;
    color: #ffffff;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

const ContentContainer = styled.div`
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 50px;
`
