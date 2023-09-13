import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { nanoid } from 'nanoid';

function CommentsList({ arrComments, arrRates }) {

    return (
        arrComments.map((item, index) => {
            return <ListGroup.Item key={nanoid()}
                className="d-flex justify-content-between align-items-start">
                    {item}
                <Badge bg="success" pill>
                    {arrRates[index]}
                </Badge>
            </ListGroup.Item>
        })
    );
}

export default CommentsList;