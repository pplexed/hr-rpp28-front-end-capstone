import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Modal = (props) => {
  const { parentName, compareName, compareFeatures } = props;

  const closeWindow = (e) => {
    e.stop();
    props.close();
  };

  return (
    <ModalWrap className="modal" onClick={closeWindow}>
      <div className="modal_content" onClick={(e) => e.stop()}>
        <CloseWindowButton className="close" onClick={closeWindow}>&times;</CloseWindowButton>
      </div>
      <ModalContent>
        <CompareTitle>
          <ProductTitle>{parentName}</ProductTitle><br />
          <ProductTitle>{compareName}</ProductTitle><br />
        </CompareTitle>
        <CompareWrapper>
          {compareFeatures.map((feature, idx) => {
            if (feature) {
              if (feature[0] ==='') {
                const outputFeature = feature.substring(1, feature.length - 1);
                return <CompareDiv key={idx}>{outputFeature}</CompareDiv>;
              }
              return <CompareDiv key={idx}>{feature}</CompareDiv>;
            }
            return <CompareDiv key={idx}>{feature}</CompareDiv>;
          })}
        </CompareWrapper>
      </ModalContent>
    </ModalWrap>
  );
};

export default Modal;

const CompareWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 30px;
  overflow: auto;
  justify-items: center;
  position: relative;
  z-index: 150;
`;

const CompareTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:
  justify-items: center;
  align-items: center;
  font-size: 15px;
  background-color: white;
  margin-bottom: 10px;
`;

const CompareDiv = styled.div`
  text-align: center;
  font-size: 17px;
`;

const ModalContent = styled.div`
background-color: white;
width: 75%; /* Width in proportion to its parent container*/
max-width: 600px; /* Max width where it stops expanding */
height: 35%; /* Height in proportion to its parent container */
margin: auto; /* Auto margin according to the element width */
justify-content: center;
align-items: center;
padding: 10px;
border: 1px solid black;
border-radius: 20px; /* Optional. Rounds container corners */
overflow: auto;
`;

const ModalWrap = styled.div`
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Overlay effect: translucent background: black w/ partial opacity */
background: rgba(0,0,0,0.55);
z-index: 1; /* Overlay effect: positioned over other containers */
width: 100%; /* Full width */
height: 100%; /* Full height */
position: fixed; /* Fix position on the top-left corner*/
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
overflow: auto; /* Enable scroll if needed */
padding-top: 80px; /* Location of the content container */
font-size: calc(10px + 2vmin);
color: black;
z-index: 150;
backdrop-filter: blur(8px) contrast(70%);
`;

const CloseWindowButton = styled.span`
  color: #aaaaaa;
  position: relative;
  float: right; /* Positioned to the right of the parent container whichever size it is */
  font-size: 25px;
  font-weight: bold;
`;

const ProductTitle = styled.div`
  text-align: center;
  font-size: 17px;
  border-bottom: 1px solid grey;
  margin-bottom: 13px;
`;
