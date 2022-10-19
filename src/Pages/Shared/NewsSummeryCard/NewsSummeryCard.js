import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    const { title, details, _id, total_view, author, image_url } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                        roundedCircle
                        className='me-2'
                        src={author.img}
                        style ={{height: '60px'}}>
                        </Image>
                        <p>{author.name}</p>
                        <p>{author.publish_date}</p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p> {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read Full Story</Link></p>
                                :
                                <p>{details}</p>
                        }

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;