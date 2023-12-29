import React, { useEffect, useState } from 'react'
import { PopupActions } from '$actions/PopupActions'
import Button from '$components/_shared/Button'
import LogoIcon from '$components/_shared/icons/LogoIcon'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'
import CalculatorItem from './components/CalculatorItem'
import Chart from './components/Chart'

import './Calculator.scss'

const COLORS = [
  '#F2A93C',
  '#CC00FF',
  '#3B44F9',
  '#FF5555',
  '#FF6B00',
  '#6BC623',
  '#6015DB',
  '#FF002E',
  '#15A7E6',
]

function interpolate(value, minInput, maxInput, minOutput, maxOutput) {
  return minOutput + (maxOutput - minOutput) * (value - minInput) / (maxInput - minInput)
}

const Calculator = () => {
  const [{ projects, content  }] = useStore(ContentStore, store => ({
    projects: store.projects || [],
    content: store?.automation_page?.second || {},
  }))

  const [checkboxes, setCheckboxes] = useState({})
  const [inputValues, setInputValues] = useState({})
  const [pieData, setPieData] = useState([])
  const [invest, setInvest] = useState(0)
  const [profit, setProfit] = useState(0)
  const [prob, setProb] = useState(0)

  console.log('pieData', pieData)

  const handleChangeInput = (name, value) => {
    setInputValues(prev => ({ ...prev, [name]: value }))
  }

  const getDefaultPieData = (value = 1): any => {
    return projects.map(item => ({
      label: item.title,
      value,
      color: item.color,
    }))
  }

  useEffect(() => {
    const defaultCheckboxes = {}
    const defaultInputValues = {}

    projects.forEach((item, index) => {
      if (index <= 0) {
        defaultCheckboxes[item.title] = true
        defaultInputValues[item.title] = 1
      } else {
        defaultCheckboxes[item.title] = false
      }
    })

    const defaultPieData = getDefaultPieData()

    setCheckboxes(defaultCheckboxes)
    setPieData(defaultPieData)
    setInputValues(defaultInputValues)
  }, [projects])

  useEffect(() => {
    const projectsData = projects.map(i => ({ ...i.calculation, title: i.title }))
    let inv = 0
    let pro = 0

    const inputKeys = Object.keys(inputValues)

    inputKeys.forEach(key => {
      const price = projectsData.find(i => i.title === key).price
      const coefficient = projectsData.find(i => i.title === key).coefficient

      inv += inputValues[key] * price
      pro += inputValues[key] * price * coefficient
    })

    setInvest(inv)
    setProfit(pro)

    const clear = {}

    Object.keys(inputValues).forEach(key => {
      if (inputValues[key] !== 0) {
        clear[key] = inputValues[key]
      }
    })

    const pie = Object.keys(clear).map((key) => ({
      label: key,
      value: clear[key],
      color: projects.find(i => i.title === key).color
    })) as any

    setPieData(pie)

    const countNonZeroProperties = Object.values(inputValues).filter(value => value !== 0) as number[]
    const propLength = countNonZeroProperties.length

    if (propLength === 0) {
      setProb(0)
    }

    if (propLength >= 1) {
      const count = countNonZeroProperties.reduce((curr, next) => curr + next, 0)
      const value = count >= 10 ? 10 : count
      const output = interpolate(value, 1, 10, 24, 51)

      setProb(output.toFixed(0))
    }

    if (propLength === 2) {
      const vv = countNonZeroProperties.reduce((curr, next) => curr + next, 0)
      const v = vv >= 10 ? 10 : vv
      const output = interpolate(v, 2, 10, 51, 76)

      setProb(output.toFixed(0))
    }

    if (propLength >= 3) {
      const vv = countNonZeroProperties.reduce((curr, next) => curr + next, 0)
      const v = vv >= 10 ? 10 : vv
      const output = interpolate(v, 3, 10, 76, 99)

      setProb(output.toFixed(0))
    }

  }, [inputValues, checkboxes])

  const handleCheckbox = ({ target }) => {
    setCheckboxes(prev => ({ ...prev, [target.name]: target.checked }))

    setInputValues(prev => {
      if (prev[target.name] && !target.checked) {
        prev[target.name] = 0
      } else {
        prev[target.name] = 1
      }

      return prev
    })
  }

  if (!projects || !projects.length) return null

  return (
    <section
      className='calculator'
      id='calculator'
    >
      <span className='calculator__decor calculator__decor_left' />
      <div className='container'>
        <Title>
          {content?.title}
        </Title>
        <div className='calculator__content'>
          <div className='calculator__pie-wrap'>
            <Chart pieData={pieData} />
            <span className='calculator__pie-border' />
          </div>
          <div className='calculator__project-items'>
            {projects.map(project => {
              return (
                <CalculatorItem
                  key={project.title}
                  title={project.title}
                  logo={project.logo}
                  tooltip={project.tooltip}
                  checked={checkboxes[project.title]}
                  handleCheckbox={handleCheckbox}
                  color={project?.color?.replace(/#/g, '') || ''}
                  handleChange={v => handleChangeInput(project.title, v)}
                  value={inputValues[project.title]}
                />
              )
            })}
            <div className='calculator__pie-mobile'>
              <div className='calculator__pie-container'>
                <span/>
                <span/>
                <span/>
                <Chart pieData={pieData} />
              </div>
            </div>
            <div className='calculator__project-result'>
              <div className='calculator__project-result-item'>
                <p className='calculator__project-result-title'>
                  {content?.calculated?.first}
                </p>
                <span className='calculator__project-result-value'>
                  {`${invest} $`}
                </span>
              </div>
              <div className='calculator__project-result-item'>
                <p className='calculator__project-result-title'>
                  {content?.calculated?.second}
                </p>
                <span className='calculator__project-result-value'>
                  {`${prob} %`}
                </span>
              </div>
              <div className='calculator__project-result-item'>
                <p className='calculator__project-result-title'>
                  {content?.calculated?.third}
                </p>
                <span className='calculator__project-result-value'>
                  {`${profit} $`}
                </span>
              </div>
              <Button
                isGradient
                onClick={() => {
                  return  PopupActions.showPopup(
                    'DownloadGuide',
                    {
                      form: {
                        projects: inputValues,
                        invest: `Инвестиций: ${invest}$`,
                        profit: `Прогнозируемый доход: ${profit}$`,
                        prob: `Вероятность дропа: ${prob}%`,
                      },
                      title: 'Доверить автоматизацию',
                    })
                }}
                icon={LogoIcon}
              >
                {content?.calculated?.button}
              </Button>
              <p className='calculator__project-result-term'>
                {content?.calculated?.terms}
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className='calculator__decor calculator__decor_right' />
    </section>
  )
}

export default Calculator
