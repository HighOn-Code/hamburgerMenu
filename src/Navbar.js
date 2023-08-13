import React from 'react';
import styled  from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: flex;
    justify-content: right;
    margin: 20px 50px;
    z-index: 15;
    li{
        padding: 18px;
    }
    @media (max-width: 768px) {
        margin: 0;
        flex-direction: column;
        background: #1565df;
        position: fixed;
        top:0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        li{
            color:#fff;
        }
        transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"}
    }
`
const Navbar = ({open}) => {
    return (
        <div>
            <UL open={open}>
                <li>Home</li>
                <li>Docs</li>
                <li>Buy Me A Coffee</li>
                <li>Github</li>
            </UL>
        </div>
    );
};

export default Navbar; 