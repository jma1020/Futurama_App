import styled from "@emotion/styled";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData";

const CharacterDetail: NextPage = () =>{
    const router = useRouter();
    const { id } = router.query

    const { data, error } = useCharacterData(id);

    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    console.log(data)
    const { images, name, sayings, age, homePlanet, species} =data
  
    

    const randomNumber =Math.floor(Math.random() * sayings.length);

    return(
        <CardDetail>
            <img src={images.main} alt="" />
            <h2>{name.first} {name.last} ({age})</h2>
            <p>planet : {homePlanet}, species : {species}</p>
            <h3>{sayings[randomNumber]}</h3>
            {/* {sayings.map((saying: string, index: number) => {            
                return <p key={`saying-${index}`}>{saying}</p>
            })} */}
        </CardDetail>
    )
}

const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`


export default CharacterDetail;


