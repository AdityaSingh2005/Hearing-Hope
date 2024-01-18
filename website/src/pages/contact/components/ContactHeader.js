import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the link component
import styles from '../styles/contact.module.css';


const ContactHeader = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.rowCenter}>
          <div className={`${styles.colLg10} ${styles.colMd12}`}>
            <div className={styles.wrapper}>
              <div className={`${styles.colMd5} ${styles.flexAlignStretch}`}>
                <div className={styles.infoWrap}>
                  <h3 className={`${styles.mb4} ${styles.mtMd4}`}>Looking for the best Hearing Test in town?</h3>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/gps.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p style={{ lineHeight: '25px' }}>
                        <span style={{ color: '#ff6600' }}><b>Address:</b></span> G-14, Ground Floor, Kings Mall, Twin District Centre, Sector 10, Rohini.
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/call.png' alt='call' height={50} width={50} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Phone:</b></span> <a href="tel://9711871168">+91 9711871168</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/email.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Email:</b></span>{' '}
                        <Link href="mailto:info@yoursite.com">Hearinghope@gmail.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.colMd7} ${styles.flexAlignStretch}`}>
                <div className={styles.contactWrap}>
                  <form className={styles.formContainer} method="POST" id={styles.contactForm} name="contactForm" >
                    <div className={styles.row}>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="text"
                            className={styles.formControl}
                            name="Name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="email"
                            className={styles.formControl}
                            name="Email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type='tel'
                            className={styles.formControl}
                            name="Phone Number"
                            id="subject"
                            placeholder="+91..."
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <textarea
                            name="message"
                            className={styles.textareaControl}
                            id="Message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                       <div className={styles.formGroup}>
                        <input
                         type="submit"
                         className={styles.btnPrimary}
                         value="Submit"
                        />
                        <div className={styles.submitting}></div>
                       </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
