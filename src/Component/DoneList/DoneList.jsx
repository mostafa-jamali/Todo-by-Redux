import React from 'react'

function DoneList({item}) {
    return (
        <div>
            {item.checkList.map(checkItem =>
                checkItem.status ? <li key={checkItem.id}>{checkItem.text}</li> : null
            )}
        </div>
    )
}

export default DoneList
