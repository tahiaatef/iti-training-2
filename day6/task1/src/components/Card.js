import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Img variant="top"  style={{height:"400px"}} src="https://images.pexels.com/photos/16931314/pexels-photo-16931314/free-photo-of-portrait-of-a-senior-man-at-a-table-in-a-bar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
