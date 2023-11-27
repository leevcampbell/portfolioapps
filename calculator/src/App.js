import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonHolder from './components/ButtonHolder';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';




const buttonValues = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

function App() {
  return (
    <CalcProvider>
      <h1>Calculator App</h1>
      <Wrapper> 
          <Screen />
          <ButtonHolder>

            {buttonValues.flat().map((value, index) => (
              <Button key={index} value={value} />
            ))}

          </ButtonHolder>
      </Wrapper>
    </CalcProvider>
    
  );
}

export default App;
