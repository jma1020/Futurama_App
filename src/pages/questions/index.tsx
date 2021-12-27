import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { QuestionData } from "../../types/questionData";
import styled from "@emotion/styled";


const QuestionPage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/questions/`,fetcher)
    
    if (error) return <div>An error has occurred.;</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    return(
        <QuestionBox>
            {data.map((item:QuestionData)=>{
                const {id,question,correctAnswer,possibleAnswers}=item
                return(
                    <div key={`question-${id}`}>
                        <h1>{id}. {question}</h1>

                        {possibleAnswers.map((item:string,index:number)=>{
                            return(
                                <p key={`possible-${index}`}>ㅇ {item}</p>
                            )
                        })}
                        <Answer>정답은 보고싶어? <AnswerSpan>{correctAnswer}</AnswerSpan></Answer>

                    </div>
                )
            })}
        </QuestionBox>
    )
}
const QuestionBox =styled.div`
    margin: 100px;
    padding: 50px;
    border: 6px solid white;
    border-radius: 40px;
`

const AnswerSpan = styled.span`
    color:bisque;
`

const Answer = styled.p`
    display: inline-block;
    &:hover {
        span{
            color:black
        }    
    }
`

export default QuestionPage