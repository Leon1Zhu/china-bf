import React from "react";
import "./maskCard.scss";

class Props {
  imgUrl: string = "";

  name: string = "";

  latinName: string = "";

  useFooter? = false;

  footerChildren?: any;
}

export default function MaskCard(props: Props) {
  return (
    <div
      className="mask-card"
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      <div className="mask" />

      <div className="text-content">
        <div className="name">{props.name}</div>
        <div className="latinName">{props.latinName}</div>
        {props.useFooter && props.footerChildren}
      </div>
    </div>
  );
}
