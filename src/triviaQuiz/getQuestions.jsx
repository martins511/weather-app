import axios from "axios";


export const getQuestion =async()=>{
    return await axios.get("https://opentdb.com/api.php?amount=10&category=19&type=multiple")
}