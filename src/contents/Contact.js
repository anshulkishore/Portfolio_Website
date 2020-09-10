import React, {Component} from 'react'
import ContactWidecard from '../components/ContactWidecard'

class Contact extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
                <h1 className="subtopic">My Contacts</h1>
                
                <ContactWidecard title="Email-ID" 
                contact="anshulkishore310@gmail.com" />
                
                <ContactWidecard title="Contact Number" 
                contact="+91-7607466759" />

            </div>    
        )
    }
}

export default Contact