'use client'
import { Button } from "./components/Button";
import { Download } from "./components/Icon";
import { Navprogress } from "./components/Navprogress";
import Ticket from "./components/Ticket";
import styles from "./page.module.css";
import { useState, createContext, useContext, useRef  } from "react";
import html2canvas from "html2canvas";
import { supabase } from "./utils/superbaseClient";

const Context = createContext();

const Ticketselection = ({ticketType, setTicketType, handleQuantityChange, ticketQuantity}) => {
  return (
    <>
          <div className={styles.eventCard}>
            <h2>Techember Fest ”25</h2>
            <p>Join us for an unforgettable experience at Techember Fest ”25! Secure your spot now.</p>
            <div>
              <span>📍 ASO Rock || March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <hr />

          <section className={styles.ticketDetails}>
            <h4>Select Ticket Type:</h4>
            <div>
              <button onClick={() => setTicketType("regular")} style={ticketType === "regular" ? {background: '#12464E'} : null} className={styles.ticketType}>
                <span className={styles.priceTag}>Free</span>
                <div>
                  <span>REGULAR ACCESS</span>
                  <span>20/50</span>
                </div>
              </button>
              <button onClick={() => setTicketType("vip")} style={ticketType === "vip" ? {background: '#12464E'} : null} className={styles.ticketType}>
                <span className={styles.priceTag}>$50</span>
                <div>
                  <span>VIP ACCESS</span>
                  <span>20/50</span>
                </div>
              </button>
              <button onClick={() => setTicketType("vvip")} style={ticketType === "vvip" ? {background: '#12464E'} : null} className={styles.ticketType}>
                <span className={styles.priceTag}>$150</span>
                <div>
                  <span>VVIP ACCESS</span>
                  <span>20/50</span>
                </div>
              </button>
            </div>
          </section>

          <section className={styles.ticketDetails}>
            <h4>Number of Tickets</h4>
            <select className={styles.ticketQuantity} onChange={handleQuantityChange} value={ticketQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </section>
        </>
  )
}

const Ticketready = (props) => {
  


  return (
     <>
      <h1 className={styles.ticketReadyHeader}>Your Ticket is Booked</h1>
      <p className={styles.ticketReadyParagraph}>Check your email for a copy or you can download</p>
      <Ticket ref={props.ref} />
     </>
  )
}

const Attendeedetails = () => {

  const {profileImgSrc, setProfileImgSrc, setUserName, userName, email, setEmail, userStory, setUserStory} = useContext(Context);


  async function uploadFile(file) {
    const timeStamp = Date.now();
    const { data, error } = await supabase.storage.from('images').upload(`Images/${timeStamp}-${file.name}`, file, {
      cacheControl: "3600",
      upsert: false,
    })
    if (error) {
      // Handle error
      console.log(error)
    } else {
      // Handle success
      console.log(data)
      setProfileImgSrc(`https://symshydwghhiootbzoka.supabase.co/storage/v1/object/public/${data.fullPath}`);
    }
  }

  return (
    <>
              <section className={styles.profilePhoto}>
                  <p>Upload Profile Photo *</p>
                  <div className={styles.uploadBox}>
                    <button 
                      className={styles.uploadBtn} 
                      onDragOver={(e) => {
                        e.preventDefault()
                      }} 
                      onDrop={(e) => {
                        e.preventDefault();
                        const files = e.dataTransfer.files[0];
                        const reader = new FileReader()
                        reader.onload = function(e){
                          setProfileImgSrc(e.target.result)
                        }
                        reader.readAsDataURL(files)
                        uploadFile(files);
                      }}
                      onClick={() => {
                        document.getElementById('fileInput').click();
                      }}
                      // style={profileImgSrc ? {backgroundImage: `url(${profileImgSrc})`, backgroundSize: 'cover'} : null}
                    >
                      <Download />
                      Drag & Drop or Click to Upload
                      {
                        profileImgSrc ? <img className={styles.imgPreview} src={profileImgSrc} /> : null
                      }
                      <input 
                        type="file" 
                        id="fileInput" 
                        style={{ display: 'none' }} 
                        onChange={(e) => {
                        const files = e.target.files[0];
                        const reader = new FileReader()
                        reader.onload = function(e){
                          setProfileImgSrc(e.target.result)
                        }
                        reader.readAsDataURL(files)
                        uploadFile(files);
                        console.log(files);
                        }} 
                      />
                    </button>
                  </div>
                </section>
                <label className={styles.inputGroup}>
                  <p>Enter your name *</p>
                  <input onChange={e => {setUserName(e.target.value)}} value={userName} type="text" required/>
                </label>
                <label className={styles.inputGroup}>
                  <p>Enter your email *</p>
                  <input onChange={e => {setEmail(e.target.value)}} value={email} type="text" placeholder={'hello@avioflagos.io'} required />
                </label>
                <label className={styles.inputGroup}>
                  <p>Special Request?</p>
                  <textarea placeholder="Textarea" onChange={e => {setUserStory(e.target.value)}} value={userStory} required></textarea>
                </label>
                </>
  )
}

export default function Home() {
  const [ticketType, setTicketType] = useState("regular");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [ticketHeader, setTicketHeader] = useState("Ticket Selection");
  const [steps, setSteps] = useState(1);
  const [profileImgSrc, setProfileImgSrc] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userStory, setUserStory] = useState("");
  const [firstpage, setFirstPae] = useState(true)




  const handleQuantityChange = (event) => {
    setTicketQuantity(event.target.value);
  };


  const captureRef = useRef(null);
  const handleDownload = async () => {
    if (captureRef.current) {
      const rect = captureRef.current.getBoundingClientRect();
      const canvas = await html2canvas(captureRef.current, {backgroundColor: '#02191d', width: rect.width, height: rect.height});
      canvas.style.height = "auto";
      canvas.style.background = "none";
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "ticket.png";
      link.click();
    }
  };

  return (
    <Context.Provider value={{ ticketType, userName, setUserName, setTicketType, handleQuantityChange, ticketQuantity, ticketHeader, steps, profileImgSrc, setProfileImgSrc, email, setEmail, userStory, setUserStory }}>
    <section className={styles.container}>
      <Navprogress />
      <section style={ticketHeader === "Ready" ? {border: 'none', background: 'none'} : null} className={styles.innerContainer}>
          {
            steps === 1 ? <Ticketselection ticketType={ticketType} setTicketType={setTicketType} handleQuantityChange={handleQuantityChange} ticketQuantity={ticketQuantity} /> : steps === 2 ? <Attendeedetails /> : <Ticketready ref={captureRef} />
          }

              {/* Buttons */}
              <div className={styles.buttonGroup}>
                  {
                    steps === 3 ? <Button onClick={() => {
                      scrollTo({ top: 0, behavior: 'smooth' });
                      setSteps(1);
                      setTicketHeader("Ticket Selection");
                      setTicketQuantity(1);
                      setTicketType("regular");
                      setProfileImgSrc("")
                      setEmail("")
                      setUserName("")
                      setFirstPae(true)
                    }}>Book Another Ticket</Button> 
                    :
                    steps > 1 ? <Button onClick={() => {
                      scrollTo({ top: 0, behavior: 'smooth' });
                      setSteps(steps >= 1 ? steps - 1 : 1);
                      setTicketHeader(steps === 2 ? "Ticket Selection" : steps === 3 ? "Attendee Details" : "Ready");
                  }}>Previous</Button>
                  :
                  <Button>Cancel</Button>
                  }
                  {steps !== 3 ? <Button onClick={() => {
                    if(email && userName && profileImgSrc || firstpage){
                      scrollTo({ top: 0, behavior: 'smooth' });
                      setTicketHeader(steps === 1 ? "Attendee Details" : steps === 2 ? "Ready" : "Ticket Selection");
                      setSteps(steps < 3 ? steps + 1 : 3);
                      setFirstPae(false)
                    }else{
                      alert('Fill in the required elements')
                    }
                }}>
                  Next
                </Button> : <Button onClick={() => {
                  handleDownload();
                }}>Download Ticket</Button>
                }
          </div>
        </section>
      </section>
      </Context.Provider>
    );
  }



  export { Context };