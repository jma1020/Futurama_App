import type { NextPage } from 'next'
import styled from '@emotion/styled'




const Home: NextPage = () => {


  return (
    <Box>
      <MainLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/1200px-Futurama_1999_logo.svg.png" alt="" />
      <MainImg src="https://www.denofgeek.com/wp-content/uploads/2018/06/futurama_4.jpg?resize=768%2C432" alt=""/>
    </Box>
  )
}

export default Home;

const Box = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const MainImg = styled.img`
  border-radius: 30px;
`
const MainLogo = styled.img`
  width: 200px;
`