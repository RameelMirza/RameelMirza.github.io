import Resume from './Resume.jsx'

function ResumePage() {
  return (
    <div className="resume-page-view">
      <div className="resume-page-header">
        <a href="/#home" className="resume-page-back">
          Back to Portfolio
        </a>
      </div>
      <Resume showOpenButton={false} />
    </div>
  )
}

export default ResumePage
