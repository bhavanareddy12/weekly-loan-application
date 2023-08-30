import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const PageNotFound = () => {
    return(
        <div className='page-not-found h-100'>
            <h2>404</h2>
            <p>Oops! Something is wrong.</p>
            <Link class="button" to="/">Go back in initial page, is better.</Link>
        </div>
    )
}

export default PageNotFound