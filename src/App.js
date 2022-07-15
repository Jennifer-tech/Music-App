import {useState, useEffect} from 'react';
import Player from "./components/Player";
function App() {
  const[songs, setSongs] = useState([
   {
    title:"Buga",
    artist: "Kizz Daniel Ft Tekno",
    img_src:"./images/song-1.jpg",
    src:"./music/Kizz_Daniel_ft_Tekno_-_Buga.mp3"
   },
   {
    title:"Sugarcane Remix",
    artist:"Mayorkun Ft King Promise Camidoh Darkoo",
    img_src:"./images/song-2.jpg",
    src:"./music/Mayorkun-Sugarcane-Remix-Ft-King-Promise-Camidoh-Darkoo-(TrendyBeatz.com).mp3"
   },
   {
    title:"On_On",
    artist:"Veeiye",
    img_src:"./images/song-3.jpg",
    src:"./music/Veeiye_-_On_On.mp3"
   },
   {
    title:"N-Y-Pense Plus",
    artist:"Tayc",
    img_src:"./images/song-4.jpg",
    src:"./music/Tayc-N-Y-Pense-Plus-(TrendyBeatz.com).mp3"
   }
  ]);

  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
