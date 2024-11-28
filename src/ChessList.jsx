import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export const ChessList=()=>{
    const[chesses,setChesses]=useState([]);
    const [isPending,setPending]=useState(false);

    useEffect(()=> {
        const fetchData=async()()=>{
            setPending(true);
            try{
                const valasz=await axios.get("https://chess.sulla.hu/chess");
                setChess(valasz.data);
            }
            catch(error){
                console.log("Hiba a lekérésben: ", error)
            }
            finally{
                setPending(false);
            };
            fetchData();
        }
       
    }, []);

    return(
        <div className="container mt-5">
            <h2>Sakkozók</h2>
            {isPending ? (
                <div className="spinner-border text-danger"></div>
            ):(
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    
                    {chesses.map(chess,index)=>(
                        <div className="col" key={index}></div>
                        <div className="card h-100" key={index}>
                            <div className="text-dark"><b>Sakkozó neve: <br></br> </b> {chess.name}</div>
                            <div className="text-dark">Születési év: {chess.birth_date}</div>
                            <div className="text-danger">Megnyert vilagbajnokságai: {chess.world_ch_won}</div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <Link to={chess.profile_url} className="fs-6 btn btn-success" target="_blank">Profil link</Link>
                                <img src={chess.image_url ? chess.image_url:"https://placeholder.com/400x800"} 
                                style={{width:"200"}} className="img-fluid" alt={chess.name}></img>
                                
                        </div>
                        <div className="text-center">
                            <Link to={"/chess/" + chess.id}><i className="bi bi-text-paragraph fs-6 btn btn-primary"></i></Link>   
                            <Link to={"/chess-mod/" + chess.id}><i className="bi bi-pencil-square fs-6 btn btn-warning"></i></Link>   
                            <Link to={"/chess-del/" + chess.id}><i className="bi bi-trash3 fs-6 btn btn-danger"></i></Link><br /><br />
                            </div>
                   </div>
            )}
        </div>
    )
}
