import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { API_ENDPOINT } from "../../constants";
import { QuestionData } from "../../types/questionData";

const QuestionPage:NextPage = () =>{
    
    const { data, error } = useSWR(`${API_ENDPOINT}/questions/`,fetcher)
    
    if (error) return <div>"An error has occurred.";</div>
    if (!data) return <div>Loadings</div>
    
    console.log(data)
    return(
        <div>
            안녕
            {data.map((item:QuestionData)=>{
                const {id,question,correctAnswer,possibleAnswers}=item
                return(
                    <div>
                        <h1>{question}</h1>

                        {possibleAnswers.map((item:string)=>{
                            return(
                                <p>{item}</p>
                            )
                        })}
                        <p>{`정답은${correctAnswer}`}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default QuestionPage