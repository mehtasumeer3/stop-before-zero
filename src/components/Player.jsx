import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // this will clear the input area after submitting the name.
    // Note : this should be done only if this Ref is only used in one place.
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"} </h2>
      {/* we could also write {enteredPlayerName ??"unknown Value"} this is the syntax for writing turnary expression ie ?*/}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
