import React from 'react';
import {shallow} from 'enzyme';
import QuestionAnswer from '../client/src/components/questionanswer/questionanswer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
//import userEvent from '@testing-library/user-event'

test('Baseline test to ensure basic testing functionality is working', () => {

  //const wrapper = shallow(<QuestionAnswer />);
  //expect(wrapper.text()).toEqual('This is the Question Answer Module');
  expect(1).toEqual(1);

});


// // BASIC TESTS TO SHOW TEXT ON THE SCREEN

// describe('Question and Answer Tests', () => {

//   var secondProduct = {
//     id: 22126,
//     campus: 'hr-rpp',
//     name: 'Heir Force Ones',
//     slogan: 'A sneaker dynasty',
//     description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
//     category: 'Kicks',
//     default_price: '99.00',
//     created_at: '2021-03-18T16:09:30.589Z',
//     updated_at: '2021-03-18T16:09:30.589Z'
//   }

//   beforeEach(() => {
//     // div = document.createElement('div')
//     // container = renderContent(div)
//     render(<QuestionAnswer currentProduct={secondProduct}/>);
//   })

//   test('Test #1: Does it render a Question & Answer Widget', () => {
//    //screen.debug();
//    //render(<QuestionAnswer currentProduct={secondProduct}/>);
//    expect(screen.getByText('Search Question')).toBeInTheDocument();  
//   });


//   // test('Test #2:', () => {
//   //   //render(<QuestionAnswer currentProduct={secondProduct}/>);

//   //   var textToSearchFor = 'Submit Photo';
//   //   //let input = screen.getByRole('heading')).toHaveTextContent('hello there')
//   //   expect(screen.getByDisplayValue('Have a question? Search for answers…')).toBeInTheDocument(); 
//   //  });



//    test('test #3: make sure the add answer link is rendering', () => {
//     //render(<QuestionAnswer currentProduct={secondProduct}/>);

//     // The findBy search variant is used for asynchronous elements which will be there eventually. 
//     // Tom Notes:  In my test, the 'add answer' "link" is not initially rendered, and therefore 
//     // expect(screen.getByText('add answer')).toBeInTheDocument(); should fail
//     // in my code once, the GET request to the API is returned &
//     // once the state is populated, only then should my text render

//     // return screen.findByText('add answer').then(data => {
//     //   expect(data).toBeInTheDocument(); 
//     // });
//   });


//   //  test('test #4: ', () => {

//   //   let addAnswerLink = await screen.findByText('add answer');

//   //   userEvent.click(addAnswerLink)

//   //   expect(screen.getByDisplayValue('Example: jack543!')).toBeInTheDocument(); 
//   //  });

//   //  test('test #4: ', () => {
//   //   render(<QuestionAnswer currentProduct={secondProduct}/>);

//   //   expect(screen.getByDisplayValue('Example: jack543!')).toBeInTheDocument(); 
//   //  });


// });


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