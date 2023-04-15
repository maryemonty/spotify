import { useEffect, useState } from "react";
import HomeCards from "./HomeCards";


const Home = () => {
    const [rock, setRock] = useState(['queen', 'beatles', 'u2', 'pink floyd', 'metallica', 'acdc', 'red hot chili peppers', 'abba'])
    const [pop, setPop] = useState(['ariana grande', 'madonna', 'beyonce', 'katy perry', 'shakira', 'bruno mars', 'micheal jackson', 'elvis presley'])
    const [hipHop, sethipHop] = useState(['eminem', 'drake' ,'50 cent' ,'nicki minaj' ,'snoop dogg' ,'dmx' ,'future' , 'ice cube'])

    useEffect(() => {
        setRock(rock[Math.floor(Math.random() * rock.length)]);
        setPop(pop[Math.floor(Math.random() * pop.length)]);
        sethipHop(hipHop[Math.floor(Math.random() * hipHop.length)]);
    }, []);
    
    return(
            <div className="p-5">
                <h1>Rock Classic</h1>
                <HomeCards artist={rock}/>
                <h1>Pop Culture</h1>
                <HomeCards artist={pop}/>
                <h1>#HipHop</h1>
                <HomeCards artist={hipHop}/>
            </div>
    )
}

export default Home