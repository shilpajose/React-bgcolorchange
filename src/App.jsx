
import { useState } from 'react'
import './App.css'


const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('light');

    const redButtonClick = () => {
        setBackgroundColor('red'); 
    };

    const greenButtonClick = () => {
        setBackgroundColor('green'); 
    };

    const orangeButtonClick = () => {
        setBackgroundColor('orange'); 
    };

    const blueButtonClick = () => {
        setBackgroundColor('blue'); 
    };



    return (
        <>
         <div className='container shadow p-5 mt-5'>
                <h2 className='text-info d-flex justify-content-center align-items-center mt-5'>Background Color Change</h2><hr />
                <div style={{backgroundColor }} className='d-flex justify-content-center align-items-center shadow p-5'>
    
                    <div>
                        <button onClick={redButtonClick} className='btn btn-danger'>Red</button>
    
                    </div>
                    <div>
                        <button onClick={greenButtonClick} className='btn btn-success ms-2'>Green</button>
    
                    </div>
                    <div>
                        <button onClick={orangeButtonClick} className='btn btn-warning ms-2'>Orange</button>
    
                    </div>
                    <div>
                        <button onClick={blueButtonClick} className='btn btn-primary ms-2'>Blue</button>
    
                    </div>
                </div>
         </div>
        </>
    )
}

export default App
