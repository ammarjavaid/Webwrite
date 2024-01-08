import { createPortal } from "react-dom";
import "./veriticalModal.scss";

export default function VerticalModal(props) {
  return createPortal(
    <>
      <div className="vertical_portalOverlay">
        <div className="vertical_portalContent">{props.children}</div>
      </div>
    </>,
    document.getElementById("vertical-modal-root")
  );
}
