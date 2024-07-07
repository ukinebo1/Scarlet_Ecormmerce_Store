import React from 'react'
import './Collections.css'
import { collectionNew } from '../../assets/assets'

const Collections = () => {
  return (
    <div>
        <h2>COLLECTIONS</h2>
        <div >
            <div>
                {collectionNew.map((item)=>{
                    return(
                    <div key={item} className='cols_wrapper'>
                        <div>
                        <img src={item.image} alt="" />
                        <div>
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                            <button>{item.act}</button>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Collections