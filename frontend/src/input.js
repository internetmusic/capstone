import React, { Component , useState } from 'react'
import axios from 'axios';



function MyTextInput(props){
    function handleChange(event){
         if (props.onChange) props.onChange(event)  
    }
    return (
         <p>
             <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
         </p>
     )
}

class MyInputBlock extends Component {
    constructor(props){
        super(props)
        this.textInput = null
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus()
        }

    }

    handleChange = (event) =>{
         if (this.props.onChange) this.props.onChange(event)  
    }
    componentDidMount(){
        this.focusTextInput()
    }

    render() {
        return (
            <div>
          <p><input ref={this.setTextInputRef} type='text' placeholder='Your Name'  name={this.props.inputFullName} onChange={this.handleChange}/></p>
          <p><textarea placeholder='Your message' name={this.props.inputContentName}  onChange={this.handleChange}></textarea></p>
          </div>
      )
    }
}
 

class FormsAndInputs extends Component {
    constructor(props){
        super(props)
        const timestamp = parseInt(Date.now()/1000)
        this.state = {
            name: '',
            message: '',
            time:timestamp,
            email: ''
        }
        this.inputFullNameRef = React.createRef()
        this.inputEmailRef = React.createRef()
    }



    handleInputChange = (event) => {
        event.preventDefault()
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleFocusClick = (event) => {
        event.preventDefault()
            this.inputEmailRef.current.focus()
    }


    handleSubmit = event => {
        event.preventDefault();
        var data = this.state;
        console.log(data);
    
        axios.post(`http://localhost:8000/create`,  data )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        alert("Thank you!!");
      }
    
     
    
  render () {
      const {email} = this.state
      const {message} = this.state
      const {name} = this.state
    return (
      <div>
        <h1>Create Guest Book Entry</h1>
        <p>Hello 🖐🏼  {name}</p>
        <form onSubmit={this.handleSubmit}>
            <MyTextInput inputRef={this.inputEmailRef} value={email} name='email'  onChange={this.handleInputChange}/>
            <MyInputBlock onChange={this.handleInputChange} inputFullName="name" inputContentName='message'/>
          <p><button className='fetch-button'>SIGN</button></p>
          {/* <p><button onClick={this.handleFocusClick}>Focus</button></p> */}
        </form>
      </div>
    )
  }
}

export default FormsAndInputs

