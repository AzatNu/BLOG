import styled from "styled-components";
import { StyledControlPanel } from "./control-panel";
import { Link } from "react-router-dom";
const Logo = styled.div`
    display: flex;
    width: 110px;
    height: 110px;
    text-align: center;
    font-size: 60px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    background-color: rgba(255, 255, 0, 0.5);
    margin: 0 20px;
     &:hover {    background-color: yellow;
     animation: scale 1s infinite;
        @keyframes scale {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
            100% {
                transform: scale(1);
            }
        }
    }
    > * {
       color: green;
       text-decoration: none;
        }
    }

`;
const H2 = styled.h2`
    display: flex;
    margin: 0;
    width: 250px;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: green;
    > * {
        color: black;
        text-decoration: none;
    }
`;

const Description = styled.div``;
const Header = ({ className }) => (
    <div className={className}>
        <Logo>
            <Link to="/">
                <i class="fa fa-pagelines" aria-hidden="true"></i>
            </Link>
        </Logo>
        <H2>
            <Link to="/">
                Блог о <br />
                сельском хозяйстве
            </Link>
        </H2>
        <Description></Description>
        <StyledControlPanel />
    </div>
);

export const StyledHeader = styled(Header)`
    display: flex;
    width: 1000px;
    height: 120px;
    background-image: linear-gradient(to bottom, #76da81, azure);
    align-items: center;
    font-size: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    position: fixed;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    margin: 0 auto;
    > *:last-child {
        margin-left: auto;
    }
    z-index: 0;
`;
