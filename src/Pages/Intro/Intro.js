import React, { useEffect } from 'react'
import anime from "animejs/lib/anime.es.js"
import './Intro.css'

export default function Intro() {
  let columns = Math.floor(document.body.clientWidth / 50),
      rows = Math.floor(document.body.clientHeight / 50)

  let wrapper
  let toggled = false

  const handleOnClick = index => {
    if (!toggled) {
      anime({
        targets: ".tile",
        opacity: toggled ? 1 : 0,
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: index
        })
      })
      document.body.classList.toggle("toggled")
    }
    toggled = true
  }

  const createTile = index => {
    const tile = document.createElement("div")

    tile.classList.add("tile")
    
    tile.addEventListener("click", e => {handleOnClick(index)})

    return tile
  }

  const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index))
    })
  }
  
  const createGrid = () => {
    if (toggled) { 
      document.body.classList.toggle("toggled")
    }

    toggled = false

    wrapper = document.getElementById('tiles')
    
    wrapper.innerHTML = ""

    columns = Math.floor(document.body.clientWidth / 50)
    rows = Math.floor(document.body.clientHeight / 50)

    wrapper.style.setProperty("--columns", columns)
    wrapper.style.setProperty("--rows", rows)

    createTiles(columns * rows)
  }

  if (toggled) {
    window.onresize = () => createGrid()
  }

  useEffect(() => createGrid()
  , [])
  
  return (
    <div>
      <div id='tiles'></div>
      <div id='title'>
        <h1 className='name'>Joseph Stay</h1>
        <h2 className='sub'>a portfolio</h2>
        <h3 className='sub-sub'>Click Anywhere to Enter</h3>
      </div>
    </div>
  )
}
