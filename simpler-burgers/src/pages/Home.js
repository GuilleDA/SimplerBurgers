import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import  CATEGORIES  from "../data/Dummy";
import Category from "../components/Category";

const Home = () => {


  return (
    <HomeWrapper>
        <HeaderWrapper>
            <TitleWrapper>Store 0001</TitleWrapper>
            <FilterWrapper 
                variant="outlined"
                placeholder="Search" 
                InputProps={{
                    startAdornment:(
                                    <InputAdornment position="start">
                                        <IconButton >
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>)
            }}> 
            </FilterWrapper>
        </HeaderWrapper>
        <Category />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`    position:relative
width: 100%;`;

const HeaderWrapper = styled.div`

    width: 100%;
    height: 194px;
    left: 0px;
    top: 0px;
    background: #090000;
`;

const TitleWrapper = styled(Typography)`
    &&{
        position: absolute;
        width: 90%;
        height: 47px;
        left: 34px;
        top: 65px;

        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 61px;

        color: #FFFFFF;
    }
`;

const FilterWrapper = styled(TextField)`
    &&{
        position: absolute;
        width: 90%;
        height: 40px;
        left: 18px;
        top: 130px;
        background: #FFFFFF;
        box-sizing: border-box;
        border-radius: 30px;
        .MuiInputBase-root{
            height: 40px;
        }
    }
`;

export default Home;
