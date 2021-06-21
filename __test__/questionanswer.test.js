import React from 'react';
import {shallow} from 'enzyme';
import QuestionAnswer from '../client/src/components/questionanswer/questionanswer';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from "react-dom/test-utils";
//import { render, Simulate, flushPromises } from 'react-testing-library';
import listQuestions from './listquestionsexample.js';
import axios from 'axios';
import { assertTSExpressionWithTypeArguments } from '@babel/types';
import { debug } from 'webpack';
//import userEvent from '@testing-library/user-event'
//jest.mock('axios');
// commented out for integration test 2


require("babel-polyfill");


var secondProduct = {
  id: 22126,
  campus: 'hr-rpp',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-03-18T16:09:30.589Z',
  updated_at: '2021-03-18T16:09:30.589Z',
}


describe('Unit Test Section: <QuestionAnswer/>', () => {

  test('Unit Test 0:  Test to ensure basic test functions are working', () => {
    expect(1).toEqual(1);
  });


  test('Unit Test 1:  Does the component <QuestionAnswer/> render?', () => {
    render(<QuestionAnswer currentProduct={secondProduct}/>);
  });

  test('Unit Test 1:  Does the component <QuestionAnswer/> render?', () => {
    render(<QuestionAnswer currentProduct={secondProduct}/>);
  });
  

});


describe('Integration Test: : <QuestionAnswer/>', () => {

  let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
      render(<QuestionAnswer currentProduct={secondProduct}/>);
    });



  beforeEach(() => {
    // div = document.createElement('div')
    // container = renderContent(div)

    // note to self, this was the example give for me to use
    // however this actually returns an anonymous function which returns a promise
    //axios.get.mockResolvedValue(listQuestions);

    //compare with this.
    //axios.get.mockResolvedValue(Promise.resolve(listQuestions));

    //console.log('result of axios call');
    // axios.get().then((result) => {
    //   console.log('this is the result of the axios call: ', result)
    // });
  })

  afterEach(() => {

  });


  // PASSING!  deactivated because it requires jest.mock('axios) which breaks other tests.
  // test('first integration test', async () => {
  //   act(() => {
  //     render(<QuestionAnswer currentProduct={secondProduct}/>, container);
  //   });

  //   await waitFor(async () => { 
  //     expect(axios.get).toHaveBeenCalled();
  //     console.log('writing the mock call', axios.get.mock.results[0].value);
  //     //screen.debug();
  //     expect(await screen.findByText(/fabric/)).toBeInTheDocument();
  //     //await waitFor(() => expect(screen.getByText('answer')).toBeInTheDocument()); 
  //   })
  // });
    
  // NOW PASSING!
  test('second integration test without mocking API call results', async () => {

    await waitFor(() => {   
      //fixed bug of not rendering because of CORS
      var answer = screen.getAllByText('| add answer');
      fireEvent.click(answer[0]);
      expect(screen.getByDisplayValue(/jack@email.com/)).toBeInTheDocument();
      expect(screen.getByText('What is your Nickname?')).toBeInTheDocument();
      expect(screen.getByText('Your E-mail')).toBeInTheDocument();

      let answerbodyofAnswerModalWindow = screen.getByRole('textbox', { name: /answerbodylabel/ });
      expect(answerbodyofAnswerModalWindow).toBeInTheDocument();

      let submitOfAnswerModalWindow = screen.getByText(/submit answer/i);
      expect(submitOfAnswerModalWindow).toBeInTheDocument();
      //await waitFor(() => expect(screen.getByText('answer')).toBeInTheDocument()); 
    });
      
  });


  // NOW PASSING!
  test('3rd Integration Test:  User enters fields, but email format improper, and clicks submit', async () => {
    await waitFor(() => { 

      var answer = screen.getAllByText('| add answer');
      fireEvent.click(answer[0]);

      // // Filling out the form

      // // ANSWER FIELD
      // let answerbodyofAnswerModalWindow = screen.getByRole('textbox', {name: 'answerbody'}); //this didnt work
      
      let answerbodyofAnswerModalWindow = screen.getByRole('textbox', { name: /answerbodylabel/ });
      fireEvent.click(answerbodyofAnswerModalWindow);
      fireEvent.change(answerbodyofAnswerModalWindow, { target: { value: 'a' } });
      expect(answerbodyofAnswerModalWindow).toBeInTheDocument();


      // NICKNAME FIELD
      // getting the nickname field
      let nameOfAnswerModalWindow = screen.getByDisplayValue(/jack543/);

      //click on the field to clear the field
      fireEvent.click(nameOfAnswerModalWindow);

      // have the user to enter the data inside
      fireEvent.change(nameOfAnswerModalWindow, { target: { value: 'a' } });

      // // EMAIL FIELD
      // // getting the e-mail field
      let emailOfAnswerModalWindow = screen.getByDisplayValue(/jack@email.com/);

      // // click on the field to clear the field
      fireEvent.click(emailOfAnswerModalWindow);

      // // have the user to enter the data inside
      fireEvent.change(emailOfAnswerModalWindow, { target: { value: 'a' } });

      // // get the submit button
      let submitOfAnswerModalWindow = screen.getByText(/submit answer/i);

      // // click the button with improperly formatted e-mail
      fireEvent.click(submitOfAnswerModalWindow);
      expect(screen.getByText(/You must enter a properly formatted e-mail address/)).toBeInTheDocument();
    });
  });



  // NOW PASSING!
  // test('4th Integration Test:  User clicks to Report and the Link changes to Reported', async () => {
  //   await waitFor(() => { 

  //     var reportFirstAnswer = screen.getAllByText('Report');
  //     fireEvent.click(reportFirstAnswer[0]);

  //     expect(reportFirstAnswer[0]).toHaveTextContent('Reported');
  //   });
  // });


});





//   test('Test #1: Does it render a Question & Answer Widget', () => {
//    //screen.debug();
//    //render(<QuestionAnswer currentProduct={secondProduct}/>);
//    expect(screen.getByText('Search Question')).toBeInTheDocument();  
//   });



//     // describe('fetchData', () => {
//     //  test('fetches successfully data from an API', async () => {
//     //     const data = {
//     //       data: {
//     //         hits: [
//     //           {
//     //             objectID: '1',
//     //             title: 'a',
//     //           },
//     //           {
//     //             objectID: '2',
//     //             title: 'b',
//     //           },
//     //         ],
//     //       },
//     //     };
    
//     //     axios.get.mockImplementationOnce(() => Promise.resolve(data));
//     //   });
    
//     //   test('fetches erroneously data from an API', async () => {
//     //     const errorMessage = 'Network Error';
    
//     //     axios.get.mockImplementationOnce(() =>
//     //       Promise.reject(new Error(errorMessage)),
//     //     );
//     //   });
//     // });

  
//   test('Test #2: It mocks an API call with test data from axios', () => {
//     var textToSearchFor = 'Submit Photo';
//     let inputTextBox = screen.getByRole('textbox');
//     expect(screen.getByDisplayValue('Have a question? Search for answers…')).toBeInTheDocument(); 
//     expect(inputTextBox).toBeInTheDocument();
//    });



//    test('test #3: make sure the add answer link is rendering', () => {
  
//     // The findBy search variant is used for asynchronous elements which will be there eventually. 
//     // Tom Notes:  In my test, the 'add answer' "link" is not initially rendered, and therefore 
//     // expect(screen.getByText('add answer')).toBeInTheDocument(); should fail
//     // in my code once, the GET request to the API is returned &
//     // once the state is populated, only then should my text render

//     return screen.findByText(/add answer/).then(data => {
//       expect(data).toBeInTheDocument(); 
//     });
//   });


//    test('test #4: ', async () => {

//     // note to self debug this later by getting the add answer field to load
//     //let addAnswerLink = await screen.findByText('add answer');
//     // userEvent.click(addAnswerLink);
//     // expect(screen.getByDisplayValue('Example: jack543!')).toBeInTheDocument(); 
//    });

//   test('test #5: ', () => {
//     //  expect(screen.getByDisplayValue('Example: jack543!')).toBeInTheDocument(); 
//   });


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