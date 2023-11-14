import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'



const Screen = () => {
    const { calc } = useContext(CalcContext)

  return (
    <div className='screen'>0823973487</div>
  )
}

export default Screen