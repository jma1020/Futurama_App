import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { InventoryData } from "../../types/inventoryData";
import styled from "@emotion/styled";

const InvetoryPage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/inventory/`,fetcher)
    
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    return(
        <InvenBox>
            {data.map((item:InventoryData)=>{
                const { title, stock, price, id, slogan, description, category}=item
                return(
                    <InvenCard key={`inventory-${id}`}>
                        <InvenTitle>{title}</InvenTitle>
                        <small>남은수량 : {stock}</small>
                        <p>가격 : {price}</p>
                        <p>{slogan}</p>

                        <p>{description}</p>
                    </InvenCard>
                )
            })}
        </InvenBox>
    )
}
const InvenBox = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, 300px) ;
    grid-auto-rows: 400px;
    gap: 50px;
    padding: 50px;
    text-align: center;
    
`
const InvenCard = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px gray;
    padding: 20px;

    &:hover{
        background-color: #ffbf8a;
    }
`
const InvenTitle = styled.h1`
    background: #ccd;
    border-radius: 30px;
`


export default InvetoryPage