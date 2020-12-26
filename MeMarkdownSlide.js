import React from 'react';
import styled from 'styled-components';

import { Box, Grommet, Markdown } from 'grommet';
import { grommet } from 'grommet/themes';


import ReactMarkdown from 'react-markdown' ;
import {render} from 'react-dom' ;

//https://github.com/remarkjs/react-markdown
const CONTENT = '##OUT OF REACH \r1234567890abcdefg \r fdsjf \rfdsfdsfdsjjj \rdsf' ;

const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

class MeMarkdownSlide extends React.Component 
{
  constructor(props) 
  {
    super(props);
    /*
    this.state = {
      open : false,
      favorite : false
    } ;
    */
    // Don't call this.setState() here!
    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render()
  {
    return (
      <Box align="center" pad="large" border ='all'>
        <Markdown >{markdown}</Markdown>
        <Markdown>##*this is* </Markdown>
        <ReactMarkdown># Header 1
  ## Header 2</ReactMarkdown>
    </Box>
    ) ;
  }
}

  export default MeMarkdownSlide;