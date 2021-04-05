import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { COMBO_TYPES } from "../data/Dummy";
import { DRINK_TYPES } from "../data/Dummy";
import limiter_icon from '../assets/limiter.svg';
import product_icon from '../assets/product.svg';
import { useHistory } from "react-router";
import { routeTo } from '../util/RoutesHelper';



const CategoriesListItem = (props) => {
    const history = useHistory();

    const handleProductItemClick = () => {
        routeTo.product(history, )
    }

    const getProducts = () => {
        let content = []
        if(props.type === "Combos"){
            COMBO_TYPES.map(x => {content.push(<ProductDummy onClick={handleProductItemClick} src={product_icon}/>)
                                         content.push(<br/>)});
        }else{
            DRINK_TYPES.map(x => {content.push(<ProductDummy onClick={handleProductItemClick} src={product_icon}/>)
                                          content.push(<br/>)});
        }
        return <div>{content}</div>;
    }

  return (
    <CategoryListItemWrapper>
        <div>
        <CategoryWrapper>{props.type}</CategoryWrapper>
        <LimiterWrapper
            src={limiter_icon}
        />
        </div>
        {getProducts()}
    </CategoryListItemWrapper>
  );
};

const CategoryListItemWrapper = styled.div`    width: 100%;`;

const LimiterWrapper = styled.img`
    &&{
       
        width: 90%;
        height: 6px;
        bottom: 20px;
        background: #000000;
        border-radius: 30px;
          
    }
`;

const ProductDummy = styled.img`
&&{
    cursor:pointer;
    padding-top:10px;
    padding-left:20px;
    width: 80%;
}`;

const CategoryWrapper = styled(Typography)`
    &&{
        margin-bottom: -20px;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 61px;
        color: #000000;
    }
`;

export default CategoriesListItem;
