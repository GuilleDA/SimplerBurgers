import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import product_photo from '../assets/productBig.png';
import unit_icon from '../assets/unit.svg';
import option_icon from '../assets/option.svg';
import button from '../assets/button.svg';
import continue_button from '../assets/continue.svg';
import add_something from '../assets/addSomething.svg';
import product_cart from '../assets/productCart.svg';
import { DESCRIPTION, PRODUCT_OPTIONS, PRICE} from "../data/Dummy";
import { useHistory } from "react-router";
import { routeTo } from '../util/RoutesHelper';

const Product = () => {
    const history = useHistory();

    const handleAddToCartClick = () => {
        routeTo.homeWithCart(history, )
    }

  return (
    <ProductWrapper>
        <ProductPhotoWrapper src={product_photo}/>
        <ProductOptionsWrapper>
            <CartProduct src={product_cart}/>
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
const ProductInfoWrapper = styled.div`
    width: 80%;`;

const ProductTitle = styled(Typography)`
    &&{
        padding-top: 20px;
        padding-left: 20px;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 61px;
        color: #000000;
    }
`

const ProductDescription = styled(Typography)`
    &&{
        padding-top: 20px;
        padding-left: 20px;
        padding-bottom: 10px;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 15px;
    }
`

const ProductOptionsWrapper = styled.div`
    background-color: grey;    
    width: 100%;
    padding-bottom: 100%;
    margin-top:-10px;
`
const OptionDummy = styled.img`
    width: 80%;
    height: 78px;
    padding-left: 35px;
    padding-top: 10px;
`

const ProductPrice = styled(Typography)`
    &&{
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 38px;
        padding-left: 20px;
        padding-bottom: 10px;
    }
`

const AddToCartButton = styled.img`
    padding-top: 110%;
    padding-left: 4%;
    cursor:pointer;
    width:80%;
    
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
export default Product;
