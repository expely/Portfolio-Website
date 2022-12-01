import React from 'react'
import './Buttons.css'
import linkedIn from '../Images/Buttons/linkedIn.png'

export default function Buttons() {

    const handleOnClick = () => {
        navigator.clipboard.writeText('josephhstay@gmail.com');
        alert("Copied the text: josephhstay@gmail.com");
    }

  return (
    <div className='Buttons'>
        <a href='https://www.linkedin.com/in/joseph-stay-11971817b/' target='_blank'><button className='linkedIn'/></a>
        <button className='eMail' onClick={handleOnClick} />
    </div>
  )
}
