/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import React, { useEffect, useState } from 'react'

export const CalculatorApp = () => {
	const value = 0
	const [input, setInput] = useState(value)

	useEffect(() => {
		
	}, [])
	


	const handleAdd = (n) => {
		if (input == 0) {
			setInput(n)
		}else {
			setInput(input + n)
		}
	}
	const handleSubtract = () => {
		if (input == 0) {
			setInput(value)
		} else {
			setInput(input.substr(0, input.length - 1));
		}
	}
	const handleReset = (value) =>{
        setInput(value);
    }
	
	const operators = (n) => {
		if (input.slice(-1) == n) {
		} else {
			handleAdd(n)
		}
	}

	const handleResult = () => {
		setInput(eval(input).toString())
	}

  return (
    <div className='main__bg'>
        <div className='main__container'>
			<div className='main__container-theme'>
				<div>
					<p>calc</p>
				</div>
				<div className='container__theme'>
					<p>THEME</p>
					<div className='container__switch'>
						<input type='checkbox' className='input' onClick={ () =>{
							document.body.classList.toggle('light')
						}
						}/>
					</div>
				</div>
			</div>
			<div className='main__container-input'>
				
				<input 
					className='input' 
					id='input'
					value={input}
					disabled
				>
				</input>
			</div>
			<div className='main__container-keys'>
				<div className='container__keys'>

					<div className='button__container'>
						<button type='button'
								value='7' 
								className='numbers btn' 
								onClick={() => handleAdd('7')}
						>
							7
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='8' 
								className='numbers btn'
								onClick={() => handleAdd('8')}
						>
							8
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='9' 
								className='numbers btn'
								onClick={() => handleAdd('9')}
						>
							9
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='DEL' 
								className='del btn'
								onClick={handleSubtract}
						>	DEL
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='4' 
								className='numbers btn'
								onClick={() => handleAdd('4')}
						>
							4
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='5' 
								className='numbers btn'
								onClick={() => handleAdd('5')}
						>
							5
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='6' 
								className='numbers btn'
								onClick={() => handleAdd('6')}
						>
							6
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='+' 
								className='numbers btn'
								onClick={() => operators('+')}
						>
							+
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='1' 
								className='numbers btn'
								onClick={() => handleAdd('1')}
						>
							1
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='2' 
								className='numbers btn'
								onClick={() => handleAdd('2')}
						>
							2
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='3' 
								className='numbers btn'
								onClick={() => handleAdd('3')}
						>
							3
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='-' 
								className='numbers btn'
								onClick={() => operators('-')}
						>
							-
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='.' 
								className='numbers btn'
								onClick={() => handleAdd('.')}
						>
							.
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='0' 
								className='numbers btn'
								onClick={() => handleAdd('0')}
						>
							0
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='/' 
								className='numbers btn'
								onClick={() => operators('/')}
						>
							/
						</button>
					</div>
					<div className='button__container'>
						<button type='button'
								value='x' 
								className='numbers btn'
								onClick={() => operators('*')}
						>
							x
						</button>
					</div>
					<div className='button__container reset'>
						<button type='button'
								value='RESET' 
								className='del btn'
								onClick={() => handleReset(0)}
								
						>
							RESET
						</button>
					</div>
					<div className='button__container igual'>
						<button type='button'
								value='=' 
								className='equal btn'
								onClick={handleResult}
						>=
						</button>
					</div>
				</div>
			</div>
        </div>
    </div>
  )
}
