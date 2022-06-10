import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import styles from "./Settings.module.css";


const Settings: Component = () => {

  const characters: {[key: string]: string[];} = {
    "Bowser": ["bowser-black.png", "bowser-blue.png", "bowser-green.png", "bowser-red.png"],
    "Donkey Kong": ["dk-default.png", "dk-blue.png", "dk-green.png", "dk-black.png", "dk-red.png"],
    "Dr. Mario": ["doc-black.png", "doc-blue.png", "doc-green.png", "doc-default.png", "doc-red.png"],
    "Falco": ["falco-blue.png", "falco-green.png", "falco-default.png", "falco-red.png"],
    "Captain Falcon": ["falcon-black.png", "falcon-blue.png", "falcon-green.png", "falcon-default.png", "falcon-red.png", "falcon-white.png"],
    "Fox": ["fox-blue.png", "fox-green.png", "fox-default.png", "fox-red.png"],
    "Mr. Game & Watch": ["G&W-blue.png", "G&W-green.png", "G&W-default.png", "G&W-red.png"],
    "Ganondorf": ["ganon-blue.png", "ganon-green.png", "ganon-default.png", "ganon-purple.png", "ganon-red.png"],
    "Ice Climbers": ["ICs-green.png", "ICs-orange.png", "ICs-default.png", "ICs-red.png"],
    "Jigglypuff": ["puff-blue.png", "puff-crown.png", "puff-green.png", "puff-default.png", "puff-red.png"],
    "Kirby": ["kirby-blue.png", "kirby-green.png", "kirby-default.png", "kirby-red.png", "kirby-white.png", "kirby-yellow.png"],
    "Link": ["link-black.png", "link-blue.png", "link-green.png", "link-red.png", "link-white.png"],
    "Luigi": ["luigi-blue.png", "luigi-green.png", "luigi-red.png", "luigi-white.png"],
    "Mario": ["mario-black.png", "mario-blue.png", "mario-green.png", "mario-red.png", "mario-yellow.png"],
    "Marth": ["marth-black.png", "marth-green.png", "marth-default.png", "marth-red.png", "marth-white.png"],
    "Mewtwo": ["mewtwo-blue.png", "mewtwo-green.png", "mewtwo-default.png", "mewtwo-red.png"],
     "Ness": ["ness-blue.png", "ness-green.png", "ness-default.png", "ness-yellow.png"],
     "Peach": ["peach-blue.png", "peach-daisy.png", "peach-green.png", "peach-default.png", "peach-white.png"],
     "Pichu": ["pichu-blue.png", "pichu-green.png", "pichu-default.png", "pichu-red.png"],
     "Pikachu": ["pikachu-blue.png", "pikachu-green.png", "pikachu-default.png", "pikachu-red.png"],
     "Roy": ["roy-blue.png", "roy-yellow.png", "roy-green.png", "roy-default.png", "roy-red.png"],
     "Samus": ["samus-red.png", "samus-pink.png", "samus-blue.png", "samus-green.png", "samus-black.png"],
     "Sheik": ["sheik-black.png", "sheik-blue.png", "sheik-green.png", "sheik-default.png", "sheik-red.png"],
     "Yoshi": ["yoshi-blue.png", "yoshi-light blue.png", "yoshi-green.png", "yoshi-pink.png", "yoshi-amsa.png", "yoshi-yellow.png"],
     "Young Link": ["young link-black.png", "young link-blue.png", "young link-default.png", "young link-red.png", "young link-white.png"],
     "Zelda": ["zelda-blue.png", "zelda-green.png", "zelda-default.png", "zelda-red.png", "zelda-white.png"]
  };
  const [character1, setCharacter1] = createSignal("Fox");
  const [character2, setCharacter2] = createSignal("Falco");
  const [commNum, setComm] = createSignal(0);
  function createCasters() {
    var inputs = [];
    for(var i = 0; i < commNum(); i++) {
        inputs.push(
            <>
            <input type="radio"/>Twitch
            <input type="radio"/>Twitter
            <input type="radio"/>None
            <input type="text" id={i.toString()} placeholder="Caster Name"/>
            <br/>
            </>
        );
    }
    return <div>{inputs}</div>;
  }
  function handleCharacter1(e: any) {
    setCharacter1(e.target.value);
  }
  function handleCharacter2(e: any) {
    setCharacter2(e.target.value);
  }
  function handleComm(e: any) {
    setComm(e.target.value);
  }
  const [game, setGame] = createSignal(10); 
  return (
    <>
    <div class={styles.app}>
        <div class={styles.title}>
        <h1>Overlay Control</h1>
        </div>
		<div class={styles.match_settings}>
        <h2>Match Settings</h2>
            <input type="text" id="match" placeholder="Match Title"/> { /* Current Match Title */ }
            <div>
            <input type="radio" id="bo3" value="BO3"/>BO3
            <input type="radio" id="bo5" value="BO5"/>BO5
            </div>
            { /*
                There should always be one bubble present (color image, gray circle)
                If someone won, let the TO update with left or right color
                Mistake: Allow them to click the image and update stage / winning color
                Must determine score from this
            */ }
        </div>
        <div class={styles.player1_settings}>
        <h2>Player 1 Settings</h2>
            <div>
            <input type="text" id="name1" placeholder="Player 1 Name"/> { /* Name */ }
            <input type="checkbox" id="loser1"/>Loser's Side
            </div>
            <div>
            <input type="radio" id="p1_1" value="#F15959"/>
            <input type="radio" id="p1_2" value="#6565FF"/>
            <input type="radio" id="p1_3" value="#FEBE3F"/>
            <input type="radio" id="p1_4" value="#4CE44C"/>
            </div>
            <select id="p1_char" onChange={handleCharacter1} value={character1()}>
                {Object.keys(characters).map((character) =>
                    <option value={character}>{character}</option>
                )} 
            </select>
            <div>
            {characters[character1()].map((colorChoice: string) =>
                <>
                    <input type="radio" value={colorChoice}/>
                    <img src={colorChoice} alt={colorChoice}/>
                </>
            )}
            </div>
        </div>
        <div class={styles.player2_settings}>
        <h2> Player 2 Settings</h2>
            <div>
            <input type="text" id="name2" placeholder="Player 2 Name"/> { /* Name */ }
            <input type="checkbox" id="loser2"/>Loser's Side
            </div>
            <div>
            <input type="radio" id="p2_1" value="#F15959"/>
            <input type="radio" id="p2_2" value="#6565FF"/>
            <input type="radio" id="p2_3" value="#FEBE3F"/>
            <input type="radio" id="p2_4" value="#4CE44C"/>
            </div>
            <select id="p2_char" onChange={handleCharacter2} value={character2()}>
                {Object.keys(characters).map((character) =>
                    <option value={character}>{character}</option>
                )} 
            </select>
            <div>
            {characters[character2()].map((colorChoice: string) =>
                <>
                    <input type="radio" value={colorChoice}/>
                    <img src={colorChoice} alt={colorChoice}/>
                </>
            )}
            </div>
        </div>
        <div class={styles.commentator_settings}>
        <h2>Commentators</h2>
            <input type="number" id="comm-number" min="0" max="3" value={commNum()} onChange={handleComm}/>
            {createCasters}
        </div>
        <div class={styles.logos}>
        <h2>Logos</h2>
        </div>
        <div class={styles.submit}>
            <button>UPDATE</button>
        </div>
    </div>
    </>
  );
};

export default Settings;
