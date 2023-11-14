import React from 'react'
import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'


const getStyleName = button => {
   
    const className = {
        '=': 'equals',
        '*': 'opt',
        '/': 'opt',
        '+': 'opt',
        '-': 'opt',
    }
    return className[button] 
}

const Button = ({value}) => {

    
   const {calc, setCalc} = useContext(CalcContext);
   console.log(setCalc)

    // User click comma
    const commaClick = () => {
      setCalc({
        ...calc,
        num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
      })
    }

    // User click reset
    const resetClick = () => {
      setCalc({ sign: '', num: 0, res: 0 })
    }


    const handleClick = () => {
        console.log(value)
        const results = {
            '.': commaClick,
            'AC': resetClick
        }
        return results[value]()
        
    }
  return (
    <button onClick={handleClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button