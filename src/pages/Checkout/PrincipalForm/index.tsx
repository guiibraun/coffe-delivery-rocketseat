import { useFormContext } from "react-hook-form"

import * as C from "./styles"

export function PrincipalForm(){
   const {register} = useFormContext()

   return (
      <>
         <C.Cep>
            <C.InputText type="text" placeholder='CEP' {...register('cep', { valueAsNumber: true })} />
         </C.Cep>

         <C.InputText type="text" placeholder='RUA' {...register('street')} />

         <C.AdressTwoColumns>
            <C.InputText type="text" placeholder='NÚMERO' {...register('number')} />
            <C.InputText type="text" placeholder='BAIRRO' {...register('neighborhood')} />
         </C.AdressTwoColumns>

         <C.AdressThreeColumns>
            <C.InputText type="text" placeholder='CIDADE' {...register('city')} />
            <C.InputText type="text" placeholder='UF' {...register('state')} />
         </C.AdressThreeColumns>
      </>
   )
}