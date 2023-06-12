import React from 'react';
import '../style/hostOffline.css';
import addImage from '../image/add.png';
import startImage from '../image/start.png';

export default function HostOffline() {
var players = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div class="container">
        <div class="left">
            <table>
                {players.map((player) => (
                    <tr key={player}>{player}</tr>
                ))}
            </table>
        </div>
        <div class="right">
            <div class="hostoperation">
                <div>
                    <p>category</p>
                    <select name="" id="">
                        <option value="">animals</option>
                        <option value="">more categories are coming soon</option>
                    </select>
                </div>
                <div>
                    <p>obtrusives</p>
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
            <div class="buttons">
                <img src={addImage} />
                <img src={startImage} class="button" />
            </div>
        </div>
    </div>
  )
}
