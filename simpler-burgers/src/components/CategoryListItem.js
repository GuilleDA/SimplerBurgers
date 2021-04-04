import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import { COMBO_TYPES } from "../data/Dummy";
import { BEBIDA_TYPES } from "../data/Dummy";
import limiter_icon from '../assets/limiter.svg';
import product_icon from '../assets/product.svg';
import { ContactPhoneTwoTone } from "@material-ui/icons";




const CategoryListItem = (props) => {

    const getProducts = () => {
        let content = []
        if(props.type === "Combos"){
            COMBO_TYPES.map(x => {content.push(<ProductDummy src={product_icon}/>)
                                         content.push(<br/>)});
        }else{
            BEBIDA_TYPES.map(x => {content.push(<ProductDummy src={product_icon}/>)
                                          content.push(<br/>)});
        }
        return <div>{content}</div>;
    }

  return (
    <CategoryListItemWrapper>
    <div>
    {props.type}
    <br/>
    <LimiterWrapper
        src={limiter_icon}
    />
    
    </div>

    {getProducts()}
    <br/>
    </CategoryListItemWrapper>
  );
};

const CategoryListItemWrapper = styled.div`    width: 100%;`;
const LimiterWrapper = styled.img`
    &&{
        position:relative
        width: 272px;
        height: 6px;
        bottom: 20px;
        background: #000000;
        border-radius: 30px;
          
    }
`;
const ProductDummy = styled.img`    `;

export default CategoryListItem;
