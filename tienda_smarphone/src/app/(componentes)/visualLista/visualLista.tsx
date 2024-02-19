import Card from 'react-bootstrap/Card';
import Celu1 from '../../../../public/celu1.webp';

export const ListaVisual = () => {
  return (
      <Card style={{ width: '36rem', display: 'flex', flexDirection: 'row' }}>
        <Card.Img variant="top" src={Celu1.src} style={{ width: '30%' }} />
        <div style={{ width: '80%' }}>
          <Card.Body>
            <Card.Title>Xiaomi Redmi Note 10</Card.Title>
            <Card.Text>
              $450.000
            </Card.Text>
            <Card.Text>
              6 cuotas sin interes
            </Card.Text>
            <Card.Text>
              Envio Gratis
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
  );
}
