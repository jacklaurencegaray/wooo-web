// import React, {Component} from 'react'
// import styled, {css} from "styled-components"

// export default class SexOptions extends Component{
//   constructor(props)
  
//   render(){
//       return(
//       <PrefButtonMale id="male" 
//           aria-label="Male" 
//           value= "0" 
//           onClick={this.handleMale} 
//           active = {this.props.store.userStore.sexual_Preference == 0}    
//       />
//      <PrefButtonFemale id="female" 
//           aria-label="Female" 
//           value= "1"
//           onClick={this.handleFemale} 
//           active = {this.props.store.userStore.sexual_Preference == 1}
//       />
//       <PrefButtonOthers id="other" 
//           aria-label="Others" 
//           value="2"
//           onClick={this.handleOthers} 
//           active = {this.props.store.userStore.sexual_Preference == 0}
//       />
// }

// const PrefButtonMale = styled.button`
//   font-weight: 100
//   font-size: 15px
//   color: #ffffff
//   background-color: #191919
//   letter-spacing: 0.01px
//   text-align: center
//   border-radius: 5px
//   border: 0
//   padding: 12px
//   width: 90px
//   margin: auto
//   margin-bottom: 5px
//   margin-right: 15px
//   transition: 0.5s all ease

//   &:hover {
//     cursor: pointer
//     background-position: 300px
//     background-color:  #191919
//     border: 1px solid #f51a63
//   }

//   &:focus {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   &:active {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   ${
//     props => props.active && 
//         css`
//           background-position: 300px
//           background-color:  #f51a63
//           border: 1px solid #f51a63
//         `
//   }
// `
// const PrefButtonFemale = styled.button`
//   font-weight: 100
//   font-size: 15px
//   color: #ffffff
//   background-color: #191919
//   letter-spacing: 0.01px
//   text-align: center
//   border-radius: 5px
//   border: 0
//   padding: 12px
//   width: 90px
//   margin: auto
//   margin-bottom: 5px
//   margin-right: 15px
//   transition: 0.5s all ease

//   &:hover {
//     cursor: pointer
//     background-position: 300px
//     background-color:  #191919
//     border: 1px solid #f51a63
//   }

//   &:focus {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   &:active {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   ${
//     props => props.active && 
//         css`
//           background-position: 300px
//           background-color:  #f51a63
//           border: 1px solid #f51a63
//         `
//   }
// `
// const PrefButtonOthers = styled.button`
//   font-weight: 100
//   font-size: 15px
//   color: #ffffff
//   background-color: #191919
//   letter-spacing: 0.01px
//   text-align: center
//   border-radius: 5px
//   border: 0
//   padding: 12px
//   width: 90px
//   margin: auto
//   margin-bottom: 5px
//   margin-right: 15px
//   transition: 0.5s all ease

//   &:hover {
//     cursor: pointer
//     background-position: 300px
//     background-color:  #191919
//     border: 1px solid #f51a63
//   }

//   &:focus {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   &:active {
//     background-position: 300px
//     background-color:  #f51a63
//     border: 1px solid #f51a63
//   }

//   ${
//     props => props.active && 
//         css`
//           background-position: 300px
//           background-color:  #f51a63
//           border: 1px solid #f51a63
//         `
//   }
// `