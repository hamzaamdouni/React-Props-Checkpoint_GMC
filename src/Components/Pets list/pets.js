import React from 'react'
import './Pets.css'
import { Button, Card } from 'react-bootstrap'

const PetsL = ({ListPet, handelName}) => {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ListPet.srcpic} />
                <Card.Body>
                    <Card.Title>{ListPet.nameP}</Card.Title>
                    <Card.Text>{ListPet.typeP}</Card.Text>
                    <Card.Text>{ListPet.price}</Card.Text>
                    <Button variant="primary" onClick={()=>handelName(ListPet.typeP,ListPet.nameP)}>Information</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PetsL

PetsL.defaultProps= {
    ListPet : 
        {
            srcpic:"/pic1",
            nameP:"Pets",
            typeP:"Pets",
            price:"000 DT",
    }
}