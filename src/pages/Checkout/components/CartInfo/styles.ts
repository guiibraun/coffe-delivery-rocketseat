import styled from "styled-components";


export const CartInfo = styled.div`
    display: flex;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme['yellow-dark']};
    }

    h5 {
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']}
    }

    p {
        font-size: 0.875rem;
    }

    h5, p {
        font-family: 'Roboto', sans-serif;
    }
`

const ICONS_COLORS = {
    'yellow-dark': 'yellow-dark',
    'purple': 'purple',
} as const

interface IconsColors {
    colorIcon: keyof typeof ICONS_COLORS
}

export const Icon = styled.div<IconsColors>`
    svg {
        color: ${props => props.theme[ICONS_COLORS[props.colorIcon]]}
    }
`

