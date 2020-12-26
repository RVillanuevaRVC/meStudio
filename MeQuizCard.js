import React from 'react';

import {
    Anchor,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CheckBox,
    Heading,
    Grommet,
    Image,
    Markdown,
    Paragraph,
    RadioButton,
    RadioButtonGroup ,
  } from 'grommet';
  import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';

class MeQuizCard extends React.Component 
{
  constructor(props) 
  {
    super(props);
    
    this.state = {

    } ;
    
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  

  render()
  {

    return (
        <Box pad="medium" alignContent= "center" align="center" border={false}>
            <Card elevation="large" width="large">
                <CardHeader pad="medium">Quiz</CardHeader>
                
                <CardBody >
                    <Box pad={{ horizontal: 'medium' }} responsive={false}>
                      <Markdown>## Question Go here **heart**s markdown Favorite thing, [link](https://twitter.com/grommet_io)</Markdown>
                    </Box>

                    <RadioButtonGroup pad={{ horizontal: 'medium' }}
                      name="doc"
                      options={['This is place for Answer Option No1.A fox quickly run over the grassdsjskdhsjkdhfsjkdhsjkdhsjkdhsjkdhjskadhjskahdjksahdjksahdkjasXABC', 
                          'This is place for Answer Option No2.',
                          'This is place for Answer Option No3.',
                          'This is place for Answer Option No4.']}
                    value={1}
                    />
                </CardBody>

                <CardFooter>
                    <Box direction="row" align="center" gap="small">
                        <Button icon={<Favorite color={'red' } />} hoverIndicator />
                        <Button icon={<ShareOption color="plain" />} hoverIndicator />
                    </Box>
                  
                </CardFooter>
                
                
            </Card>
        </Box>
    ) ;
  }
}

  export default MeQuizCard;