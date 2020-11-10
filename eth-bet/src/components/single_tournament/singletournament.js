import { ListGroup, Badge, ListGroupItem } from 'react-bootstrap';

// Pass item data inside the component
// This is stateless component the data is passed from the parent
function SingleTournament({ itemData }) {

    return (

        <ListGroup.Item>
            <h6>{itemData.title}</h6>
            <ListGroup horizontal>
                <ListGroupItem>
                    <p>Type: <Badge variant='light'>{itemData.type}</Badge></p>
                    <p>Players: <Badge variant='primary'>{itemData.players}</Badge></p>
                </ListGroupItem>
                <ListGroupItem>
                    <p>Condition: <Badge variant='light'>{itemData.condition}</Badge></p>
                    <p>Bank:<Badge variant='warning'>{itemData.bank}</Badge></p>
                    </ListGroupItem>
                    
                <ListGroupItem>
                    <p>Creator:<Badge variant='danger'>{itemData.creator}</Badge></p>
                    <p>Rating:<Badge variant='info'>{itemData.rating}</Badge></p>
                    </ListGroupItem>

            </ListGroup>


        </ListGroup.Item>

    )
}

export default SingleTournament;