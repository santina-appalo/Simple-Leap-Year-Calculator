import React, { useState } from 'react';

function LeapYear() {
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setYear(value);
    setError('');
    
    // Real-time validation and checking
    if (value === '') {
      setResult(null);
      return;
    }
    
    const yearInt = parseInt(value, 10);
    if (isNaN(yearInt) || yearInt < 1) {
      setError('Please enter a valid year');
      setResult(null);
    } else {
      const leap = (yearInt % 4 === 0 && yearInt % 100 !== 0) || yearInt % 400 === 0;
      setResult({ year: yearInt, isLeap: leap });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkLeapYear();
    }
  };

  const checkLeapYear = () => {
    if (!year.trim()) {
      setError('Please enter a year');
      return;
    }
    
    const yearInt = parseInt(year, 10);
    if (isNaN(yearInt) || yearInt < 1) {
      setError('Please enter a valid year');
      setResult(null);
    } else {
      const leap = (yearInt % 4 === 0 && yearInt % 100 !== 0) || yearInt % 400 === 0;
      setResult({ year: yearInt, isLeap: leap });
      setError('');
    }
  };

  const clearInput = () => {
    setYear('');
    setResult(null);
    setError('');
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    width: '100%',
    maxWidth: '400px'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
    textAlign: 'center'
  };

  const subtitleStyle = {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '32px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  };

  const inputContainerStyle = {
    position: 'relative',
    marginBottom: '16px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    paddingRight: year ? '40px' : '16px'
  };

  const inputFocusStyle = {
    borderColor: '#3b82f6'
  };

  const clearButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '4px'
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: year.trim() ? '#3b82f6' : '#d1d5db',
    color: 'white',
    fontWeight: '600',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: year.trim() ? 'pointer' : 'not-allowed',
    transition: 'background-color 0.2s',
    marginBottom: '16px'
  };

  const errorStyle = {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '16px'
  };

  const resultStyle = {
    border: '2px solid',
    borderColor: result?.isLeap ? '#86efac' : '#fed7aa',
    backgroundColor: result?.isLeap ? '#f0fdf4' : '#fff7ed',
    color: result?.isLeap ? '#166534' : '#ea580c',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s',
    marginBottom: '16px'
  };

  const emojiStyle = {
    fontSize: '24px',
    marginBottom: '8px',
    display: 'block'
  };

  const resultTextStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px'
  };

  const subTextStyle = {
    fontSize: '14px',
    opacity: '0.8'
  };

  const detailsStyle = {
    textAlign: 'center',
    fontSize: '14px',
    color: '#6b7280'
  };

  const summaryStyle = {
    cursor: 'pointer',
    transition: 'color 0.2s'
  };

  const explanationStyle = {
    marginTop: '12px',
    textAlign: 'left',
    backgroundColor: '#f9fafb',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '13px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div>
          <h1 style={titleStyle}>Leap Year Finder</h1>
          <p style={subtitleStyle}>Discover if any year is a leap year</p>
        </div>

        <div>
          <div>
            <label htmlFor="year-input" style={labelStyle}>
              Enter Year
            </label>
            <div style={inputContainerStyle}>
              <input
                id="year-input"
                type="number"
                value={year}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                placeholder="e.g., 2024"
                style={inputStyle}
                min="1"
              />
              {year && (
                <button
                  onClick={clearInput}
                  style={clearButtonStyle}
                  onMouseEnter={(e) => e.target.style.color = '#6b7280'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  aria-label="Clear input"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <button
            onClick={checkLeapYear}
            disabled={!year.trim()}
            style={buttonStyle}
            onMouseEnter={(e) => {
              if (year.trim()) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseLeave={(e) => {
              if (year.trim()) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            Check Leap Year
          </button>

          {error && (
            <div style={errorStyle}>
              {error}
            </div>
          )}

          {result && !error && (
            <div style={resultStyle}>
              <span style={emojiStyle}>
                {result.isLeap ? '🎉' : '📅'}
              </span>
              <p style={resultTextStyle}>
                {result.year} {result.isLeap ? 'is' : 'is not'} a leap year
              </p>
              {result.isLeap && (
                <p style={subTextStyle}>
                  This year has 366 days!
                </p>
              )}
            </div>
          )}
        </div>

        <div style={detailsStyle}>
          <details>
            <summary style={summaryStyle}>
              How are leap years calculated?
            </summary>
            <div style={explanationStyle}>
              <p style={{marginBottom: '8px'}}>A year is a leap year if:</p>
              <ul style={{paddingLeft: '20px', margin: 0}}>
                <li style={{marginBottom: '4px'}}>It's divisible by 4 AND not divisible by 100</li>
                <li>OR it's divisible by 400</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default LeapYear;