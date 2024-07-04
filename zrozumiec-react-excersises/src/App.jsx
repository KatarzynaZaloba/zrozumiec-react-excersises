import {useState} from "react";

function App() {
    const isSpoilerShownState = useState(false)

    let isSpoilerShown = isSpoilerShownState[0];
    const setIsSpoilerShown = isSpoilerShownState[1];

    function handleClick() {
        setIsSpoilerShown(true);
  }

    return (
        <>
        <h1>
            Gwiezdne wojny V
        </h1>
        <h2>
            Rok produkcji: 1980
        </h2>
        <p>
            Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.
        </p>
        <button onClick={handleClick}>
            Pokaż spoiler
        </button>
        {isSpoilerShown && <p> Vader okazuje się być ojcem Luka.</p>}
    </>
);
}

export default App;