import { Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';

// Pass item data inside the component
// This is stateless component the data is passed from the parent
function SingleTournament({ itemData, participateInTournament }) {

    function onClick(e) {
        console.log("Answer selected " + e.target.value + "key: ");
        // Send choice back to the contract with minimumVlaue
        participateInTournament(e.target.value);
        alert('answer selected is: ' + e.target.value);
    }

    return (
        <ListGroup.Item>

            <h6>{itemData.title}</h6>
            <ListGroup horizontal>

                <p>Players: <Badge variant='primary'>{itemData.players}</Badge></p>

                <p>Minimum bet:<Badge variant='warning'>{itemData.minbet}</Badge></p>

                {/* Choice A */}
                <Col><Button onClick={onClick} value={itemData.A}>{itemData.A}</Button></Col>

                {/* Choice B */}
                <Col><Button onClick={onClick} value={itemData.B}>{itemData.B}</Button></Col>

                

            </ListGroup>

            <p>Tournament:{itemData.key}</p>
        </ListGroup.Item>

    )
}

export default SingleTournament;