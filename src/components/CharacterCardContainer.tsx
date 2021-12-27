import axios from 'axios';
import useSWR from 'swr';
import { Character } from '../types/characters';
import styled from '@emotion/styled'
import { CharacterCard } from '.';
import { MEDIA_QUERY_ENDPOINT } from '../constants';

const fetcher = (url: string) => axios(url).then((res)=> res.data);

export const CharacterCardContainer = () => {
    const { data, error } = useSWR(
        "https://api.sampleapis.com/futurama/characters",
        fetcher
      );
    
      console.log(data)
    
      if (error) return <div>An error has occurred.;</div>
      if (!data) return <div>Loadings</div>


      return(
        <Container>
          {data.map((character: Character) => {
          
            return (
            <CharacterCard 
              characterData = {character} 
              key={`futurama-character-${character.id}`}
            />
            )
            })}
        </Container>
      )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px;
  gap: 60px;
  @media (max-width: ${MEDIA_QUERY_ENDPOINT.TABLE}){
    grid-template-columns: repeat(3,1fr);
  }

  @media (max-width: ${MEDIA_QUERY_ENDPOINT.MOBILE}) {
    grid-template-columns: repeat(2,1fr);
  }


`
