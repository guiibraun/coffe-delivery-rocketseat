import styled from "styled-components"

export const Informations = styled.div`
    border: 1px solid ${props => props.theme["purple-dark"]};
    border-radius: 6px 36px;
    padding: 2rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    width: 100%;
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
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
export const InfoText = styled.div``