import React from 'react';
import { addIcon } from '../Assets/images';
import { Button  } from "@mui/material";
import styled from "styled-components"

const Header = (props) => {
    return (
        <NAV>
            <NAVMENU>
            <a>
            <img src= {addIcon} className='logo'/>
            </a>
            </NAVMENU>
            <a>
            <Button variant="contained" className='button'>cart</Button>
            </a>

        </NAV>

    )
}

const NAV = styled.nav`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 70px;
 background-color: #F9F9F9;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 36px;
 letter-spacing: 16px;
 z-index: 3;
`;

const NAVMENU = styled.div`
 align-items: center;
 display: flex;
 flex-flow: row nowrap;
 height: 100%;
 justify-content: flex-end;
 margin: 10px;
 padding: 10px 10px;
 position: relative;
 margin-right: auto;
 margin-left: 25px;

 a{
    display: flex;
    align-items: ceter;
    padding: 10px 12px;

    span{
        color: rgb( 249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 10px 10px;
        white-space: nowrap;
        position: relative;    

    }

    &:hover {
            span:before  {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
        }
    }
}
`;
export default Header;