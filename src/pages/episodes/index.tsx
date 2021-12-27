import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { EpisodeData } from "../../types/episodeData";

const EpsiodePage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/episodes/`,fetcher)
    
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    

    return(
        <div>
            난에피
            {data.map((item:EpisodeData)=>{
                const {desc, id, number, originalAirDate, title, writers} = item
                return(
                    <div key={`episode-${id}`}>
                        <h1>{number}  {title}</h1>
                        <p>{desc}</p>
                        <p>{originalAirDate}</p>
                        <small>{writers}</small>
                    </div>
                )
            })}
        </div>
    )
}

export default EpsiodePage