import React from 'react'

const TicketCard = ({ name, email, subject, status, onResolve }) => {
  return (
    <div className={`ticket-card ${status}`}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Konu:</strong> {subject}</p>
      <p><strong>Durum:</strong> {status === "open" ? "Açık" : "Çözüldü"}</p>

      {status === "open" && (
        <button className="resolve-btn" onClick={onResolve}>
          ✓ Çözüldü olarak işaretle
        </button>
      )}
    </div>
  )
}

export default TicketCard
