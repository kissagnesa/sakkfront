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
        <div className="p-5 m-auto text-center content bg-ivory">
            {isPending ? (
                <div className="spinner-border text-danger"></div>
            ):(
                <div>
                    <h2>Sakkozók</h2>
                    {chesses.map(chess,index)=>(
                        <div className="card col-sm3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">Sakkozó neve: {chess.name}</p>
                            <p className="text-dark">Születési év: {chess.birth_date}</p>
                            <p className="text-danger">Megnyert vilagbajnokságai: {chess.world_ch_won}</p>
                            <div className="card-body">
                                <Link to={chess.profile_url}>Profil link</Link>
                                <img src={chess.image_url ? chess.image_url:"https://placeholder.com/400x800"} 
                                style={{width:"200"}} className="img-fluid" alt={chess.name}></img>
                                
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
