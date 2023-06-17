import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #222;
    color: #FFF;
    padding: 3em;
    text-align: center;
    margin-top: 2.5em;
`

export const SocialList = styled.ul`

    display: flex;
    justify-content: center;
    list-style: none;

    li{
        margin: 0 1em;
    }

    li:hover{
        color: #FFBB33;
        cursor: pointer;
    }

    svg{
        font-size: 1.5em;
    }
`
export const CopyRight = styled.p`
    
    margin-top: 2em;

    span{
        font-weight: bold;
        color: #FFBB33;
    }
`