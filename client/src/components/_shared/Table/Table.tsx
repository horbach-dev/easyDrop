import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import Label from '$components/_shared/Label'
import { Link } from '$components/_shared/Link'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './Table.scss'

interface IProps {
  header: any,
  data: any,
  className?: string,
  placeholder?: string,
  ref?: any,
  rules?: any,
}

const Table = ({ data, header }: IProps) => {
  const destLeftRef = useRef<HTMLSpanElement>(null)
  const destRightRef = useRef<HTMLSpanElement>(null)
  const [firstVisible, setFirstVisible] = useState(false)
  const [lastVisible, setLastVisible] = useState(false)

  useEffect(() => {

    const callback = entries => {
      entries.forEach(entry => {
        const pos = entry.target.getAttribute('data-position')

        pos === 'left' && setFirstVisible(entry.isIntersecting)
        pos === 'right' && setLastVisible(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '4000px 0px 4000px 0px' })

    if (destLeftRef.current && destRightRef.current) {
      [destLeftRef.current, destRightRef.current].forEach(i => observer.observe(i))
    }

    return () => {
      if (destLeftRef.current && destRightRef.current) {
        [destLeftRef.current, destRightRef.current].forEach(i => observer.unobserve(i))
      }
    }
  }, [destLeftRef.current, destRightRef.current, data])

  if (!header || !data) return null

  console.log('data', data)

  return (
    <div className='modern-table-wrap'>
      <div
        className={classnames(
          'modern-table-wrap__shadow',
          'modern-table-wrap__shadow_left',
          firstVisible && 'modern-table-wrap__shadow_hide',

        )} />
      <div className='modern-table'>
        <div className='modern-table__scroll'>
          <span
            ref={destLeftRef}
            data-position='left'
            className='modern-table__scroll-hidden modern-table__scroll-hidden_left'
          />
          <div className='modern-table__header'>
            {Object.keys(header).map((key) => {
              return (
                <div
                  key={key}
                  className='modern-table__col'
                >
                  <div className='modern-table__col-title'>
                    {header[key]}
                  </div>
                </div>
              )
            })}
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={item.title}
                className='modern-table__row'
              >
                {Object.keys(item).map(key => {
                  if (key === 'link') {
                    return (
                      <div
                        key={key}
                        className='modern-table__col modern-table__col_link'
                      >
                        <a
                          href={item.link}
                          rel='noopener noreferrer'
                          target='_blank'
                          className='modern-table__link'
                        >
                          {'Watch'}
                        </a>
                      </div>
                    )
                  }

                  if ((key === 'medium_input' || key === 'predict_output') && data.length - 1 === index) {
                    return (
                      <div
                        key={key}
                        className='modern-table__col'
                      >
                        <Label
                          value={item[key]}
                          className='modern-table__col-label modern-table__col-label-total'
                        />
                      </div>
                    )
                  }

                  if (key !== 'title') {
                    return (
                      <div
                        key={key}
                        className='modern-table__col'
                      >
                        <Label
                          value={item[key]}
                          className='modern-table__col-label'
                        />
                      </div>
                    )
                  }

                  return (
                    <div
                      key={key}
                      className='modern-table__col modern-table__col_title'
                    >
                      {item[key]}
                    </div>
                  )
                })}
              </div>
            )
          })}
          <span
            ref={destRightRef}
            data-position='right'
            className='modern-table__scroll-hidden modern-table__scroll-hidden_right'
          />
        </div>
      </div>
      <div
        className={classnames(
        'modern-table-wrap__shadow',
        'modern-table-wrap__shadow_right',
        lastVisible && 'modern-table-wrap__shadow_hide',
        )} />
    </div>
  )
}

export default Table
