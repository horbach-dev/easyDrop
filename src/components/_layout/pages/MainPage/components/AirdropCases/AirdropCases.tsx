import React from 'react'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './AirdropCases.scss'

const AirdropCases = () => {
  const [items] = useStore(ContentStore, store => store.airdrop_cases)

  if (!items || !items.length) return null

  return (
    <div className='airdrop-cases'>
      {items.map(item => {
        return (
          <div
            key={item.title}
            className='airdrop-cases__item'
          >
            <div className='airdrop-cases__item-head'>
              <span
                className='airdrop-cases__item-head-icon'
                style={{ backgroundImage: `url("/${item.logo}")` }}
              />
              <p className='airdrop-cases__item-title'>
                {item.title}
              </p>
            </div>
            <div className='airdrop-cases__item-shadow'>
              <span className='airdrop-cases__item-shadow-label'>
                {'Затраты'}
              </span>
              <span className='airdrop-cases__item-shadow-value'>
                {item.cost}
              </span>
            </div>
            <div className='airdrop-cases__item-shadow airdrop-cases__item-shadow_split'>
              <span className='airdrop-cases__item-shadow-label'>
                {'Действия'}
              </span>
              <span className='airdrop-cases__item-shadow-value'>
                {item.actions}
              </span>
            </div>
            <div className='airdrop-cases__item-shadow'>
              <span className='airdrop-cases__item-shadow-label'>
                {'Награды'}
              </span>
              <span className='airdrop-cases__item-shadow-value'>
                {item.profit}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AirdropCases
