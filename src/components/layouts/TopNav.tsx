import styled from "@emotion/styled";
import Link from "next/link";
import { MEDIA_QUERY_ENDPOINT } from "../../constants";

export const TopNav = () =>{
    return(
        <Header>
            <Link href={'/'}>
                <a>
                    <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Futurama_Planet_Express.svg/1110px-Futurama_Planet_Express.svg.png" alt="" />
                </a>
            </Link>
            

            <nav>
                <List>
                    <Item>
                    <Link href={`/info/`}>
                        <a>Info</a>
                    </Link>
                    </Item>
                    <Item>
                    <Link href={`/characters/`}>
                        <a>Characters</a>
                    </Link>
                    </Item>
                    <Item>
                    <Link href={`/casts/`}>
                        <a>Cast</a>
                    </Link>
                    </Item>
                    <Item>
                    <Link href={`/episodes/`}>
                        <a>Episodes</a>
                    </Link>
                    </Item>
                    <Item>
                    <Link href={`/questions/`}>
                        <a>Questions</a>
                    </Link>
                    </Item>
                    <Item>
                    <Link href={`/inventorys/`}>
                        <a>Iventory</a>
                    </Link>
                    </Item>
                </List>
            </nav>
        </Header>
    )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 3px solid #eee;
  @media (max-width: ${MEDIA_QUERY_ENDPOINT.MOBILE}) {
    flex-direction: column;
}
`


const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

const Item = styled.li`
  padding-right:15px;
  font-size: 30px;
  @media (max-width: ${MEDIA_QUERY_ENDPOINT.TABLE}){
    font-size: 20px;
  }

`

const LogoImg = styled.img`
    padding-top: 5px;
    width: 70px;
`