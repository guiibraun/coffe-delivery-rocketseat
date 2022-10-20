import { useFormContext } from "react-hook-form"

import * as C from "./styles"

export function PrincipalForm() {
   const { register } = useFormContext()

   return (
      <>
         <C.Cep>
            <C.InputText type="text" placeholder='CEP' {...register('cep', { valueAsNumber: true })} />
         </C.Cep>

         <C.InputText type="text" placeholder='Rua' {...register('street')} />

         <C.AdressTwoColumns>
            <C.InputText type="text" placeholder='Número' {...register('number')} />
            <C.InputText type="text" placeholder='Complemento' {...register('complement')} />
         </C.AdressTwoColumns>

         <C.AdressThreeColumns>
            <C.InputText type="text" placeholder='Bairro' {...register('neighborhood')} />
            <C.InputText type="text" placeholder='Cidade' {...register('city')} />
            <C.InputText type="text" placeholder='UF' {...register('state')} />
         </C.AdressThreeColumns>

      </>
   )
}