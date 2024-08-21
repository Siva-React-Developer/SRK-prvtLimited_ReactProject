import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./creative.module.css"
const CreativeFivestar=()=>{
    let [news,setNews]=useState([])
    let [title,settitle]=useState("")
    let [heading,setheading]=useState("")
    let [content,setcontent]=useState("")
    let [director1,setdirector1]=useState("")
    let [director1Info,setdirector1Info]=useState("")
    let [director2,setdirector2]=useState("")
    let [director2Info,setdirector2Info]=useState("")
    let [director3,setdirector3]=useState("")
    let [director3Info,setdirector3Info]=useState("")
    let [imgurl,setimgurl]=useState("")
    let [info,setinfo]=useState("")
    let [paragraph,setparagraph]=useState("")
    let obj=useParams()
    let value=obj.id
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${obj.id}`)

        .then((response)=>{
            setheading(response.data.heading)
            setimgurl(response.data.imgUrl)
            setinfo(response.data.info)
            settitle(response.data.title)
            setparagraph(response.data.paragraph)
            setcontent(response.data.content)
            setdirector1(response.data.director1)
            setdirector1Info(response.data.director1Info)
            setdirector2(response.data.director2)
            setdirector2Info(response.data.director2Info)
            setdirector3(response.data.director3)
            setdirector3Info(response.data.director3Info)
            console.log("get data");
        })
        .catch(()=>{
            console.log("error");
        })
    },[])
    return(
        <div id={style.bg}>
            <div id={style.cardcontent}>
            <div id={style.maincontent}>
             <h2>{title}</h2>
             <br />   
            <p>{heading}</p>
            <br />
            <h2>{info}</h2>
            </div>
            <div id={style.rightcontent}>
                <h2>{content}</h2>
                <br />
                <h3>{director1}</h3>
                <h3 style={{fontWeight:"lighter",color:"gray"}}>{director1Info}</h3>
                <img style={{height:"25px",width:"25px",margin:"20px 0px"}} src="/linkedin_socialnetwork_17441.png" alt="" />
                <h3>{director2}</h3>
                <h3 style={{fontWeight:"lighter",color:"gray"}}>{director2Info}</h3>
                <img style={{height:"25px",width:"25px",margin:"20px 0px"}} src="/linkedin_socialnetwork_17441.png" alt="" />
                <br />
                <h3>{director3}</h3>
                <h3 style={{fontWeight:"lighter",color:"gray"}}>{director3Info}</h3>
                <img style={{height:"25px",width:"25px",margin:"20px 0px"}} src="/linkedin_socialnetwork_17441.png" alt="" />
            </div>
            </div>
            <div id={style.imagecontent}>
            <img src={imgurl} alt="" />
            <div id={style.para}>
                <p>{paragraph}</p>
            </div>
            </div>
        </div>
    )
}
export default CreativeFivestar