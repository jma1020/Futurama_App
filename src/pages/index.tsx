import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';
import {Character} from '../types/characters';
import styled from '@emotion/styled'


const fetcher = (url: string) => axios(url).then((res)=> res.data);

const Home: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );

  console.log(data)

  if (error) return <div>"An error has occurred.";</div>
  if (!data) return <div>Loadings</div>

  return (
    <Container>
      {data.map((character: Character) => {
        const {age,gender,homePlanet,id,images,name,saying,occupation} = character
        return (
        <Card key={`futurama-characters-${id}`}>
          <Profile src={images.main} alt="" />
          <h1>{name.first} {name.middle} {name.last}</h1>
        </Card>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`


const Card = styled.div`
  max-width: 360px;
`

const Profile = styled.img`
  width: 100%;
  /* aspect-ratio: 9/16; */
`

export default Home
