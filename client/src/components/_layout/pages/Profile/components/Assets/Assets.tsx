import React, { useEffect, useState } from 'react'
import { PopupActions } from '$actions/PopupActions'
import ProjectApi from '$api/project'
import Chart from '$components/_layout/pages/AutomationPage/components/Calculator/components/Chart'
import Accounts from '$components/_layout/pages/Profile/components/Accounts'
import PieDetails from '$components/_layout/pages/Profile/components/PieDetails'
import Button from '$components/_shared/Button'
import TelegramIcon from '$components/_shared/icons/TelegramIcon'
import Table from '$components/_shared/Table'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import UserStore from '$stores/UserStore'

import './Assets.scss'

const Assets = () => {
  const [id] = useStore(UserStore, s => s.id)

  const [pieData, setPieData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [pieDetailsOpen, setPieDetailsOpen] = useState(false)
  const [pieDetailsData, setPieDetainsData] = useState({})
  const [accountsData, setAccountsData] = useState([])
  const [statisticsData, setStatisticsData] = useState([])

  const header = {
    title: 'PROJECT NAME',
    medium_input: 'AVERAGE INVESTMENT',
    predict_output: 'EXPECTED INCOME'
  }

  const handleClick = (
    _,
    _1,
    item: any,
  ) => {
    setPieDetainsData(item)
    setPieDetailsOpen(true)
  }

  useEffect(() => {
    ProjectApi.getUserProjectsWithDetails(id)
      .then((res) => {
        const data = res.data?.data

        if (!data) {
          return
        }

        setAccountsData(data.map(item => ({
          name: item.name,
          accountCount: item.accountCount,
          color: item.projectDetails.color,
          progress: item.progress,
          logo: item.projectDetails.logo
        })))

        setPieData(data.map(item => ({ ...item.projectDetails, value: item.accountCount })))

        const localStaticData = data.map(item => ({
          title: item.name,
          medium_input: item.averageInvestment,
          predict_output: item.expectedIncome,
        }))


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setStatisticsData([...localStaticData.map(item => ({
          ...item,
          medium_input: `${item.medium_input} $`,
          predict_output: `${item.predict_output} $`,
        })),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          {
            title: 'TOTAL:',
            medium_input: `${localStaticData.reduce((acc, val) => acc + val.medium_input, 0)} $`,
            predict_output: `${localStaticData.reduce((acc, val) => acc + val.predict_output, 0)} $`,
          }
        ])
      }).finally(() => setIsLoading(false))
  }, [])

  return (
    <div className='assets'>
      <div>
        <div
          className='container'
        >
          <Title>
            {'Assets'}
          </Title>
        </div>

        <Accounts accountsData={accountsData}/>
        <div className='container'>
          <div className='assets__content'>
            <div className='assets__pie-wrap'>
              <div className='assets__tag'>
                <p>
                  {'BRIEFCASE'}
                </p>
              </div>
              <Chart
                pieData={pieData}
                className='assets'
                onClickHandler={handleClick}
              />
              <PieDetails
                project={pieDetailsData}
                open={pieDetailsOpen}
                onClose={() => setPieDetailsOpen(false)}
              />
            </div>
            <div style={{ display: 'block' }}>
              <div className='assets__tag'>
                <p>
                  {'STATISTICS'}
                </p>
              </div>
              <Table
                data={statisticsData}
                header={header}
              />
              <Button
                icon={TelegramIcon}
                iconColor='#C0F'
                isGradient
                className='chat-button'
              >
                <a href='https://t.me'>
                  {'Chat with support'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assets
