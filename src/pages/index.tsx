import type { NextPage } from 'next'
import { CharacterCardContainer } from '../components/CharacterCardContainer';
import styled from '@emotion/styled'
import Link from 'next/link';



const Home: NextPage = () => {


  return (
    <div>
      <Header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Futurama_Planet_Express.svg/1110px-Futurama_Planet_Express.svg.png" alt="" style={{width:'50px'}}/>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/1200px-Futurama_1999_logo.svg.png" alt="" style={{width:'200px'}}/>
        
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
      <img src="https://www.denofgeek.com/wp-content/uploads/2018/06/futurama_4.jpg?resize=768%2C432" alt="" style={{width:'100%'}}/>
    <CharacterCardContainer/>
    </div>
  )
}


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #35c5f0;
`


const List = styled.ul`
  display: flex;
  justify-content: space-around;

`

const Item = styled.li`
  padding-right:15px;
  font-size: 30px;
`



export default Home
