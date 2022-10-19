import styled from 'styled-components'

export const BaseInput = styled.input`
   background-color: ${props => props.theme['base-input']};
   
   border: 1px solid ${props => props.theme['base-button']};
   border-radius: 4px;

   padding: 1rem .5rem;

   font-size: 0.875rem;

   &::placeholder{
      color: ${props => props.theme['base-label']}
   }
`

export const InputText = styled(BaseInput)`
   width: 100%;
`
export const Cep = styled.div`
   display: flex;

   input {
      width: 70%
   }
`

export const AdressTwoColumns = styled.div`
   display: grid;
   width: auto;
   grid-template-columns: 12.5rem 1fr;
   column-gap: 1rem;
`

export const AdressThreeColumns = styled.div`
   display: grid;
   width: auto;
   grid-template-columns: 12.5rem 1fr 3.75rem;
   column-gap: 1rem;
`