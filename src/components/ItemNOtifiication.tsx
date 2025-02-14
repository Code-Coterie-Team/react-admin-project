import React from 'react'
import { IListNotifications } from '../types/api'

function ItemNOtifiication({itemNotification} : IListNotifications) {
  return (
    <div className="flex flex-col  text-base">
        {itemNotification.map((item,index) => (
          <div key={index} className="pushNotification flex justify-between items-center py-3">
            <span className="text-gray-300 ">{item.title}</span>

            {item.state}
          </div>
        ))}
     
      </div>
  )
}

export default ItemNOtifiication
