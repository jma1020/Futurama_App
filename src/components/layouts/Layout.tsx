import styled from "@emotion/styled";
import { TopNav, Footer} from "."


export const Layout:React.FC = ({children}) => {
    return(
        <Container>
            <TopNav />
                <MainContainer>
                    {children}
                </MainContainer>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    background-color: bisque;
`

const MainContainer = styled.main`
  min-height: calc(74vh);
  
`