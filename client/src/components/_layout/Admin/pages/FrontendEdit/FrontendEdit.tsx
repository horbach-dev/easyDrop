import React from 'react'
import { Steps } from 'antd'

const FrontendEdit = () => {
  return (
    <div className='page'>
      <Steps
        size='small'
        current={1}
        items={[
          {
            title: 'Finished',
          },
          {
            title: 'In Progress',
          },
          {
            title: 'Waiting',
          },
        ]}
      />
    </div>
  )
}

export default FrontendEdit
