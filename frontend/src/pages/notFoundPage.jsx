import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function notFoundPage() {



    return (
        <div>
            <Link to='/splashscreen' style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px", "cursor": "pointer" }}><h1>Back to home</h1></Link>
            <h1>error - 404 page not found asa7bi</h1>
        </div>
    );
}

export default notFoundPage;