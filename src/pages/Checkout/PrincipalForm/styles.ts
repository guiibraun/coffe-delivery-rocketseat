import styled from 'styled-components'


export const FormPrimary = styled.div``

export const Cep = styled.div``

export const BaseInput = styled.input`
   background-color: ${props => props.theme['base-button']};
   border: 1px solid ${props => props.theme['base-input']};
   border-radius: 4px;
   padding: 1rem .5rem;
   font-size: 0.875rem;

   &::placeholder{
      color: ${props => props.theme['base-label']}
   }
`

export const InputText = styled(BaseInput)`
   
`

export const AdressTwoColumns = styled.div``

export const AdressThreeColumns = styled.div``