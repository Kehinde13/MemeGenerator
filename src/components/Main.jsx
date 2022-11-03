import React from 'react'
import logo from '../images/logo.jpg'



function Main() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
     fetch("https://api.imgflip.com/get_memes")
     .then(res => res.json())
     .then(data => setAllMemes(data.data.memes))

  }, [])

  function getMemeImage() {
   const randomNumber = Math.floor(Math.random() * allMemes.length)
   const url = allMemes[randomNumber].url
     setMeme(prevMeme => ({
       ...prevMeme,
       randomImage: url
     }))
    
  }

  function handleChange(event) {
    const {name, value} = event.target
     setMeme(prevMeme => ({
       ...prevMeme,
       [name]: value
     }))    
  }

  return (
    <div className='main'>
        <div className='inputs'>
            <input 
              type="text" 
              placeholder="Top Text"
              name='topText'
              onChange={handleChange}
              value={meme.topText}
            />

            <input 
              type="text" 
              placeholder="Bottom Text"
              name='bottomText'
              onChange={handleChange}
              value={meme.bottomText}
            />
        </div>

        <div className='meme'>
           <img src={meme.randomImage} alt="" />
           <p className="toptext">{meme.topText}</p>
           <p className="bottomtext">{meme.bottomText}</p>
        </div>

        <div className="button">
            <button onClick={getMemeImage}>
                Generate a random meme
            </button>
        </div>
    </div>
  )
}

export default Main