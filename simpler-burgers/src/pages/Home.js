import * as React from "react";
import styled from "styled-components";
import { Typography, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Categories from "../components/Categories";
import hamburger_icon from '../assets/hamburger.svg'

const Home = () => {


  return (
    <HomeWrapper>
        <HeaderWrapper>
            <HamburgerIcon src={hamburger_icon}/>
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
        <Categories />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`    
    width: 100%;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    height: 194px;
    left: 0px;
    top: 0px;
    background: #090000;
`;

const TitleWrapper = styled(Typography)`
    &&{ 
        width: 80%;
        height: 47px;
        padding-left: 34px;
        padding-top: 65px;
        padding-bottom: 20px;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 61px;
        margin-top: -60px;
        color: #FFFFFF;
    }
`;

const FilterWrapper = styled(TextField)`
    &&{
        width: 90%;
        height: 40px;
        left: 18px;
        background: #FFFFFF;
        box-sizing: border-box;
        border-radius: 30px;
        .MuiInputBase-root{
            height: 40px;
        }
    }
`;

const HamburgerIcon = styled.img`
    padding-left: 2%;
`

export default Home;
