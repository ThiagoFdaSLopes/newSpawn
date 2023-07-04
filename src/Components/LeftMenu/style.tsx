import styled from "styled-components";

type Props = {
    color: string
}

export const LeftMenuComponent = styled.section<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35vw;
    height: 100vh;
    /* background-color: ${(props) => props.color}; */
`

export const InfoPersonMenu = styled.section`
    width: 35rem;
    height: 35rem;
    margin-bottom: 5rem;
    /* background-color: #fcf084; */
`

export const ButtonSelectComponent = styled.button`
    width: 20rem;
    height: 4rem;
    background-color: yellow;
    border: none;
`