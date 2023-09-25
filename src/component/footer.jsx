import { Link } from "react-router-dom"

import "../css/footer.css"

function Footer() {
    return (
        <div className="footer-case ">
            <ul className="f1">
                <li>Support</li>
                <li>Help Center</li>
                <li>Help CenterAirCover</li>
                <li>Supporting people with disabilities</li>
                <li>Cancellation options</li>
                <li>Our COVID-19 Response</li>
                <li>Report a neighborhood concern</li>
            </ul>
            <ul className="f2">
                <li>Community</li>
                <li>Airbnb.org: disaster relief housing</li>
                <li>Combating discrimination</li>
            </ul>
            <ul className="f3">
                <li>Hosting</li>
                <li><Link to="/airbnbyourhome">Airbnb your home</Link></li>
                <li>AirCover for Hosts</li>
                <li>Explore hosting resources</li>
                <li>Visit our community forum</li>
                <li>How to host responsibly</li>
                <li>Airbnb-friendly apartments</li>

            </ul>
            <ul className="f4">
                <li>Airbnb</li>
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Gift cards</li>
            </ul>
        </div>
    )
}
export default Footer