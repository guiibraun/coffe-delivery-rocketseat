import styled from "styled-components";

export const Prices = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    font-size: 0.875rem;

    margin: 1rem 0 1.1rem;

    gap: 1rem;
`
export const BaseItensCheckout = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TotalItensPrice = styled(BaseItensCheckout)`
    font-weight: bold;
    font-size: 1.25rem;
`