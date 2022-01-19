import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
    return (
        <Flex>
            <div className="nav">
                <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" />
                <a
                    href="/"
                    class="MainBar_MainBar_logo__bGymr"
                    aria-label="homeLink"
                    data-attribute-id="gnb"
                    data-gnb-kind="home"
                >
                    <i class="icon-logo_new"></i>
                </a>
            </div>
        </Flex>
    )
}

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .nav {
        width: 1060px;
        height: 50px;
        background-color: #ddd;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 17px;
            height: 14px;
            object-fit: contain;
            padding-right: 1rem;
        }

        a {
            font-family: 'icomoon';
        }
    }
`

export default Header
