import styled from 'styled-components'

export const CheckoutContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 448px;
   gap: 2rem;
   
   & > div {
      display: flex;
      flex-direction: column;
   }

   h2 {
      font-family: 'Baloo 2', sans-serif;
   }

   
   @media (max-width: 767px){
      grid-template-columns: 1fr;
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

export const FormPrimary = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 1rem;
   margin-top: 1.5rem;
`

export const FormCheckout = styled.form`
   margin-top: 1.5rem;
`

export const SubmitButton = styled.button`
   background-color: ${props => props.theme['yellow']};
   border: 0;
   color: ${props => props.theme.white};

   font-weight: bold;

   padding: 0.75rem .5rem;
   width: 100%;
   border-radius: 8px;
   text-transform: uppercase;

   cursor: pointer;
`
