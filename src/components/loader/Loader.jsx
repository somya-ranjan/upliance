import { memo } from "react";

// // static import
import { MAIN_LOADER } from "../../assets/loader";
import "./style.scss";

function Loader() {
  return (
    <div className="main_loader_container">
      <img src={MAIN_LOADER} alt="main-loader" />
    </div>
  );
}

export default memo(Loader);
