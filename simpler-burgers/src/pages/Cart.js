import * as React from "react";
import styled from "styled-components";
import product_photo from '../assets/productBig.png';
import continue_button from '../assets/continue.svg';
import add_something from '../assets/addSomething.svg';
import product_cart from '../assets/productCart.svg';
import back_button from '../assets/back.svg';
import { useHistory } from "react-router";
import { routeTo } from '../util/RoutesHelper';

const Product = () => {
    const history = useHistory();

    const handleBackClick = () => {
        routeTo.homeWithCart(history, )
    }

    const handleEditClick = () => {
        routeTo.editProduct(history, )
    }

  return (
    <ProductWrapper>
        <HeaderWrapper>
            <BackButton src={back_button} onClick={handleBackClick}/>
        </HeaderWrapper>
        <ProductPhotoWrapper src={product_photo}/>
        <ProductOptionsWrapper>
            <CartProduct src={product_cart} onClick={handleEditClick}/>
            <br/>
            <AddSomething src={add_something}/>
        </ProductOptionsWrapper>
        <ContinueWrapper>
            <ContinueButton src={continue_button}/>
        </ContinueWrapper>
    </ProductWrapper>
    
  );
};

const ProductWrapper = styled.div`
    position:relative
    width: 100%;`;

const ProductPhotoWrapper = styled.img`
    width: 100%;
    height: 25%;
`

const ProductOptionsWrapper = styled.div`
    background-color: grey;    
    width: 100%;
    padding-bottom: 100%;
    margin-top:-10px;
`

const ContinueWrapper = styled.div`
    background: #FAFAFA;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
    width: 100%;
    bottom: 0px;
    position: fixed;
    padding-right: 1%;
    padding-left: 1%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 15vh;
`;

const ContinueButton = styled.img`
`

const AddSomething = styled.img`
    width: 80%;
    height: 78px;
    padding-left: 35px;
    padding-top: 10px;
`

const CartProduct = styled.img`
    width: 80%;
    height: 78px;
    padding-left: 35px;
    padding-top: 10px;
`

const HeaderWrapper = styled.div`

`

const BackButton = styled.img`
    cursor:pointer;
`

export default Product;
