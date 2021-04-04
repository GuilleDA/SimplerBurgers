import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import { CATEGORIES } from "../data/Dummy";
import CategoryListItem from "../components/CategoryListItem";

const Category = () => {


  return (
    <CategoryWrapper>
        <TitleWrapper>
            {CATEGORIES.map(name => <CategoryListItem type={name}/>)}
        </TitleWrapper>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`   
position:relative;
width: 100%;`;


const TitleWrapper = styled(Typography)`
    &&{
        position: relative;
        width: 90%;
        height: 47px;
        left: 34px;
        top: 20px;

    }
`;

export default Category;
