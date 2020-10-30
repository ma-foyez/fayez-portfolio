import React from "react";
import "./Top.css";


export default function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (document.getElementById("topButton").style.visibility !== null) {
                document.getElementById("topButton").style.visibility = "visible";
            }
           
        } 
    }
    window.onscroll = function() {scrollFunction();};
    window.onload = function() {scrollFunction();}; 
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top"><i class="fas fa-hand-point-up" aria-hidden="true"></i></button>
        );
    }
