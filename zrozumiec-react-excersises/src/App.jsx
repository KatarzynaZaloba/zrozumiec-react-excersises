import {useState} from "react";

function App() {
    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(50);

    function handleShownSpoilerClick() {
        setIsSpoilerShown(true);
        console.log("handleClick!");
        setIsWarningShown(false);
    }

    function handleCloseWarningClick() {
        setIsWarningShown(false);
    }

    function handleLikeButtonClick() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 1);
    }

    return (
        <>
            <h1>
                Gwiezdne wojny V
            </h1>
            <h2>
                Rok produkcji: 1980
            </h2>
            <h2>
                Liczba polubień: {numberOfLikes}
            </h2>
            <button onClick={handleLikeButtonClick}>Lubię to!</button>
            <button onClick={() => {
                setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 3);
            }}>Kocham to!
            </button>
            <h2>
                Fabuła
            </h2>
            {isWarningShown && (
                <p>
                    Uwaga! Opis fabuły zawiera spoilery!
                    <button onClick={handleCloseWarningClick}>x</button>
                </p>
            )}
            <p>
                Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.
            </p>

            {isSpoilerShown ? (
                <p> Vader okazuje się być ojcem Luka.</p>
            ) : (
                <button onClick={handleShownSpoilerClick}>
                    Pokaż spoiler
                </button>
            )}
        </>
    );
}

export default App;