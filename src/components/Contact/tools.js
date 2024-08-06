import React from "react";
import '../Contact/tools.css';
import node from '../../assets/npm.png';
import solidity from '../../assets/sol.webp';
import html from '../../assets/html5.png';
import ret from '../../assets/react.png';
import css from '../../assets/css.webp';
import js from '../../assets/js.png'; 
import ts from '../../assets/ts.png';
import yarn from '../../assets/yarn.png';
import git from '../../assets/Git.png';
import aws from '../../assets/aws.png';
import python from '../../assets/python.png'
import truffle from '../../assets/truffle.png';
import ipfs from '../../assets/ipfs.png';
import ganache from '../../assets/ganache.png';
import hardhat from '../../assets/hardhat.png';
import rust from '../../assets/rust.png';
import go from '../../assets/go.png';


const tools = () => {
    return(
        <section id="myTools">
            <div className="famTools">
            <h1 className="familierWith">What I Use </h1>
                    <span className="famDesc">Programming languages, Platforms & Tools I work on</span>
                        <div className="toolsImgs">                    
                            <img src={ret} alt="" className="toolsImg"/>    
                            <img src={node} alt="" className="toolsImg"/>
                            <img src={yarn} alt="" className="toolsImg"/>
                            <img src={html} alt="" className="toolsImg"/>
                            <img src={css} alt="" className="toolsImg"/>
                            <img src={js} alt="" className="toolsImg"/>
                            <img src={ts} alt="" className="toolsImg"/>
                            <img src={python} alt="" className="toolsImg"/>
                            <img src={go} alt="" className="toolsImg"/>
                            <img src={git} alt="" className="toolsImg"/>
                            <img src={aws} alt="" className="toolsImg"/>
                            <img src={solidity} alt="" className="toolsImg"/>
                            <img src={rust} alt="" className="toolsImg"/>
                            <img src={ganache} alt="" className="toolsImg"/>
                            <img src={ipfs} alt="" className="toolsImg"/>
                            <img src={hardhat} alt="" className="toolsImg"/>
                            <img src={truffle} alt="" className="toolsImg"/>
                            
                        </div>
            </div>
        </section>
    );
}

export default tools;