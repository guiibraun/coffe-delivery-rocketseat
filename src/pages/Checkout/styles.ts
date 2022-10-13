import styled from 'styled-components'

export const CheckoutContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 448px;
   gap: 2rem;

   & > div {
      
   }

   h2 {
      font-family: 'Baloo 2', sans-serif;
   }
`

export const CardContainer = styled.div`
   background: ${props => props.theme['base-card']};
   min-height: 20rem;
   padding: 2rem;
`