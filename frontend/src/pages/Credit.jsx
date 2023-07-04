import React from 'react';
import '../style/credit.css';


function Credit(props) {
    return (
        <div id='credit'>
            <div className='creditContainer'>
                <h1>Thanks for playing</h1>
                <br />
                <h4>
                    Hi it's mohamed the dev who made this project i hope you enjoyed playing my game.
                    <br/>
                    if you want to know more about me or my additional projects you can check out this links:
                </h4>
                <div id='credit-links'>
                    <a target="_blank" href="https://github.com/bkrayoub">Github  -</a>
                    <a target="_blank" href="https://www.behance.net/bkrayoub">  Behance  -</a>
                    <a target="_blank" href="https://www.instagram.com/bkrayuub_ty4/">Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default Credit;