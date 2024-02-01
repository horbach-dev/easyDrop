import React from 'react'
import Progress from 'antd/es/progress/progress'

import './Account.scss'

interface IProp {
  accountsData: any
}

const Accounts = ({ accountsData }: IProp) => {
  return (
    <div className='accounts'>
      <div className='container'>
        <div className='accounts-first'>
          <div className='accounts__tag accounts-header'>
            <p>
              {'NUMBER OF ACCOUNTS'}
            </p>
          </div>

          {
            !accountsData.length && <p>no data</p>
          }

          {
            accountsData.map(item => (
              <div className='accounts-first-item'>
                <div className='accounts-first-item__title'>
                  <span
                    className='accounts-first-item__label-icon'
                    style={{
                      backgroundImage: `url("/${item.logo}")`
                    }}
                  />
                  {
                    item.name
                  }
                </div>
                <div
                  className='accounts-first-item__count'
                  style={{
                    borderColor: item.color
                  }}
                >
                  {
                    item.accountCount
                  }
                  {
                    ' accounts'
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className='accounts-second'>
          <div className='accounts__tag accounts-header'>
            <p>
              {'ACCOUNT READINESS PERCENTAGE'}
            </p>
          </div>

          {
            !accountsData.length && <p>no data</p>
          }

          {
            accountsData.map(item => (
              <div className='accounts-second-item'>
                <div className='accounts-second-item__title'>
                  <span
                    className='accounts-second-item__label-icon'
                    style={{
                      backgroundImage: `url("/${item.logo}")`
                    }}
                  />
                  {
                    item.name
                  }
                </div>
                <div
                  className='accounts-second-item__percent'
                  style={{
                    borderColor: item.color
                  }}
                >
                  <div className='accounts-second-item__percent-count'>
                    {item.progress}
                    {' %'}
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      // borderColor: 'black'
                      border: `2px solid ${item.color}`,
                      borderRadius: 20,
                      padding: '3px 0 2px'
                    }}
                  >
                    <Progress
                      percent={item.progress}
                      strokeColor={item.color}
                      showInfo={false}
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Accounts
