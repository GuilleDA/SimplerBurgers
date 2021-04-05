import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import { CATEGORIES } from "../data/Dummy";
import CategoriesListItem from "./CategoriesListItem";

const Categories = () => {


  return (
    <CategoryWrapper>
        <TitleWrapper>
            {CATEGORIES.map(name => <CategoriesListItem type={name}/>)}
        </TitleWrapper>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`   

width: 100%;`;


const TitleWrapper = styled(Typography)`
    &&{
        padding-left:20px;
        

    }
`;

export default Categories;
