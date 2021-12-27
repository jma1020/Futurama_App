import useSWR from "swr";
import { NextPage } from "next";
import { API_ENDPOINT } from "../../constants";
import { fetcher } from "../../utils/fetcher";
import styled from "@emotion/styled";
import { CastData } from "../../types/castsData";

const Cast:NextPage = () =>{

    const { data, error } = useSWR(`${API_ENDPOINT}/cast/`,fetcher);
       
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    

    return(
        <div>
            캐스트당
            {data.map((item:CastData)=>{
                const {id, name, born, bio}=item;
                return(
                    <div key={`casts-${id}`}>
                        <h1>{name}</h1>
                        <p>{born}</p>
                        <p>{bio.url}</p>
                    </div>
                )
            })}
        </div>
        // <CastCardContainer/>
    )
}

export default Cast