import React from "react";
import "./Button.scss";
import {trackEvent} from "../../analytics";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        onClick={() =>
          trackEvent("button_click", {button_text: text, link_url: href})
        }
      >
        {text}
      </a>
    </div>
  );
}
