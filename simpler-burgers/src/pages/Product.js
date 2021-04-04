import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import product_photo from '../assets/productBig.png';
import unit_icon from '../assets/unit.svg';
import option_icon from '../assets/option.svg';
import { DESCRIPTION, PRODUCT_OPTIONS, PRICE} from "../data/Dummy";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const Product = () => {


    const getOptions = (hola) => {
        let content = []
        if(hola === "Units"){
            content.push(<OptionDummy src={unit_icon}/>);
            content.push(<br/>);
        }else{
            content.push(<OptionDummy src={option_icon}/>);
            content.push(<br/>);
        }
        return <div>{content}</div>;
    }

  return (
    <ProductWrapper>
        <ProductPhotoWrapper src={product_photo}/>
        <ProductInfoWrapper>
            <ProductTitle>
                Product
            </ProductTitle>
            <ProductDescription>{DESCRIPTION}</ProductDescription>
            <ProductPrice>{PRICE}</ProductPrice>
        </ProductInfoWrapper>
        <ProductOptionsWrapper>
            {PRODUCT_OPTIONS.map(type => getOptions(type))}
        </ProductOptionsWrapper>
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
        font-size: 12px;
        line-height: 15px;
    }
`

const ProductOptionsWrapper = styled.div`
    background-color: grey;    
    width: 100%;
    height: 300px;
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

export default Product;
