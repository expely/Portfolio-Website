import React, { useRef, useState } from 'react'
import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from '../../Components/Popup'
import { getText } from './GetText'

export default function Cards() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [element, setElement] = useState(null)
  const [card, setCardIndex] = useState(0)

  const activeIndex = useRef(0)

  const groups = document.getElementsByClassName('card-group')

  const handleLeftClick = () => {

    const nextIndex = activeIndex.current - 1 >= 0 ? activeIndex.current - 1 : groups.length -1

    const currentGroup = document.querySelector(`[data-index="${activeIndex.current}"]`)
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)

    currentGroup.dataset.status = "before"
    
    nextGroup.dataset.status = "becoming-active-from-after"

    setTimeout(() => {
      nextGroup.dataset.status = "active"
      activeIndex.current = nextIndex
    }, 13)
    
  }

  const handleRightClick = () => {

    const nextIndex = activeIndex.current + 1 <= groups.length - 1 ? activeIndex.current + 1 : 0

    const currentGroup = document.querySelector(`[data-index="${activeIndex.current}"]`)
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)

    currentGroup.dataset.status = "after"
    
    nextGroup.dataset.status = "becoming-active-from-before"

    setTimeout(() => {
      nextGroup.dataset.status = "active"
      activeIndex.current = nextIndex
    }, 13)
  }

  function handleCardClick(e) {
    e.target.dataset.status = "active"

    const currentGroup = document.querySelector(`[data-index="${activeIndex.current}"]`)
    
    currentGroup.dataset.status = "inactive"

    setCardIndex(e.target.dataset.card)
    setElement(e.target)
    setButtonPopup(true)
  }

  return (
    <div className='card-swiper'>
      <div className='card-groups'>
        <div className='card-group' data-index="0" data-status="active">
          <div className='little-card card'>
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={0}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={1}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={2}>
            
          </div>
          <div className='little-card card'>
            
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={3}>
            
          </div>
          <h1 className="frontend">Frontend</h1>
        </div>
        <div className='card-group' data-index="1" data-status="unknown">
          <div className='little-card card'>
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={0}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={1}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={2}>
            
          </div>
          <div className='little-card card'>
            
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={3}>
            
          </div>
          <h1 className="backend">Backend</h1>
        </div>
        <div className='card-group' data-index="2" data-status="unknown">
          <div className='little-card card'>
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={0}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={1}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={2}>
            
          </div>
          <div className='little-card card'>
            
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={3}>
            
          </div>
          <h1 className="android">Android</h1>
        </div>
        <div className='card-group' data-index="3" data-status="unknown">
          <div className='little-card card'>

          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={0}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={1}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={2}>
            
          </div>
          <div className='little-card card'>
            
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={3}>
            
          </div>
          <h1 className="author">Author</h1>
        </div>
        <div className='card-group' data-index="4" data-status="unknown">
          <div className='little-card card'>

          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={0}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={1}>
            
          </div>
          <div className='little-card card'>
            
          </div>      
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={2}>
            
          </div>
          <div className='little-card card'>
            
          </div>
          <div className='big-card card' onClick={handleCardClick} data-status="inactive" data-card={3}>
            
          </div>
          <h1 className="me">ME</h1>
        </div>
      </div>
      <div className='card-swiper-buttons'>
        <button id='left-button' onClick={handleLeftClick}>
          <FontAwesomeIcon icon="fa-solid fa-angle-left"></FontAwesomeIcon>
        </button>
        <button id='love-button' onClick={handleRightClick}>
          <FontAwesomeIcon icon="fa-solid fa-angle-right"></FontAwesomeIcon>
        </button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} element={element} index={activeIndex.current}>
        {getText(activeIndex.current, card)}
      </Popup>
    </div>
  )
}
