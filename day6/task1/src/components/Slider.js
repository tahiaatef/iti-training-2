import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:"100%" ,height:"600px"}} src='https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%" ,height:"600px"}} src='https://images.pexels.com/photos/14770400/pexels-photo-14770400.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%" ,height:"600px"}} src='https://images.pexels.com/photos/11013334/pexels-photo-11013334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

