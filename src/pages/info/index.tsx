import styled from "@emotion/styled";
import { fetcher } from "../../utils/fetcher";
import useSWR from "swr";
import { NextPage } from "next";
import { API_ENDPOINT } from "../../constants";


const InfoPage:NextPage = () =>{

    const { data, error } = useSWR(`${API_ENDPOINT}/info/`,fetcher);
       
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    return(
        <div>
            <h3>{data[0].yearsAired}</h3>
            <p>{data[0].synopsis}</p>
        </div>
    )
}

export default InfoPage