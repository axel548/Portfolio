// import React from 'react';
import Tittle from '../Components/Tittle';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+502 4230 2250'} text2={''} title={'Phone'} />
                    <ContactItem icon={email} text1={'axel.aatl@gmail.com'} text2={''} title={'Email'} />
                    <ContactItem icon={location} text1={'Guatemala city, Guatemala'} text2={''} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
