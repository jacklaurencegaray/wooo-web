import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import MessageItems from '../components/MessageItems'
import axios from 'axios'
import AuthorizedLayout from '../layouts/AuthorizedLayout'
import firebase from 'firebase'
import SmallLoading from '../components/SmallLoading'

@inject('store') 
@observer
export default class Messages extends Component {
  state = {
    currentUser: this.props.store.userStore.profile_id,
    pairedUser: [],
    loading: true
  };

  componentDidMount() {
    const userListRef = firebase.database().ref("users/"+this.props.store.userStore.profile_id);
    const myUserRef = userListRef.push();
    firebase.database().ref(".info/connected").on("value", function (snap) {
      if (snap.val()) {
        myUserRef.onDisconnect().remove();
        myUserRef.set(true);
      }
    });


    axios.get(`${process.env.REACT_APP_API_BASEURL}/profiles/${this.props.store.userStore.profile_id}/matches`)
    .then(response => {
      if(response.data){
        var pairedUser = [];
        response.data.forEach(element => {
          var pairedInfo = {
            pairedId: element.id,
            pairedName: element.user.first_name,
            pairedSlug: element.slug,
            pairedBio: element.bio,
            pairedImage: element.profile_image,
            roomId: this.state.currentUser+'R'+element.id,
            message: ""
          }
          pairedInfo.roomId = (element.id < this.state.currentUser) ? element.id+'R'+this.state.currentUser : this.state.currentUser+'R'+element.id

          firebase.database().ref().child('roomData/'+pairedInfo.roomId).limitToLast(1).on('value', message => {
            if(message.val() != null){
              var lastmessage = Object.values(message.val());
              pairedInfo.message = lastmessage[0].content;
              this.setState({ pairedInfo })
            }else{
              pairedInfo.message = "";
            } 
          });
          pairedUser.push(pairedInfo);
          
        });
        this.setState({
          pairedUser,
          loading: false
        })
      }
    }).catch(err => this.setState({ loading: false }));
  }

  render() {
    return (
      <AuthorizedLayout noverflow={true}>
        <Content>
          { this.state.loading? <SmallLoading />: 
            this.state.pairedUser && this.state.pairedUser.length?
            <Fragment>
              <Tag>
                <PageTitle>Messages</PageTitle>
              </Tag>
              {/* <Search>
                <Input type="text" id="usr" placeholder="Search for a message"/>
              </Search> */}
              <MessageItems pairedUser={this.state.pairedUser} />
            </Fragment>
            : <EmphasizedTextContent>
              <p>You haven't found a match yet, start looking</p>
              <Link to='/matching'>
                <LookForOneButton>Start Swiping</LookForOneButton>
              </Link>
            </EmphasizedTextContent>
          }
        </Content>
      </AuthorizedLayout>
    );
  }
}

const PageTitle = styled.div`
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
`

const Content = styled.div`
  margin-top: 10px;
`

const Tag = styled.div`
  text-align: left;
`;

const EmphasizedTextContent = styled.div`
  font-size: 22px;
  line-height: 31px;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  justify-items: center;
  padding-top: 20vh;
  padding-bottom: 20vh;
`

const LookForOneButton = styled.button`
  background-color: #F11A61;
  padding: 15px 25px;
  color: #fff;
  border: 0;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`
