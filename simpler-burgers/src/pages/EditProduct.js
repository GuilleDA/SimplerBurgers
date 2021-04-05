import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import product_photo from '../assets/productBig.png';
import unit_icon from '../assets/unit.svg';
import option_icon from '../assets/option.svg';
import edit_button from '../assets/editButton.svg';
import back_button from '../assets/back.svg';
import { DESCRIPTION, PRODUCT_OPTIONS, PRICE} from "../data/Dummy";
import { useHistory } from "react-router";
import { routeTo } from '../util/RoutesHelper';

const EditProduct = () => {
    const history = useHistory();

    const handleEditClick = () => {
        routeTo.cart(history, )
    }

    const handleBackClick = () => {
        routeTo.cart(history, )
    }

    const getOptions = (text) => {
        let content = []
        if(text === "Units"){
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
        <HeaderWrapper>
            <BackButton src={back_button} onClick={handleBackClick}/>
        </HeaderWrapper>
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
        <EditButton src={edit_button} onClick={handleEditClick}/>
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

const EditButton = styled.img`
    padding-top: 5%;
    padding-left: 4%;
    cursor:pointer;
`

const HeaderWrapper = styled.div`

`

const BackButton = styled.img`
    cursor:pointer;
`
export default EditProduct;
