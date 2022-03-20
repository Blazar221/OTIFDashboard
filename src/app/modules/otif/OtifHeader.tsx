import React from 'react'
import {usePageData} from '../../../_metronic/layout/core'
import {ReactComponent as SearchIcon} from './search.svg'
import {ReactComponent as Down} from './pull-down.svg'

function OtifHeader() {
  const {pageTitle} = usePageData()
  return (
    <div style={{padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
      <div style={{fontSize: '35px', marginRight: 'auto', textAlign: 'start'}}>
        {pageTitle}
      </div>
      <div style={{background: '#fafafa', borderRadius: '8px', overflow: 'hidden', padding: '10px', margin: '0 5px 0 5px'}}>
        <input type='text' placeholder='search' style={{background: '#fafafa', outline: 0, border: 0}} />
        <SearchIcon style={{width: '20px', height: '20px'}} />
      </div>
      <img src='avator.png' style={{height: '35px'}} />
      <p style={{margin: '0 5px 0 5px'}}>Jessica Jones</p>
      <Down style={{height: '20px', width: '20px'}} />
    </div>
  )
}

export {OtifHeader}
