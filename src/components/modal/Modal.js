import { createPortal } from "react-dom";
import "./modal.scss";

export default function Modal(props) {
  return createPortal(
    <>
      <div className="portalOverlay">
        <div className="portalContent">{props.children}</div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
