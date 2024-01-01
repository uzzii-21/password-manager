import { passwordList } from '@/app/page'
import React from 'react'

const RecentList = () => {
  return (

        
      <ul className="flex items-center gap-4 mb-6">
        {
          passwordList.map((item) => (
            <li key={item.name}>
            <img
                src={item.imageUrl}
                alt={`${item.name} logo`}
                width="80"
                height="80"
                className="w-[60px] h-[60px] object-cover rounded-lg"
              />
            </li>
          ))
        }
              </ul>
  )
}

export default RecentList