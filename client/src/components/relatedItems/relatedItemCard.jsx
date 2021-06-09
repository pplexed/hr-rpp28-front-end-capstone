import React from "react";

const RelatedItemCard = (props) => {
  console.log('props.data', props.data);
  return (
    <div id="relatedItemCard">
      These are the RelatedItemCards:
      id: {props.data.id}
      name: {props.data.name}
      default_price: {props.data.default_price}
    </div>
  );
};

export default RelatedItemCard;