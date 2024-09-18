import {useState} from 'react';
import {Review} from "./Review.jsx";

const initialReviews = [
    {author: "Brian", text: "Bardzo fajny film", id: 1},
    {author: "John", text: "Nie podobał mi się", id: 2},
];

export function Form() {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [reviews, setReviews] = useState(initialReviews);

    const reviewsElement = reviews.map((r) => (
        <Review
            author={r.author}
            text={r.text}
            key={r.id}
        />
    ));

    function handleSubmit(event) {
        event.preventDefault();
        const author = inputValue;
        const text = textareaValue;

        setReviews((prevReviews) => {
            return [{
                author, text, id: prevReviews.length + 1
            }, ...prevReviews];
        });
        setInputValue('');
        setTextareaValue('');
    }

    return (
        <>
            <hr/>
            <ul>{reviewsElement}</ul>
            <h2>Dodaj recenzję</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="author">Autor</label>
                    </div>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }}/>
                </div>
                <div>
                    <div>
                        <label htmlFor="text">Text</label>
                    </div>
                    <textarea
                        name="text"
                        id="text"
                        value={textareaValue}
                        onChange={(event) => {
                            setTextareaValue(event.target.value);
                        }}></textarea>
                </div>
                <button type="submit" disabled={inputValue === "" || textareaValue === ""}>Dodaj</button>
            </form>
        </>
    )
}