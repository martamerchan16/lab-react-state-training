import "./App.css"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Counter from "./components/Counter/Counter";
import Dice from "./components/Dice/Dice";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <LikeButton />

      <Counter />

      <ClickablePicture />
      <Dice />

    </div>
  )
}

export default App;
