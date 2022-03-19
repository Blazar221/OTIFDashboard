import React from 'react'

export function OTIFDashboard() {
  return (
    <div className="d-flex flex-row h-300px">
      <div className="d-flex flex-column flex-row-auto w-200px">
        <div className="d-flex flex-column-auto h-50px bg-primary">
          <span className="text-white">Fixed Height</span>
        </div>

        <div className="d-flex flex-column-fluid bg-success flex-center">
          <span className="text-white">Fluid Height</span>
        </div>
      </div>

      <div className="d-flex flex-column flex-row-fluid">
        <div className="d-flex flex-column-auto h-70px bg-info flex-center">
          <span className="text-white">Fixed Height</span>
        </div>

        <div className="d-flex flex-row flex-column-fluid">
          <div className="d-flex flex-row-fluid bg-dark flex-center">
            <span className="text-white">Fluid Width</span>
          </div>

          <div className="d-flex flex-row-auto w-200px bg-warning flex-center">
            <span className="text-white">Fixed Width</span>
          </div>
        </div>
      </div>
    </div>
  )
}