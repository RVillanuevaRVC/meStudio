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
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

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
      <Box pad="medium" alignContent= "center" align="center" border={true}>
        <Card elevation="large" width="large">
          <CardBody height="small" pad={{ horizontal: 'medium' }}>
            <div>Algebra Formula Cards</div>
          </CardBody>
          
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}> Bridge </Heading>
            <Box align="center" pad="large">
            </Box>
            <TeX> \int_0^\infty x^2 dx</TeX>
            <TeX> f(x)=y^2+3</TeX>
          </Box>
          
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button icon={<Favorite color={'red' } />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator />
              <Anchor href="https://www.collinsdictionary.com/us/dictionary/english/bridge" label="Learn More"/>
            </Box>
            
          </CardFooter>
          
          
        </Card>
      </Box>
    );
  }
}

export default MeAlgebraConceptCard ;