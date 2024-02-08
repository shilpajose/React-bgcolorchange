
import { useState } from 'react'
import './App.css'


const App = () => {
  // State to store the background color
  const [backgroundColor, setBackgroundColor] = useState('light');

  // Event handler for button click
  const redButtonClick = () => {
      // Change the background color to a new value
      setBackgroundColor('red'); // You can set any color you want here
  };

  const greenButtonClick = () => {
      setBackgroundColor('green'); // You can set any color you want here
  };

  const orangeButtonClick = () => {
      setBackgroundColor('orange'); // You can set any color you want here
  };

  const blueButtonClick = () => {
      setBackgroundColor('blue'); // You can set any color you want here
  };



  return (
    <>
          <div style={{ backgroundColor, padding: '20px' }} className='d-flex justify-content-center align-items-center shadow   mt-5 p-5'>
            <h2 className='text-info me-2'>Background Change Color</h2><br /><br /><br />
            <div>
                <button onClick={redButtonClick} className='btn btn-danger'>Red</button>
                <button onClick={greenButtonClick} className='btn btn-success ms-2'>Green</button>
                <button onClick={orangeButtonClick} className='btn btn-warning ms-2'>Orange</button>
                <button onClick={blueButtonClick} className='btn btn-primary ms-2'>Blue</button>
            </div>
        </div>
    </>
  )
}

export default App
