import React from 'react'
export const Small = React.memo(({ value }) => {
    console.log("Hola")
    return (
        <small>
            { value }
        </small>
    )
});
