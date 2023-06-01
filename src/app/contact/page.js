"use client"
import styles from '@/app/contact/contact.module.css'
import Link from "next/link";
import {Mulish} from "next/font/google";
import {useState} from "react";



const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
});



function contact() {

const[user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
})

const [status, setStatus] = useState(null);


function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({...prevUser, [name] : value}));
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}



  return (
  
  
           <div className={styles.section}>
             
            <div className={styles.container}>
                <div className={styles.grid}>
            
                    <div className={styles.grid_card}>
                        <i> 💌 </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="mailto:mdsamir13968@gmail.com">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i> 📱 </i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="https://www.instagram.com/md_samir92">  Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i>  ⌨</i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/" className={styles.anchorLink}>  Ask The Community <span>-&gt;</span></Link>
                    </div>

                </div>
            </div>
           
      
<h2>Send Your <mark>Details</mark> </h2>

  <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           value={user.email}
                           onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={mulish.className}
                           value={user.phone}
                           onChange={handleChange}
                           required
                            autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={mulish.className}
                               value={user.message}
                               onChange={handleChange}
                               required
                                autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.btn}>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!🙂</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>

        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8598836045694!2d88.29019411443356!3d22.546920939596063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279a4f4de010d%3A0x30e59320ebc2678a!2sDream%20Palace!5e0!3m2!1sen!2sin!4v1660218723995!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    );
};


export default contact