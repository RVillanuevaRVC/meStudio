import React from 'react';

import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Grommet,
  Image,
  Markdown,
  Paragraph,
} from 'grommet';

import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';

const meCardtheme = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
  },
};




class MeAlgebraConceptCard extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      open : false,
      favorite : false
    } ;
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render()
  {
  
   
    return (
      <Box pad="medium" alignContent= "center" align="start" border={true}>
        <Card elevation="large" width="large">
          <CardBody height="small">
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" a11yTitle="bridge"/>
          </CardBody>
          
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}> Bridge </Heading>
            <Box align="center" pad="large">
            </Box>
          </Box>
          
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button icon={<Favorite color={'red' } />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator />
              <Anchor href="https://www.collinsdictionary.com/us/dictionary/english/bridge" label="Learn More"/>
            </Box>
            <ExpandButton  onClick={() => this.setState({open:!this.state.open})}/>
          </CardFooter>
          
          <Collapsible open = {this.state.open}>
            <Paragraph margin="medium" color="dark-3">
              The greatest bridge builders of antiquity were the ancient Romans.The Romans built arch bridges and aqueducts that could stand in conditions that would damage or destroy earlier designs. Some
              stand today.
            </Paragraph>
          </Collapsible>
        </Card>
      </Box>
    );
  }
}

export default MeAlgebraConceptCard ;