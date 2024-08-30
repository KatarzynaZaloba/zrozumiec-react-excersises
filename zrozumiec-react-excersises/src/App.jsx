import {useState} from "react";

const initialState = {
    isSpoilerShown: false,
    isWarningShown: true,
    numberOfLikes: 50
}

function App() {
    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(50);

    const [state, setState] = useState(initialState);

    function handleShownSpoilerClick() {
        setState((prevState) => ({...prevState, isWarningShown: false, isSpoilerShown: true}));
    }

    function handleCloseWarningClick() {
        setState((prevState) => ({...prevState, isWarningShown: false}));
    }

    function handleLikeButtonClick() {
        //setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 1);
        setState((prevState) => ({...prevState, numberOfLikes: prevState.numberOfLikes + 1}));
    }

    function handleLoveButtonClick() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 3);
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
                Liczba polubień: {state.numberOfLikes}
            </h2>
            <button onClick={handleLikeButtonClick}>Lubię to!</button>
            <button onClick={handleLoveButtonClick}>Kocham to!
            </button>
            <h2>
                Fabuła
            </h2>
            {state.isWarningShown && (
                <p>
                    Uwaga! Opis fabuły zawiera spoilery!
                    <button onClick={handleCloseWarningClick}>x</button>
                </p>
            )}
            <p>
                Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.
            </p>

            {state.isSpoilerShown ? (
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