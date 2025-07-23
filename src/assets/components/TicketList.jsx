import React, { useState } from 'react'
import TicketCard from './TicketCard'
import { tickets } from '../data/data'

const TicketList = () => {
  const [ticketList, setTicketList] = useState(tickets);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTickets = ticketList.filter((ticket) =>
    filterStatus === "all" ? true : ticket.status === filterStatus
  );

  function handleResolve(id) {
    const updated = ticketList.map(ticket =>
      ticket.id === id ? { ...ticket, status: "resolved" } : ticket
    );
    setTicketList(updated);
  }

  return (
    <> 
      <div className="filter-buttons">
        <button
          className={filterStatus === "all" ? "active" : ""}
          onClick={() => setFilterStatus("all")}
        >
          Hepsi
        </button>
        <button
          className={filterStatus === "open" ? "active" : ""}
          onClick={() => setFilterStatus("open")}
        >
          Açıklar
        </button>
      </div>

      <div className="ticket-list">
        {filteredTickets.length === 0 ? (
          <p>Gösterilecek destek talebi bulunamadı.</p>
        ) : (
          filteredTickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              {...ticket}
              onResolve={() => handleResolve(ticket.id)}
            />
          ))
        )}
      </div>
    </>
  )
}

export default TicketList
