import { slide as Menu } from "react-burger-menu";

export default function Sidebar() {
   return(
        <Menu>
            <a id="home" className="menu-item" href="/">Inicio</a>
            <a id="home" className="menu-item" href="/citas">Citas</a>
            <a id="about" className="menu-item" href="/servicios">Servicios</a>
            <a id="contact" className="menu-item" href="/usuarios">Usuarios</a>
            <a id="settings" className="menu-item" href="/mecanicos">Mecanicos</a>
            <a id="settings" className="menu-item" href="/agenda">Agenda</a>
        </Menu>
   )
}