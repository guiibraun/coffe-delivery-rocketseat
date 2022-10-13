import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const MainContainer = styled.div`
    display: flex;
    gap: 3.5rem;
    overflow: hidden;

    padding: 5.75rem 0;
    flex-wrap: wrap;

    img {
        max-width: 100%;
        width: auto;
        height: auto;
    }

    @media (max-width: 767px) {
        padding: 2rem 0;
    }

    @media (max-width: 1024px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;


    h2 {
        font-family: 'Baloo 2';
        font-size: 3rem;
        font-weight: 800;
        color: ${props => props.theme["base-title"]}
    }

    p {
        font-size: 1.25rem;
        line-height: 1.3;
        color: ${props => props.theme["base-subtitle"]}
    }

    @media (max-width: 767px){
        h2 {
            font-size: 1.6rem;
        }

        p {
            font-size: 1.05rem;
        }

        h2, p{
            text-align: center;
        }
    }
`

export const GridItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    gap: .5rem;
    margin-top: 3rem;

    div {
        display: flex;
        align-items: center;
        gap: .75rem;
        line-height: 1.3;
    }

    
    @media (max-width: 767px){
            grid-template-columns: 1fr;
    }
`
const ICONS_COLORS = {
    'yellow-dark': 'yellow-dark',
    'yellow': 'yellow',
    'purple': 'purple',
    'base-text': 'base-text',
} as const

interface IconsColors {
    bgColors: keyof typeof ICONS_COLORS
}

export const IconsSpan = styled.span<IconsColors>`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme[ICONS_COLORS[props.bgColors]]};
    padding: .5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
