import styled from "@emotion/styled";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { NextPage } from "next";
import { API_ENDPOINT } from "../../constants";
import { InfoData } from "../../types/infoData";
import Link from "next/link";


const InfoPage:NextPage = () =>{

    const { data, error } = useSWR(`${API_ENDPOINT}/info/`,fetcher);
       
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    
    const {id   , synopsis, yearsAired, creators} = data[0]
    return(
        <InfoContainer>
            <h1>INFORMATION</h1>
            <h3>Futurama   {yearsAired}</h3>
            <p>{synopsis}</p>
            <h3>만드신 분</h3>
            {creators.map((e:InfoData,index:number)=>{
                return(
                    <div key={`creators-${index}`}>
                        <Link href={e.url}>
                            <a>
                                <LinkBtn>{e.name}</LinkBtn>
                            </a>
                        </Link>
                        
                    </div>
                )
            })}
        </InfoContainer>
    )
}

export default InfoPage

const InfoContainer =styled.main`
    padding: 50px;
`

const LinkBtn = styled.h2`
    background-color: #f7ba70;
    display: inline-block;
    border-radius: 10px;
    padding: 10px;
    &:hover{
        background-color: #eb9730;
    }
`