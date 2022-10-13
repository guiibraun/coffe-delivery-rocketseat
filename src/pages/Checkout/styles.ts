import styled from 'styled-components'

export const CheckoutContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 448px;
   gap: 2rem;
   & > div {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
   }

   h2 {
      font-family: 'Baloo 2', sans-serif;
   }
`

export const CardContainer = styled.div`
   background: ${props => props.theme['base-card']};
   min-height: 20rem;
   padding: 2rem;
   border-radius: 8px;

`

export const DeliveryInfo = styled.div`
   display: flex;
   align-items: center;
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

export const FormPrimary = styled.div``

export const FormCheckout = styled.form`
   margin-top: 1.5rem;
`

