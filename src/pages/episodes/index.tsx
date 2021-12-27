import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { EpisodeData } from "../../types/episodeData";
import styled from "@emotion/styled";

const EpsiodePage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/episodes/`,fetcher)
    
    if (error) return <div>An error has occurred.;</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    

    return(
        <EpiBox>
   
            {data.map((item:EpisodeData)=>{
                const {desc, id, number, originalAirDate, title, writers} = item
                return(
                    <EpiCard key={`episode-${id}`}>
                        <h1>({number})  {title}</h1>
                        <p>{originalAirDate}</p>
                        <small>{writers}</small>
                        <p>{desc}</p>
                        
                       
                    </EpiCard>
                )
            })}
        </EpiBox>
    )
}

const EpiBox = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, 300px) ;
    grid-auto-rows: 400px;
    gap: 50px;
    padding: 50px;
    text-align: center;
    
`
const EpiCard = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px gray;

    &:hover{
        background-color: #ffbf8a;
    }
`



export default EpsiodePage