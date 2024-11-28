import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export const ChessSingle=()=>{
    const params=useParams();
    const id = params.chessId;
    const [chess, setChess]=useState({});
    const [isPending, setPending]=useState(false);

    useEffect(()=>{
        (async()=>{
    try{
        const res=await axios.get('https://chess.sulla.hu/chess/' +id);
        setChess(res.data);
    }
    catch(error){
        console.log("Hiba a lekérésben: ", error)
    }
    finally{
        setPending(false);
    }
})();
}, [id]);
return(
    <div className="container mt-5">
    <h2 className="text-center">Sakkozók</h2>
    {isPending ? (
        <div className="spinner-border"></div>
    ) : (
        <div className="row row-cols-1 row-cols-md-3 g-2">
                <div className="col">
                    <div className="card h-100">
                    <div className="text-dark text-center"><b>Sakkozó neve:<br /> {chess.name}</b></div>
                    <div className="text-danger text-center">Születési éve: {chess.birth_date}</div>
                    <div className="text-danger text-center">Megnyert világbajnokságai: {chess.world_ch_won}</div>
                    <div className="card-body d-flex flex-column align-items-center">
                        
                        <Link to={chess.profile_url} className="fs-6  btn btn-success" target="_blank">Profil link</Link><br/>
                       <Link key="x" to={"/chess/" + chess.id}>
                       <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"} 
                       alt={chess.name} className="img-fluid" style={{width: "200px"}} />
                       </Link><br/>
                    </div>
                    <div className="text-center">
                    <Link to={"/chess/" + chess.id}><i className="bi bi-text-paragraph fs-6 btn btn-primary"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link to={"/chess-mod/" + chess.id}><i className="bi bi-pencil-square fs-6 btn btn-warning"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link to={"/chess-del/" + chess.id}><i className="bi bi-trash3 fs-6 btn btn-danger"></i></Link><br /><br />
                    </div>
                </div>
                </div>
                </div>                
    )}</div>
);
};