import React from 'react';
import { Accordion, AccordionPanel, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';


class MeReminderPad extends React.Component 
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
      <Box >
      <Accordion >
        <AccordionPanel label="Panel 1">
          <Box background="light-2" overflow="auto" height="medium">
            <Box height="large" flex={false}>
              Panel 1 contents
            </Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box background="light-2" style={{ height: '50px' }}>
            Panel 2 contents
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 3">
          <Box background="light-2" style={{ height: '300px' }}>
            Panel 3 contents
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
    ) ;
  }
}

  export default MeReminderPad;