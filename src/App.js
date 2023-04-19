import React, { useState } from 'react';
import starDog from './star_dog_background.png';
import Typewriter from 'typewriter-effect';

const DEFAULT_ENTRY = `<span>Dear Diary,<br /><br />
Today I begin my journey. Let this journal be a record of my travels, and a place where I can share my thoughts and feelings with you. The stars and my eyes hold the information you seek.
<br /><br />
Let them be your guide on this journey as I explore the universe and discover the meaning of life.
<br /><br />
With love and affection,<br /><br/>
Your faithful friend,<br /><br/>
Snoops</span>
`
const ENTRY_1 = `<span>Entry #1: Planet Verdesia
<br/><br/>
Dear Diary,
<br/><br/>Today, I landed on a planet called Verdesia. The grass was green as far as the eye could see, and the sky was a bright shade of blue. The sun shone down on me, warming my fur, as I took in the sweet scent of the flowers. It was a beautiful planet, but I knew there were more smells to explore.</span>`

const ENTRY_2 = `<span>Entry #2: Planet Aromia
<br/><br/>
Dear Diary,
<br/><br/>I have just visited a planet called Aromia. Everywhere I went, I was surrounded by the most incredible smells. There were flowers that smelled like fruit, and fruits that smelled like flowers. Even the rocks had a unique aroma. The sky was pink and purple, and there were three moons in the distance.</span>`

const ENTRY_3 = `<span>Entry #3: Planet Lavendria
<br/><br/>
Dear Diary,
<br/><br/>I just landed on a planet called Lavendria. The entire planet was covered in fields of lavender, and the air was filled with the sweet smell of the flowers. The sky was a deep shade of purple, and there were two suns in the sky, casting a warm glow over everything.</span>`

const ENTRY_4 = `<span>Entry #4: Planet Oceanus
<br/><br/>
Dear Diary,
<br/><br/>Today, I explored a watery planet called Oceanus. The water was crystal clear and smelled of salt and fish. There were colorful fish swimming all around me, and I even saw a few dolphins jumping in the distance. The sky was a pale blue, and there was one large moon that hung low in the sky.</span>`

const ENTRY_5 = `<span>Entry #5: Planet Redrock
<br/><br/>
Dear Diary,
<br/><br/>I have just visited a planet called Redrock. The ground was covered in red sand, and there were towering mountains of red rock in the distance. The sky was a deep red, and there was a bright orange sun that beat down on me. The air smelled of dust and minerals.</span>`

const ENTRY_6 = `<span>Entry #6: Planet Citronia
<br/><br/>
Dear Diary,
<br/><br/>I just landed on a planet called Citronia. Everywhere I went, there were trees filled with the most delicious smelling citrus fruits. The sky was a bright yellow, and there were three small moons that danced in the sky. The air smelled of oranges, lemons, and limes.</span>`

const ENTRY_7 = `<span>Entry #7: Planet Cherryblossom
<br/><br/>
Dear Diary,
<br/><br/>Today, I explored a planet called Cherryblossom. The trees were covered in pink flowers that smelled sweet and delicate. The sky was a light pink, and there was a single sun that shone down on me. The air smelled of flowers and pollen.</span>`

const ENTRY_8 = `<span>Entry #8: Planet Cinnamonia
<br/><br/>
Dear Diary,
<br/><br/>I have just visited a planet called Cinnamonia. The ground was covered in cinnamon sticks, and there were cinnamon trees as far as the eye could see. The sky was a deep brown, and there were two suns in the sky that gave off a warm glow. The air smelled of cinnamon and sugar.</span>`

const ENTRY_9 = `<span>Entry #9: Planet Mintara
<br/><br/>
Dear Diary,
<br/><br/>I just landed on a planet called Mintara. The ground was covered in mint leaves, and there were mint bushes as far as the eye could see. The sky was a light green, and there were four small moons that shone down on me. The air smelled of mint and herbs.</span>`

const ENTRY_10 = `<span>Entry #10: Planet Vanilla
<br/><br/>
Dear Diary,
<br/><br/>Today, I explored a planet called Vanilla. The ground was covered in vanilla beans, and there were vanilla orchids as far as the eye could see. The sky was a creamy white, and there was a single sun that shone down on me. The air smelled of vanilla and sugar.</span>`

const FINAL_ENTRY = `<span>
Final Entry: The Meaning of Life
<br/><br/>
Dear Diary,
<br/><br/>
I have traveled the universe, and I have smelled some of the most amazing scents in existence. But as I sit here on this final planet, looking out at the endless expanse of space, I can't help but wonder what it all means.
<br/><br/>
What is the purpose of my journey? Is it simply to seek out new smells, or is there something more profound that I am missing?
<br/><br/>
As I contemplate these questions, I am reminded of all the wonderful experiences I've had along the way. Each planet had its own unique scents, and the beauty of each landscape was breathtaking.
<br/><br/>
But now, as I reach the end of my journey, I realize that the true meaning of life is not just about seeking out new experiences or sensations. It's about cherishing the moments we have and the people we share them with.
<br/><br/>
I may have smelled some of the most amazing scents in the universe, but the memories I've made with my loved ones are the most precious treasures of all.
<br/><br/>
So, as I head back home, I am filled with a renewed appreciation for the simple things in life: the warmth of the sun on my fur, the wag of a tail from a friend, and the love that surrounds us all.
<br/><br/>
Until next time,<br/><br/>
Your faithful friend,<br/><br/>
Snoops
</span>`

const Positions = [
  {xPosition: 45.22, yPosition: 30.4},
  {xPosition: 18.36, yPosition: 62.6},
  {xPosition: 77.58, yPosition: 59.14},
  {xPosition: 91.2, yPosition: 53.42},
  {xPosition: 84.42, yPosition: 34.91},
  {xPosition: 79.53, yPosition: 24.6},
  {xPosition: 39.88, yPosition: 1.96},
  {xPosition: 27.69, yPosition: 11.89},
  {xPosition: 96.69, yPosition: 90.59},
  {xPosition: 73.21, yPosition: 4.51},
  { xPosition: 45.45, yPosition: 30.25}
]

const TEXT_ENTRIES = [
  ENTRY_1,
  ENTRY_2,
  ENTRY_3,
  ENTRY_4,
  ENTRY_5,
  ENTRY_6,
  ENTRY_7,
  ENTRY_8,
  ENTRY_9,
  ENTRY_10,
  FINAL_ENTRY
]
function App() {
  const [currentEntry, setCurrentEntry] = useState(DEFAULT_ENTRY);
  function getClickPosition(event) {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = event.target;
    const xPosition = Math.round((clientX / offsetWidth) * 10000)/100;
    const yPosition = Math.round((clientY / offsetHeight) * 10000)/100;
    console.log({ xPosition, yPosition })

    let matchedPosition = Positions.forEach((position, index) => {
      const xDiff = Math.abs(position.xPosition - xPosition);
      const yDiff = Math.abs(position.yPosition - yPosition);

      if(xDiff < 2 && yDiff < 2) {
        setCurrentEntry(TEXT_ENTRIES[index])
      }
    })
    return { xPosition, yPosition };
  }

  return (
    <div style={{
      backgroundColor: 'black',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <img src={starDog} alt="star dog" style={{height:'100vh'}} onClick={getClickPosition}/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        padding: '20px',
      }}>
      <Typewriter
  options={{
    strings: currentEntry,
    autoStart: true,
    // loop: true,
  }}
/>
      </div>
    </div>
  )
}

export default App;
