import { Container, Wrapper, Button } from './components'
import { useCalculator } from './useCalculator'


function App() {

  const [calculatorObject, displayValue] = useCalculator()

  return (
    <Container>
      <Wrapper>
        <div className='flex justify-center items-center p-4'>
          <h2 className='text-5xl font-bold mt-5'>Calculator</h2>
        </div>
        <div className='flex justify-end items-center p-4'>
          <span className='text-4xl font-semibold mr-5'>{displayValue}</span>
        </div>
        <div className='grid p-4 grid-cols-4 gap-5'>
          {calculatorObject.map(({ val, onClick }) => (
            <Button key={val} onClick={onClick}>{val}</Button>
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default App
