import React from "react";
import Slotn from "./Slotn";


const App=()=>{
    return(
        <>
        <h1 className="heading">
        π°welcome to slot machine gameπ°
        </h1>
        <div className="Slot_machine">
            <Slotn x="ΰΆ" y="βοΈ" z="π"/>
            <Slotn x="π" y="π€¨" z="π"/>
            <Slotn x="π" y="π" z="π"/>
            <Slotn x="π€" y="π" z="π"/>
            <Slotn x="π₯" y="π" z="π"/>
            <Slotn x="π€" y="π" z="π"/>
            <Slotn x="β΅" y="π" z="π΄"/>
            <Slotn x="π" y="π" z="π"/>
            <Slotn x="π" y="π" z="π"/>
            <Slotn x="β­" y="π" z="π"/>
        </div>
        </>
    )
}
export default App;