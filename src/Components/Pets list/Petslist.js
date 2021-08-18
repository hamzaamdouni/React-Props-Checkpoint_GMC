import React from 'react'
import PetsL from './pets'
import './Pets.css'

const Petslist = ({ListPets}) => {
    const handelName=(typeP,nameP)=> alert(`The is a ${typeP} his name is ${nameP}`)
    return (
        
        <div className ="cardss">
            {ListPets.map((el , i) => 
                <PetsL ListPet={el} key={i} handelName={handelName}/>
            )}
            
        </div>
    )
}

export default Petslist

