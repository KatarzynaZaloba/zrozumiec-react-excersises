import {LikesCounter} from "./components/LikesCounter.jsx";
import {Plot} from "./components/Plot.jsx";
import {Form} from "./components/Form.jsx";
import {Reviews} from "./components/Reviews.jsx";
import {useState} from "react";

const initialReviews = [
    {author: "Brian", text: "Bardzo fajny film", id: 1},
    {author: "John", text: "Nie podobał mi się", id: 2},
];

function App() {
    const [reviews, setReviews] = useState(initialReviews);
    const [counterShown, setCounterShown] = useState(true);

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <button onClick={() => {
                setCounterShown((prevCounterShown) => !prevCounterShown);
            }}>
                {counterShown ? "Schowaj counter" : "Pokaż counter"}
            </button>
            {counterShown && <LikesCounter/>}
            <Plot/>
            <Reviews reviews={reviews}/>
            <Form onReviewSumbit={(author, text) => {
                setReviews((prevReviews) => {
                    return [{
                        author, text, id: prevReviews.length + 1
                    }, ...prevReviews];
                });
            }}/>
        </>
    );
}

export default App;