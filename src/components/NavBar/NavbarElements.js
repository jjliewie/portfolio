import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`

    font-size: 15px;
    padding: 13px 15px;
    color: #3a3b3c;
    cursor: pointer;
    text-decoration: none;
    border-radius: 100px;
    outline-style: solid;
    outline-width: 2px;
    outline-color: #3a3b3c;
    margin: 15% 25px;
    font-weight: 900;

    @media screen and (max-width: 700px) {
        margin: 15% 12px;
    }

`;

export const NavLogo = styled(Link)`

    font-size: 50px;
    color: #3a3b3c;
    position: absolute;
    // margin-left: 10%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

    top: 65px;
    left: 10%;

    @media screen and (max-width: 700px) {
        top: 52px;
    }

    &:hover{
        color:#656565;
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }

`

export const NavMenu = styled.div`

    margin: 0 auto;
    margin-right: 10%;
    display: flex;
    align-items: center;
    place-content: center;

    @media screen and (max-width: 800px) {
        margin-right: 7%;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }

`

export const Nav = styled.nav`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 12;
    top: 0;
    position: absolute;
`;