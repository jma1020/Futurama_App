import styled from "@emotion/styled";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { NextPage } from "next";
import { API_ENDPOINT } from "../../constants";
import { InfoData } from "../../types/infoData";

const InfoPage:NextPage = () =>{

    const { data, error } = useSWR(`${API_ENDPOINT}/info/`,fetcher);
       
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    
    const {id   , synopsis, yearsAired, creators} = data[0]
    return(
        <div>
            <h3>{yearsAired}</h3>
            <p>{synopsis}</p>
            {creators.map((e:InfoData,index:number)=>{
                return(
                    <div key={`creators-${index}`}>
                        <p>{e.name}</p>
                        <p>{e.url}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default InfoPage