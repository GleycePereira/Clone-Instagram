import React, { useState } from "react";
import Stories from "./Stories"
import { Avatar } from "@mui/material";

export default function Stories(props){
    const [stories, setStories] = useState([
        {
            icon: <Avatar></Avatar>,
            usuario: "fabio_henrique",
        },
        {
            icon: <Avatar></Avatar>,
            usuario: "fabia_santos",
        },
        {
            icon: <Avatar></Avatar>,
            usuario: "igor_andrade",
        },
        {
            icon: <Avatar></Avatar>,
            usuario: "nanda_julia",
        },
        
    ])
  
}