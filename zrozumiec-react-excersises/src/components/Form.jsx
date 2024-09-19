import {useState} from 'react';

export function Form({onReviewSumbit}) {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const author = inputValue;
        const text = textareaValue;

        // setReviews((prevReviews) => {
        //     return [{
        //         author, text, id: prevReviews.length + 1
        //     }, ...prevReviews];
        // });
        onReviewSumbit('TESTOWY ALERT');
        setInputValue('');
        setTextareaValue('');
    }

    return (
        <>
            <hr/>

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