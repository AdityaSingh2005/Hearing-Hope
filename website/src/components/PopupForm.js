import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChtn1kg8jerQFj6t1dEP1Pwy0a9s0hEgI",
  authDomain: "hearinghope-96349.firebaseapp.com",
  projectId: "hearinghope-96349",
  storageBucket: "hearinghope-96349.appspot.com",
  messagingSenderId: "243314305458",
  appId: "1:243314305458:web:2a3f79b072265c45b35cab",
  measurementId: "G-WVMMKVE0G7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Message: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store data in Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), formData);
      console.log('Document written with ID: ', docRef.id);

      // Handle successful form submission

      // Close the popup form
      onClose();

      // Set a flag in localStorage to indicate that the popup has been shown
      localStorage.setItem('hasPopupBeenShown', 'true');

      // Navigate to the home page
      router.push('/');

      console.log('Form submitted successfully');
    } catch (error) {
      // Handle failed form submission
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the popup should be visible based on a flag in localStorage
    const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');
    if (!hasPopupBeenShown) {
      setIsVisible(true);
    }
  }, []);

  const handleCrossButtonClick = () => {
    setIsVisible(false);
    onClose();

    // Set a flag in localStorage to indicate that the popup has been shown
    localStorage.setItem('hasPopupBeenShown', 'true');

    // Navigate to the home page after closing the form
    router.push('/');
  };

  return (
    isVisible && (
      <div className={styles.popup}>
        <div className={styles.formContainer}>
          <center>
            <h1 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '35px' }}>Connect With Us</h1>
          </center>
          <label>Name: </label>
          <input type="text" placeholder="Your Name..." onChange={handleChange} />
          <label>Phone Number: </label>
          <input type="tel" placeholder="+91 ...." />
          <label>Email: </label>
          <input type="email" placeholder="@gmail.com" onChange={handleChange} />
          <label>Message: </label>
          <input type="text" placeholder="Optional..." onChange={handleChange} />

          <div className={styles.FormSubmit}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={handleCrossButtonClick} className={styles.btn}>
              Later
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupForm;
