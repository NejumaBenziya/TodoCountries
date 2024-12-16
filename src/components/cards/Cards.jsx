import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.flags.png} />
      <Card.Body>
        <Card.Title>{data.name.common}</Card.Title>
        <Card.Text>
        
      <p>Capital: {data.capital}</p>
      <p>Region: {data.region}</p>
      <p>Subregion: {data.subregion}</p>
        </Card.Text>
        <Button variant="primary">see</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;