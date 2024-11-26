import HappyCat from "../assets/HappyCat.png"
//import MadCat from "../assets/AngryCat.png"
import "./Pal.css"

const Pal = () => {
    const goodMessage = ["You're doing great on your goals!", 
        "Wow, keep up the good progress!", "MEOW your progress is the cats meow :3" , 
        "PURR, good job on reaching you're goals brother", 
        "You're eating a bit much, slow it down MEOW",
        "How about you go for a walk buddy, you're behind on your goals", 
        "These goals aren't going to reach themselves, check your progress", 
        "Today is leg day at the gym !",
        "Try eating less today",
        "Try eating a bit more today than yesterday!",
        "Maybe look into ozemphic "
    ]
    const num = Math.floor(Math.random() * goodMessage.length);
    return (
        <div className="pal-container">
            <div className="speech-bubble">{goodMessage[num]}</div>
            <img src={HappyCat} className="pal-image" />
      </div>
    )
}

export default Pal