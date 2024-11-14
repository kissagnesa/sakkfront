import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export const ChessList=()=>{
    const[chesses,setChesses]=useState([]);
    const [isPending,setPending]=useState(false);

    useEffect((){
        setPending(true);
        fetch ("https://chess.sulla.hu/chess")
        .then ((valasz)=>valasz.json())
        .then((sakkosok)=>setChesses(sakkosok))
        .cath((hiba)=>console.log(hiba))
        .finally(()=>setPending(false));
    }, [])
}
