
import React from 'react';

import { 
  Anchor,
  Avatar,
  Box,
  Header, 
  Grommet,
  Nav } from 'grommet';

import { Chrome } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import MePlainCard from './MeCard' ;
import MeQuizCard from './MeQuizCard' ;

const gravatarLink =  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

const theme = 
{
  global: 
  {
    colors: 
    {
      brand: '#228BE6',
    },
    font: 
    {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  card: 
  {
    elevation: 'none',
    background: 'light-2',
    footer: 
    {
      pad: 'medium',
    },
  }
};


const items = [
  { label: 'HTML', href: '#' },
  { label: 'JS', href: '#' },
  { label: 'CSS', href: '#' },
  { label: 'REACT', href: '#' },
];


class MeStudioApp extends React.Component 
{
  constructor(props) 
  {
    super(props);
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() 
  {
    return (
      <Grommet theme={theme} full>
        <Header background="dark-2" pad="small">
          <Box direction="row" align="center" gap="small">
            <Avatar src={gravatarLink} />
            <Anchor color="white" href="https://github.com/ShimiSun">ShimiSun</Anchor>
            <Chrome color='plain' size='large' /> 
          </Box>
          
          <Nav direction="row">
            {items.map(item => (
              <Anchor href={item.href} label={item.label} key={item.label} />
            ))}
          </Nav>
        </Header>

        <MeQuizCard ></MeQuizCard>
    
      </Grommet>
    );

  }

  btClickFunc()
  {
    console.log('btClickFunc') ;
    const axios = require('axios');
  
    axios.get('http://170.106.106.34:8082/index.html',{ crossdomain: true })
    .then(function (response) 
    {
      // handle success
      console.log(response);
    })
    .catch(function (error)
     {
      // handle error
      console.log(error);
    }) ;
  
  }
}

export default MeStudioApp;
