import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#contact" className="logo">genius.</a>
                </div>
                <div className="itemContent">
                    <Person />
                    <span>+55 48 98802-6426</span>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}