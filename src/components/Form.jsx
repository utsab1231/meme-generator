import { useState, useEffect } from "react";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemes(data.data.memes);
      } catch (err) {
        console.log(err);
      }
    }
    getMemes();
  }, []);

  function getMemeImage() {
    console.log("clicked");
    if (allMemes.length === 0) {
      return;
    }
    console.log(allMemes);
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const randomUrl = allMemes[randomNum].url;
    setMeme((prevState) => ({ ...prevState, randomImage: randomUrl }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <section className="form">
      <div className="form--input">
        <input
          type="text"
          placeholder="write something for upper-part"
          id="form--input--upper"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="write something for lower-part"
          id="form--input--lower"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>

      <button className="form--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
