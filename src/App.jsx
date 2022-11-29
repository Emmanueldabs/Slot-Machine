import React from "react";
import Slotn from "./Slotn";


const App=()=>{
    return(
        <>
        <h1 className="heading">
        🎰welcome to slot machine game🎰
        </h1>
        <div className="Slot_machine">
            <Slotn x="ඞ" y="✈️" z="💀"/>
            <Slotn x="😀" y="🤨" z="😏"/>
            <Slotn x="😎" y="😎" z="😎"/>
            <Slotn x="🤗" y="😍" z="💀"/>
            <Slotn x="😥" y="😌" z="😊"/>
            <Slotn x="🤑" y="🚀" z="🚝"/>
            <Slotn x="⛵" y="🚇" z="🛴"/>
            <Slotn x="💎" y="💎" z="💎"/>
            <Slotn x="🌌" y="🌌" z="🌆"/>
            <Slotn x="⭕" y="🙄" z="💀"/>
        </div>
        </>
    )
}
export default App;