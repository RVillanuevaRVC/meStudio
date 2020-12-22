//import logo from './logo.svg';
//import './App.css';

import React from 'react';

import { 
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible, 
  Header, 
  Heading, 
  Grommet,
  Image,
  Paragraph,
  Nav } from 'grommet';


import { FormDown, FormUp, Favorite, ShareOption,Notification } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import MeCard from './MeCard' ;

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


const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

function App() {

  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };

  return (
    
    <Grommet theme={theme} full>
      <Header background="light-4" pad="small">
                <Avatar src={gravatarLink} />
                <Nav direction="row">
                    <Anchor label="Home" href="#" />
                    <Anchor label="Profile" href="#" />
                </Nav>
      </Header>

      <MeCard></MeCard>


      
    </Grommet>
   
  );
}

export default App;
