import GetUser from './GetUser.js';
import Navbar from './Navbar.js';
import SideNav from './SideNav.js';
import Footer from './Footer.js';

export default function ProfilePage(){
    return(
        <div>
            <Navbar/>
            <SideNav/>
            <GetUser/>
            <Footer/>
        </div>
    )


}