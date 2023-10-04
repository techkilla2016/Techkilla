import React from 'react'

const Loader = () => {
    return (
        <div className="loaderSniper">
            <div className="spinner-border m-5 loaderInner text-warning" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader