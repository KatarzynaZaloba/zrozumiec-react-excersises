import {useState} from 'react';
export function Form() {
    const [review, setReview] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    console.log(review);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        const author = inputValue;
        const text = textareaValue;

        setReview({author, text});
    }

    console.log('wartość zmiennej stanowej input:', inputValue);
    console.log('wartość zmiennej stanowej textarea:', textareaValue);

    return (
        <>
            {review && (
                <article>
                    <strong>{review.author}</strong>
                    <p>{review.text}</p>
                </article>
            )}
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
                        onChange={(event) => {
                            setTextareaValue(event.target.value);
                        }}></textarea>
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </>
    )
}