import React from "react";


const RelatedItemCard = (props) => (
    <div id="relatedItemCard">
      <br></br>
      These are the RelatedItemCards:<br></br>
      id: {props.data.id}<br></br>
      name: {props.data.name}<br></br>
      default_price: {props.data.default_price}<br></br>
    </div>
);

export default RelatedItemCard;