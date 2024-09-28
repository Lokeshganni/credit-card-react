import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`
export const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled(Container)``

export const CreditContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 100%;
  background-size: cover;
  height: 40vh;
`

export const FormContainer = styled(Container)``
