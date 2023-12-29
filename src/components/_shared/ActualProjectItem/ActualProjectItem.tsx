import React from 'react'
import classnames from 'classnames'
import Button from '$components/_shared/Button'
import AutomationIcon from '$components/_shared/icons/AutomationIcon'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Label from '$components/_shared/Label'

import './ActualProjectItem.scss'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

interface IProps {
  logo: string,
  title: string,
  desc: string,
  expectedProfit: string,
  expenses: string,
  date: string,
  id: string
  isPage?: boolean
}

const ActualProjectItem = ({
  logo,
  title,
  desc,
  expectedProfit,
  expenses,
  date,
  id,
  isPage,
}: IProps) => {
  const [{ profit, invest, dateOr }] = useStore(ContentStore, store => ({
    profit: store?.project_values?.profit || '',
    invest: store?.project_values?.invest || '',
    dateOr: store?.project_values?.date || '',
  }))

  const Title = isPage ? 'h1' : 'h4'

  return (
    <div className={classnames('actual-project-item', isPage && 'actual-project-item_page')}>
      <div className='actual-project-item__wrapper'>
        <div className='actual-project-item__head'>
          <span style={{ backgroundImage: `url("/${logo}")` }} />
          <Title className='actual-project-item__head-title'>
            {title}
          </Title>
        </div>
        {desc && (
          <p>
            {desc}
          </p>
        )}
        {!isPage && <span className='actual-project-item__divider' />}
      </div>
      <div className={classnames('actual-project-item__values', isPage && 'actual-project-item__values_page')}>
        {expectedProfit && (
          <div className='actual-project-item__value'>
            <p className='actual-project-item__value-title'>
              {profit}
            </p>
            <Label
              className='actual-project-item__value-label'
              value={expectedProfit}
              isGradient
            />
          </div>
        )}
        {expenses && (
          <div className='actual-project-item__value'>
            <p className='actual-project-item__value-title'>
              {invest}
            </p>
            <Label
              className='actual-project-item__value-label'
              value={expenses}
              isGradient
            />
          </div>
        )}
        {date && (
          <div className='actual-project-item__value'>
            <p className='actual-project-item__value-title'>
              {dateOr}
            </p>
            <Label
              className='actual-project-item__value-label'
              value={date}
              isGradient
            />
          </div>
        )}
      </div>
      {!isPage && (
        <div className='actual-project-item__wrapper'>
          <span className='actual-project-item__divider' />
          <div className='actual-project-item__actions'>
            <Button
              to={`projects/${id}`}
              className='actual-project-item__actions-btn'
              isGradient
              icon={DownloadIcon}
              iconColor='#C0F'
            >
              {'Получить гайд'}
            </Button>
            <Button
              to='automation'
              className='actual-project-item__actions-btn'
              icon={AutomationIcon}
              asLink
            >
              {'Автоматизация'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ActualProjectItem
