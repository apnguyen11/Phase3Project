import '../App.css'
import React from 'react'

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
console.log('second light box loaded')
const images = document.querySelectorAll('img')




export default function Lightbox2() {
    images.forEach(image => {
        image.addEventListener('click', e => {
            console.log('img was clicked')
            lightbox.classList.add('active')
        })
    })
    return (
        <div>
            
        </div>
    )
}
