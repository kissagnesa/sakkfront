import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export const ChessList=()=>{
    const[chesses,setChesses]=useState([]);
    const [isPending,setPending]=useState(false);

    useEffect(()=> {
        setPending(true);
        fetch ("https://chess.sulla.hu/chess")
        .then ((valasz)=>valasz.json())
        .then((sakkosok)=>setChesses(sakkosok))
        .cath((hiba)=>console.log(hiba))
        .finally(()=>setPending(false)); //a finally ág mindenképp lefut a promise-ok közül
    }, []);

    return(
        <div className="p-5 m-auto text-center content bg-ivory">
            {isPending ? (
                <div className="spinner-border text-danger"></div>
            ):(
                <div>
                    <h2>Sakkozók</h2>
                </div>
            )}
        </div>
    )
}
