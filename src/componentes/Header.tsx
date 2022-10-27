import { Link } from "react-router-dom";
import home from "./../utils/home.png";
import form from "./../utils/form.png";
import table from "./../utils/table.png";


export default function Header(): JSX.Element {

    return (
        <div style={{
            display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'rgba(220, 53, 69, 0.6)',
            padding: '2rem', borderRadius: '0px 0px 20px 20px'
        }}>
            <Link to='/'><img src={home} alt="Home" style={{width: '2.3rem'}}/></Link>
            <Link to='/data'><img src={table} alt="Data Table" style={{width: '2.3rem'}}/></Link>
            <Link to='/form'><img src={form} alt="Form" style={{width: '2.3rem'}}/></Link>
        </div>
    )
}