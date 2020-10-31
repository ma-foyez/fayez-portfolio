import React, { useContext } from "react";
import "./Footer.css";
import StyleContext from "../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <footer className="text-center pb-2 mt-3">
       <p><strong>Made By M.A Foyez with ❤️ Heart </strong></p>
       <p>Copyright <i class="far fa-copyright"></i> {(new Date()).getFullYear()}-{(new Date()).getFullYear()+1} M.A Foyez</p>
    </footer>
  );
}
