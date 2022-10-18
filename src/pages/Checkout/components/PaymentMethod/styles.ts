import styled from "styled-components";


export const PaymentMethodsContainer = styled.div`
    [type=radio]:checked::before,
    [type=checkbox]:checked::before {
        content: "";
        width: 14px;
        height: 14px;
        background-color: #ffa500;
        position: absolute;
        top: 2px;
        left: 2px;
    }   
`