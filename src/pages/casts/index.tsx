import useSWR from "swr";
import { NextPage } from "next";
import { API_ENDPOINT } from "../../constants";
import { fetcher } from "../../utils/fetcher";
import styled from "@emotion/styled";
import { CastData } from "../../types/castsData";
import Link from "next/link";

const Cast:NextPage = () =>{

    const { data, error } = useSWR(`${API_ENDPOINT}/cast/`,fetcher);
       
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    

    return(
        <CastBox>
            
            {data.map((item:CastData)=>{
                const {id, name, born, bio}=item;
                return(
                    <CastCard key={`casts-${id}`}>
                        <h1>{name}</h1>
                        <p>{born}</p>
                        <Link href={bio.url}>
                            <a>
                                <CastLink>more</CastLink>
                            </a>
                        </Link>
                    </CastCard>
                )
            })}
        </CastBox>
        
    )
}

const CastBox = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, 300px) ;
    grid-auto-rows: 192px;
    gap: 50px;
    padding: 50px;
    text-align: center;
    
`
const CastCard = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px gray;

    &:hover{
        background-color: #ffbf8a;
    }
`

const CastLink = styled.h3`
    display: inline-block;
    padding: 5px 20px;
    border-radius: 10px;
    &:hover{
        background-color: white;
    }
`


export default Cast