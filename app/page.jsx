// import Image from "next/image";
'use client'
import { Button } from "./components/Button";
import { Navprogress } from "./components/Navprogress";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [ticketType, setTicketType] = useState("regular");



  return (
    <section className={styles.container}>
      <Navprogress />
      <section className={styles.innerContainer}>
        <>
          <div className={styles.eventCard}>
            <h2>Techember Fest ”25</h2>
            <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            <div>
              <span>📍 [Event Location] || March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <hr />

          <section className={styles.ticketDetails}>
            <h4>Select Ticket Type:</h4>
            <div>
              <button onClick={() => setTicketType("regular")} style={ticketType === "regular" ? {background: '#197686'} : null} className={styles.ticketType}>
                <div>
                  <span>REGULAR ACCESS</span>
                  <span>20 left!</span>
                </div>
                <span className={styles.priceTag}>Free</span>
              </button>
              <button onClick={() => setTicketType("vip")} style={ticketType === "vip" ? {background: '#197686'} : null} className={styles.ticketType}>
                <div>
                  <span>VIP ACCESS</span>
                  <span>20 left!</span>
                </div>
                <span className={styles.priceTag}>$50</span>
              </button>
              <button onClick={() => setTicketType("vvip")} style={ticketType === "vvip" ? {background: '#197686'} : null} className={styles.ticketType}>
                <div>
                  <span>VVIP ACCESS</span>
                  <span>20 left!</span>
                </div>
                <span className={styles.priceTag}>$150</span>
              </button>
            </div>
          </section>

          <section className={styles.ticketDetails}>
            <h4>Number of Tickets</h4>
            <select className={styles.ticketQuantity}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </section>
          <div className={styles.buttonGroup}>
            <Button>Cancel</Button>
            <Button>Next</Button>
          </div>
        </>
      </section>
    </section>
  );
}
