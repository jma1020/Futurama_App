import styled from '@emotion/styled';
import { Character } from '../types/characters';
import Link from 'next/link'

interface CharacterCardProps {
    characterData: Character
}

export const CharacterCard = ({ characterData }: CharacterCardProps)  =>{
    const {age,gender,homePlanet,id,images,name,saying,occupation} = characterData;


    return (
        // <Card key={`futurama-characters-${id}`}>
          <Link key={`futurama-characters-${id}`} href={`/characters/${id}` }>
            <CardLink>
              <Profile src={images.main} alt="" />
              <h1>{name.first} {name.middle} {name.last}</h1>
            </CardLink>
          </Link>
        // </Card>
    )
} 

const Profile = styled.img`
  max-height:400px;
  /* aspect-ratio: 9/16; */
`

const CardLink = styled.a`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  box-sizing: border-box;
  &:hover {
    border: 10px solid white;
    border-radius: 20px;
  
  }
`
