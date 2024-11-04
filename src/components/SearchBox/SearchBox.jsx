import style from "./searchbox.module.css";
import App from "../../App";

export default function SearchBox({ value, onChange }) {
    return (
        <label className={ style.labelForm} htmlFor="search">Find contacts by name
    <input
      value={value}
      onChange={onChange}
      className={style.inpurSearch}
      type="text"
      name="Search" id="search"
            />
            </label>
  );
}
