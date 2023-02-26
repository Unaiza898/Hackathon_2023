import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Style/About.css'

function About() {
  return (
    <div>


        <div className='team'>
        <h2>Meet Our Team</h2>
            <CardGroup>   
            <Card>
            <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/olivia-manalastas/">Olivia Manalastas</a></Card.Title>
                <Card.Text>
                     Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/agnieszka-krokosz/">Agnieszka Krokosz</a></Card.Title>
                <Card.Text>
                    Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    </div>
  )
}

export default About;