import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';
import {Character} from '../types/characters';


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
    <div>
      {data.map((character: Character) => {
        const {age,gender,homePlanet,id,images,name,saying,occupation} = character
        return (
        <div key={`futurama-characters-${id}`}>
          <img src={images.main} alt="" />
          <h1>{name.first} {name.middle} {name.last}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default Home
