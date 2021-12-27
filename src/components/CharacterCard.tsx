import styled from '@emotion/styled';
import { Character } from '../types/characters';
import Link from 'next/link'

interface CharacterCardProps {
    characterData: Character
}

export const CharacterCard = ({ characterData }: CharacterCardProps)  =>{
    const {age,gender,homePlanet,id,images,name,saying,occupation} = characterData;


    return (
        <Card key={`futurama-characters-${id}`}>
          <Link href={`/characters/${id}`}>
            <a>
            <Profile src={images.main} alt="" />
            <h1>{name.first} {name.middle} {name.last}</h1>
            </a>
          </Link>
        </Card>
    )
} 


const Card = styled.div`
  max-width: 360px;
`

const Profile = styled.img`
  width: 100%;
  /* aspect-ratio: 9/16; */
`