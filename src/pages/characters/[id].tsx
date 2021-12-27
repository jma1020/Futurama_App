import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData";

const CharacterDetail: NextPage = () =>{
    const router = useRouter();
    const { id } = router.query

    const { data, error } = useCharacterData(id);

    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>

    const { images, name } =data

    return(
        <div>
            <img src={images.main} alt="" />
            <h1>{name}</h1>
        </div>
    )
}

export default CharacterDetail;