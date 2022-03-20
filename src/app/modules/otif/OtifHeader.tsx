import React from 'react'
import {usePageData} from '../../../_metronic/layout/core'

function OtifHeader() {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  return (
    <div>
      {pageTitle}
    </div>
  )
}

export {OtifHeader}
