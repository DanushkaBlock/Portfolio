import React from "react";
import dapp from '../../assets/dapp1.png';
import nft from '../../assets/nft2.png';
import smartContract from '../../assets/sm1.png';
import '../Skills/skills.css';


const skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle"> I do </span>
            <span className="skillDesc">I am a skilled, experienced blockchain developer & Passionate about blockchain research & analytics. Worked on Ethereum, Hyperledger, Steller, Deso, DAO, NFT</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={dapp} alt="" className="skillBarImg"/>
                    <div className="skillBarTxt">
                        <h2>Dapp development</h2>
                        <p>Ethereum Sloana Steller cardano Defi DAO</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={nft} alt="" className="skillBarImg"/>
                    <div className="skillBarTxt">
                        <h2>NFT projects</h2>
                        <p>Metaverse</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={smartContract} alt="" className="skillBarImg"/>
                    <div className="skillBarTxt">
                        <h2>Integrate Smart Contracts and deploy successfully</h2>
                        <p>Solidity Rust</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default skills;