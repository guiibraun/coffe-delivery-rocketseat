import styled from 'styled-components'

export const CheckoutContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 448px;
   gap: 2rem;

   max-width: ${props => props.theme['max-width']};
   margin: 0 auto;
   
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
   padding: 2rem;
   border-radius: 8px;

   display: flex;
   flex-direction: column;
   row-gap: 1rem;

`

export const FormPrimary = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 1rem;
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
