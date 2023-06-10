import React from 'react';
import '../style/home.css';

function Splashcreen(props) {

    return (
        <>
            <div class="container">
                <img src="./media/logo.png" />
                <div class="botona">
                    <a href="./pages/login.html" id="login"></a>
                    <a href="./pages/lobby.html" id="guest"></a>
                </div>
            </div>
        </>
    );
}

export default Splashcreen;