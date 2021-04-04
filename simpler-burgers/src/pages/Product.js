import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import  CATEGORIES  from "../data/Dummy";
import Category from "../components/Category";

const Product = () => {


  return (
    <ProductWrapper>
        Product
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`    position:relative
width: 100%;`;


export default Product;
