import React from 'react'

const StatusMessage = ({winner ,current}) => {
    const noMoveleft = current.board.every(el => el !== null);
    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noMoveleft &&`Next player is ${current.isXNext ? 'X':'O'}`}
            {!winner && noMoveleft &&`X and O tied`}
        </h2>
    )
}

export default StatusMessage
