import { Routes, Route, Link } from 'solid-app-router';
import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import styles from "./App.module.css";

import Overlay from './Overlay';
import Settings from './Settings';

const App: Component = () => {
  const [game, setGame] = createSignal({
   "title": "Match Title",
   "bestof": 3,
   "maps": [],
   "p1_name": "Player 1",
   "p1_loser": false,
   "p1_color": "#F15959",
   "character": "Fox",
   "p1_skin": "./static/fox.png",
   "p2_name": "Player 2",
   "p2_loser": true,
   "p2_color": "#6564FF",
   "character": "Falco",
   "p2_skin": "./static/falco.png"
  });
  return (
    <>
    <Routes>
    <Route path="/settings" element={<Settings gameRet={setGame()}/>}/>
    <Route path="/overlay" element={<Overlay display={game()}/>}/>
    </Routes>
    </>
  );
};

export default App;
