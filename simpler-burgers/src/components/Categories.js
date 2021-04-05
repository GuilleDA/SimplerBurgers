import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import { CATEGORIES } from "../data/Dummy";
import CategoriesListItem from "./CategoriesListItem";
import lastOrders from '../assets/lastOrders.svg'
import { useHistory } from "react-router";
import { routeTo } from '../util/RoutesHelper';

const Categories = () => {
  
  const history = useHistory();

  const handleProductItemClick = () => {
    routeTo.product(history, )
}

  return (
    <CategoryWrapper>
        <LastOrdersWrapper>
          <LastOrdersTitleWrapper>Your last orders</LastOrdersTitleWrapper>
          <LastOrders src={lastOrders} onClick={handleProductItemClick} />
        </LastOrdersWrapper>
        <TitleWrapper>
            {CATEGORIES.map(name => <CategoriesListItem type={name} />)}
        </TitleWrapper>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`   
  width: 100%;
`;


const TitleWrapper = styled(Typography)`
    &&{
        padding-left:20px;
    }
`;


const LastOrdersWrapper = styled.div`   
  width: 100%;
`;


const LastOrdersTitleWrapper = styled(Typography)`
    &&{
        padding-top: 10px;
        padding-left: 20px;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 41px;
    }
`;

const LastOrders = styled.img`   
    padding-left: 5%;
    width: 95%;
`;

export default Categories;
