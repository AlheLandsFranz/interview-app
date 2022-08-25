import { Link } from "react-router-dom";



export default function Header(): JSX.Element {

    return (
        <div style={{
            display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundImage: 'url("./../utils/header.jpg")',
            padding: '2rem'
        }}>
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/data'><h3>Data Table</h3></Link>
            <Link to='/form'><h3>Form</h3></Link>
        </div>
    )
}