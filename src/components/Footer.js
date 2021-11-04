import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

	const [inputValue, setInputValue] = useState('Kevin')

    function showMail(e) {
        e.preventDefault()
        alert(`Votre mail est ${inputValue}`)
        
    }


	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} type="text" 
            
            onBlur={(e) => {
                // 
                alert(`${!inputValue.includes("@") ? "marche pas" : "mail valide"}`)

            }} onChange={(e)=>
            
            {setInputValue(e.target.value)}} />

            <button onClick={showMail} >Clique ici</button>
		</footer>
	)
}

export default Footer