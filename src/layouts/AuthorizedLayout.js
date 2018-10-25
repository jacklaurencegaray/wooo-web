
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import styled, {css} from 'styled-components'
import Header from '../components/Header'
import LoaderWrapper from './LoaderWrapper'
import { withRouter } from 'react-router-dom'

@inject('store') @observer
class AuthorizedLayout extends Component {

    isAuthorized = () => this.props.store.userStore.token

    componentDidMount() {
        if(!this.isAuthorized())
            if(this.props.redirectTo)
                this.props.store.userStore.setRedirectTo(this.props.redirectTo)
            else
                this.props.store.userStore.setRedirectTo(this.props.location.pathname)
    }

    render() {
        return !this.isAuthorized()?
            <Redirect to='/login'></Redirect>
            : <LoaderWrapper>
                <AuthorizedContent>
                    { !this.props.noheaders? (<Header />): <div></div> }
                    <ContentContainer noPad = {this.props.noPad}>
                        { this.props.children }
                    </ContentContainer>
                </AuthorizedContent>
            </LoaderWrapper>
    }
}

export default withRouter(AuthorizedLayout)

const AuthorizedContent = styled.div`
    background-color: #111111;
    min-height: 100vh;
    color: #ffffff;
    margin-left: auto;
    margin-right: auto;
`

const ContentContainer = styled.div`
    padding-left: ${props => (props.noPad)?css`0`:css`36px`};
    padding-right: ${props => (props.noPad)?css`0`:css`36px`};
    padding-bottom: ${props => (props.noPad)?css`0`:css`50px`};
`
