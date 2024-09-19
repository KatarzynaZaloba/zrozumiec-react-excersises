import {Review} from "./Review.jsx";
import {useState} from "react";

export function Reviews({reviews}) {
    const reviewsElement = reviews.map((r) => (
        <Review
            author={r.author}
            text={r.text}
            key={r.id}
        />
    ));

    return (
        <ul>{reviewsElement}</ul>
    )
}