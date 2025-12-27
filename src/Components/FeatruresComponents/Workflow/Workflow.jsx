import React from 'react'
import styles from "./Workflow.module.css"

const Workflow = ({steps}) => {
  return (
      <section className={styles.workflow}>
        <h2>How LifeSure Handles Emergencies</h2>
        <div className={styles.workflowSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.workflowStep}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>  )
}

export default Workflow