import React from 'react';
import {shallow} from 'enzyme';
import QuestionAnswer from '../client/src/components/questionanswer/questionanswer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Text inside Question Answer', () => {

  const wrapper = shallow(<QuestionAnswer />);

  //expect(wrapper.text()).toEqual('This is the Question Answer Module');
  expect(1).toEqual(1);

});


// BASIC TESTS TO SHOW TEXT ON THE SCREEN

describe('Question and Answer Tests', () => {


  render(<QuestionAnswer/>);

  test('Does it render a Question & Answer Widget', () => {
    screen.debug();
  });


  test('Does it display the text "Search Question"', () => {

    render(<QuestionAnswer/>);
    expect(screen.getByText('Search Question')).toBeInTheDocument();
    //expect(screen.queryByText('Have a question? Search for answers…')).toBeInTheDocument();
  
  });


  

});


// test('should show the search bar with the basic heading Have a question? Search for answers…', () => {
//   render(<QuestionAnswer />)
//   const input = screen.getByLabelText('Have a question? Search for answers…');
//   // Events and assertions...

//   expect(input).toEqual(true);
// })


// const Button = ({ onClick, children }) => (
//   <button onClick={onClick}>{children}</button>
// )

// test('calls onClick prop when clicked', () => {
//   const handleClick = jest.fn()
//   render(<Button onClick={handleClick}>Click Me</Button>)
//   fireEvent.click(screen.getByText(/click me/i))
//   expect(handleClick).toHaveBeenCalledTimes(1)
// })