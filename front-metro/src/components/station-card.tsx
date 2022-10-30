import Station from '../interfaces/station'
import React from 'react'
import {FcClock} from "react-icons/fc";
import Swal from 'sweetalert2';
export const StationCard = ({ code, address, city, fantasy_name, schedule }: Station) => {

  /**
   * It's a function that shows a modal with the schedule of the metro station
   */
  const showModal = () => {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Horario Estación ' + fantasy_name,
      text: schedule,
      showConfirmButton: false,
    });
  }
  return (
    <div className="card">
      <header>
        <p className="card-header-title">
          {fantasy_name}
        </p>
      </header>
      <footer className="card-footer">
        <div className="card-footer-item">
          {address}
        </div>
        <div className="card-footer-item">
          <button className="button is-info is-light">
            {city}
          </button>
        </div>
        <div className="card-footer-item">
          <span className="tag is-success is-large is-light">
            {code}
          </span>
        </div>
        <div className="card-footer-item">
          <button className="button is-large" onClick={ showModal }>
            <span className="icon is-medium">
              <FcClock size={45} />
            </span>
          </button>
        </div>
      </footer>
    </div>
  )
}
