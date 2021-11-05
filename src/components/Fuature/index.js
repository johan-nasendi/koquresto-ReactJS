import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer id='menu'>
      <h1>Sagu Bakar Hari Ini</h1>
      <p>Di taburi coklat dan keju</p>
      <FeatureButton>Pesan Sekarang</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;