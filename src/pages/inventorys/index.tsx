import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { InventoryData } from "../../types/inventoryData";

const InvetoryPage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/inventory/`,fetcher)
    
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    return(
        <div>
            {data.map((item:InventoryData)=>{
                const { title, stock, price, id, slogan, description, category}=item
                return(
                    <div key={`inventory-${id}`}>
                        <h1>{`title:${title} || category:${category}`}</h1>
                        <p>{description}</p>
                        <small>{stock}</small>
                        <p>{price}</p>
                        <p>{slogan}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default InvetoryPage