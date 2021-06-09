import React from "react";

const RelatedItemCard = (props) => {
  console.log(props);
  return (
    <div id="relatedItemCard">
      These are the RelatedItemCards:
      {props.data}
    </div>
  );
};

export default RelatedItemCard;