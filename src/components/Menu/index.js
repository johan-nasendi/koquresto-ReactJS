import React from 'react';

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProducBtnLink

} from './MenuElements';

const Menu = ({ heading, data }) => {
  return (
    <>
    <ProductsContainer id='menu'>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((item, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={item.img} alt={item.alt} />
              <ProductInfo>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductDesc>{item.desc}</ProductDesc>
                <ProductPrice> $ {item.price}</ProductPrice>
                <ProductButton >{item.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })
        }
      </ProductWrapper>
      <ProductInfo>
              <ProducBtnLink to='/allmenu'> All Menu</ProducBtnLink>
              </ProductInfo>
    </ProductsContainer>
    </>
  );
};

export default Menu;