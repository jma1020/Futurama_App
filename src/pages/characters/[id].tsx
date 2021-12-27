import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData";

const CharacterDetail: NextPage = () =>{
    const router = useRouter();
    const { id } = router.query

    const { data, error } = useCharacterData(id);

    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>

    const { images, name,sayings} =data
  
    return(
        <div>
            <img src={images.main} alt="" />
            <h2>{name.first} {name.last}</h2>
            {sayings.map((saying: string, index: number) => {
                return <p key={`saying-${index}`}>{saying}</p>
            })}

        </div>
    )
}

export default CharacterDetail;
