import {useState} from "react";

export function Plot() {

    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);


    function handleShownSpoilerClick() {
        setIsSpoilerShown(true);
        setIsWarningShown(false);
    }

    function handleCloseWarningClick() {
        setIsWarningShown(false);
    }

    return (
        <>
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
    )
}