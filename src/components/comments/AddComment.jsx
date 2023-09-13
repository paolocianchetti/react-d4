import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = ({bookId}) => {
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState(0);
    const [error, setError] = useState(null);

    console.log('error: ', error);

    const postComment = async (e) => {
        e.preventDefault();

        if (comment === '' || rate <= 0 || rate > 5) {
            alert('Attenzione! I valori inseriti non sono corretti!');
            return;
        }

        try {
            const response = await fetch((API_URL), {
                method: 'POST',
                body: JSON.stringify({
                    "comment": comment,
                    "rate": rate,
                    "elementId": bookId
                }),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTQzNjQ3OTYsImV4cCI6MTY5NTU3NDM5Nn0.16sAAVKn7f8QVmIfH3kups2pEzrt2nDmfJS-IKFhLyg",
                    "Content-type": "application/json"
                }
            })
            if (response.ok) {
                alert("Salvataggio dei dati avvenuto correttamente!");
                window.location.reload();
            } else {
                throw new Error("Si e' verificato un errore durante il salvataggio!");
            }
        } catch (err) {
            if (err) {
                setError(err);
                alert(err);
                window.location.reload();
            }
        }
    }

    return (
        <Form onSubmit={postComment}>
            <Form.Group controlId="formBasicComment">
                <Form.Label className="mt-3">Commenta il libro selezionato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="inserisci commento"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicRate">
                <Form.Label className="mt-3">Esprimi un giudizio (da 1 a 5)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="inserisci un valore da 1 a 5"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
            </Form.Group>

            <Button className="mt-3" variant="primary" type="submit">
                Salva
            </Button>
        </Form>
    );
}

export default AddComment;