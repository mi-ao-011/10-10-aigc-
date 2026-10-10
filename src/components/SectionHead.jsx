export default function SectionHead({ index, title, note, children }) {
  return (
    <div className="section-head">
      <div className="section-head__left">
        <div className="section-index">{index}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
      {children}
    </div>
  )
}
