import React from 'react'
import './styles.css'

const Input = ({ placeholder, label, onChange, value = '', disabled, type, error }) => {

  return (
    <div className="input-container">
      <div className="input-container-header">
        { label ? <label className="input-label">{label}</label> : null }
      </div>

      <input
        onChange={(event) => onChange(event)}
        value={value}
        className="input"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className="error-text">
        { error ? <span>{error}</span> : null}
      </div>
    </div>
  )
}

export default Input