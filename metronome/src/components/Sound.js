import React, {useState, useEffect} from 'react';


const Sound = () => {
    let [volume, setVolume] = useState(300);
    
    let myIntervalId;
    
    const changeVolume = (evt) => 
    {   
        clearInterval(myIntervalId);
        setVolume(evt.target.value);
        // console.log(volume);
    }

    useEffect(() => {
        // playSound();
    }, [volume])


    const play = () => {
        
        let newSound = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0012.mp3")
        newSound.play();
        console.log(volume);
        
    }

    let playSound = () => { 
        myIntervalId = setInterval(
    // function(){
    //     let newSound = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0012.mp3")
    //     newSound.play();
    //     console.log(volume);
    // }
        play, volume)}


    return(
        <>
            <input type="range" name="bpm" max="1000" min="100" step="100" onChange={changeVolume}  value={volume} /><br></br>
            <datalist id="data">
                <option value="0"></option>
                <option value="100"></option>
                <option value="200"></option>
                <option value="300"></option>
                <option value="400"></option>
                <option value="500"></option>
                <option value="600"></option>
                <option value="700"></option>
                <option value="800"></option>
                <option value="900"></option>
                <option value="1000"></option>
            </datalist>
            <label><b>Beats Per Minute</b></label><br></br>
            <button onClick={playSound}><b>Play</b></button>
        </>
    )
}

export default Sound;