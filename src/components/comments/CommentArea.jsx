import React, { useEffect, useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import BeatLoader from "react-spinners/BeatLoader";
import AddComment from './AddComment';
import CommentsList from './CommentsList';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

export default function CommentArea({ isbn }) {
    const [comments, setComments] = useState([]);
    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(true);

    const getComments = async () => {
        setLoading(true);
        try {
            const response = await fetch((API_URL), {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTQzNjQ3OTYsImV4cCI6MTY5NTU3NDM5Nn0.16sAAVKn7f8QVmIfH3kups2pEzrt2nDmfJS-IKFhLyg"
                }
            })
            const data = await response.json();
            const reviews = data.filter(review => review.elementId === isbn);
            setComments(reviews.map(review => review.comment));
            setRates(reviews.map(review => review.rate));
            setLoading(false);
        } catch (error) {
            if (error) setError(error);
        }
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getComments();
    }, [])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recensioni</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <p className="bg-danger text-light rounded">
                        Si e' verificato un errore durante la richiesta dei dati...
                    </p>}
                    <ListGroup>
                        {loading && !error && (
                            <BeatLoader style={{flex: 1, alignSelf: 'center'}}
                                loading={loading}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        )}
                        {!loading && !error && comments && rates && 
                            <CommentsList arrComments={comments} arrRates={rates} />}
                    </ListGroup>
                    {!error && <AddComment bookId={isbn}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}