import React, { Component } from 'react';
import {Button, Icon, Navbar,NavItem, Input,Row,Card,CardTitle} from 'react-materialize'
import Logo from './Components/Logo/Logo'
import './App.css';





class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar className= "navy loguito" brand="Synap" right>

      <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>

        <Button  className="btn-large teal lighten-3" waves='light'>
            <Icon>thumb_up</Icon>
          </Button>

<Card className='small'
  header={<CardTitle image='https://i.imgur.com/T1kCd0H.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

      <div>
<Row>
    <Input placeholder="Placeholder" s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
</Row>


      </div>


         
      </div>


    );
  }
}

export default App;
