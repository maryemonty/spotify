import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchCards = (props) => {

    const [albums, setAlbums] = useState([]);

    const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist}`;

    const album = async () => {

        if (props.artist) {

            const response = await fetch(URL);
            try {
                if (response.ok) {
                    const albums = await response.json();
                    setAlbums(albums.data);
                    console.log(albums.data);

                } else {
                    console.error("mannaggia");
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        album();
    }, [props.artist]);

    return (
        <div className="p-4 m-2">
            <Row>
                {albums.map((a, index) => (
                    <Col sm={3} key={index}>
                        <Card className="bg-dark text-light w-100 mt-4">
                            <Card.Img variant="top" src={a.album.cover_medium} className="p-3 rounded-circle" />
                            <Card.Body>
                                <Card.Title className="text-truncate">{a.title}</Card.Title>
                                <Card.Title className="text-truncate"><Link to='/artist'>{a.artist.name}</Link></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );

}
export default SearchCards