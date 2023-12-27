import React from 'react'

const Benifit = ({ payload }) => {
    return (
        <div className='benifit'>
            <div className='benifit-icon '>
                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: payload?.color }}>
                    {payload?.icon}
                </div>
            </div>
            <h5 className='head'>
                {payload?.title}
            </h5>
            <p>
                {payload?.desc}
            </p>
        </div>
    )
}

export default Benifit
