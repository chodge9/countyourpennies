import React from 'react'

function ViewGoals() {
  // Graph QL Query for forecasted amount/time to accrue. Depending on how often they put in money ( i.e.: Paid weekly, bi weekly, annually, etc.) it will calculate how long it should take to save.
  return (
    <div className="d-grid gap-2 mt-3">
       <button type="viewGoals" className="btn btn-primary">
          View Your Goals
        </button>
    </div>
  )
}

export default ViewGoals