import React from 'react';

const FeaturesList = (props) => {
  const features = props.featuresList.map((feature) => {
    return (
      <li>
        {feature.feature}
        :
        {feature.value}
      </li>
    );
    });

  return (
    <ul>{features}</ul>
  );
};

export default FeaturesList;
