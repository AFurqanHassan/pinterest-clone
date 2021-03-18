import React, { useState } from 'react'
import styled from 'styled-components'
import PinterestIcon from '@material-ui/icons/Pinterest';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Face, KeyboardArrowDown, Notifications, Textsms } from '@material-ui/icons';

// props: {
//     onSubmit: onSearchSubmit()
//   }
  

function Header(props) {

    const [input, setnput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/" >Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/" >Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setnput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit} ></button>
                    </form>

                </SearchBarWrapper>
            </SearchWrapper>
            <IconWrapper>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Textsms />
                </IconButton>
                <IconButton>
                    <Face />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDown />
                </IconButton>
            </IconWrapper>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color:white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButtons = styled.div`
    display: flex;
    height: 45px;
    min-width: 123px;
    align-items: centre;
    justify-content: center;
    border-radius: 24px;
    curser: pointer;
`

const HomePageButton = styled(HomeButtons)`
    
    background-color: rgb(17, 17, 17);

    a {
        display: grid;
        place-items: center;
        text-decoration: none;
        color: white;
        font-weight: 700;
    }

`



const FollowingButton = styled(HomeButtons)`
    background-color: white;
    a {
        display: grid;
        place-items: center;
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    
    :hover {
        background-color: #e1e1e1;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background: #efefef;
    display: flex;
    height: 45px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    form {
        display: flex;
        flex: 1;
    }

    form  > input {
        background-color: transparent;
        border: none;
        width: 100%:
        margin-left: 5pxx;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }

    input:active {
        outline: none;
    }
`

const IconWrapper = styled.div``