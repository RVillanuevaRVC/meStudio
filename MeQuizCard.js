import React from 'react';

import {
    Anchor,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    
    Heading,
    Grommet,
    Image,
    Markdown,
    Paragraph,
    RadioButtonGroup ,
  } from 'grommet';
  import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';

class MeQuizCard extends React.Component 
{
  constructor(props) 
  {
    super(props);
    
    this.state = {
      open : false,
      favorite : false,
      value : 0 
    } ;
    
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  

  render()
  {
    const postMethods = [
        { label: 'FTP', value: 'FTP' },
        {
          label: 'File System',
          value: 'FileSystem',
        },
        {
          label: 'FTP & File System',
          value: 'FTPCopy',
        },
      ];
    return (
        <Box pad="medium" alignContent= "center" align="center" border={false}>
            <Card elevation="large" width="large">
                <CardHeader pad="medium">Quiz</CardHeader>
                <CardBody height="small">
                    <Box pad={{ horizontal: 'medium' }} responsive={false}>
                        <Heading level="3" margin={{ vertical: 'medium' }}> Bridge </Heading>
                        <Box align="center" pad="large">
                        </Box>
                    </Box>
                    <Box>
                        <RadioButtonGroup pad="medium" border='all' name="radio"
                            options={postMethods}
                            value={this.state.value}
                            onChange={event => this.setState(event.target.value)}>
                        </RadioButtonGroup>
                    </Box>
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