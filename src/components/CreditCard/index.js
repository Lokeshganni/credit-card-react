import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  FormContainer,
  CreditContainer,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleNumber = event => setNumber(event.target.value)
  const handleName = event => setName(event.target.value)
  return (
    <AppContainer>
      <CardContainer>
        <h1>Credit Card</h1>
        <CreditContainer data-testid="creditCard">
          <p>{number}</p>
          <p>CARDHOLDER NAME</p>
          <p>{name}</p>
        </CreditContainer>
      </CardContainer>
      <FormContainer>
        <form>
          <h1>Payment Method</h1>
          <input
            onChange={handleNumber}
            placeholder="Card Number"
            type="text"
          />
          <input
            onChange={handleName}
            placeholder="Cardholder Name"
            type="text"
          />
        </form>
      </FormContainer>
    </AppContainer>
  )
}

export default CreditCard
