import * as React from "react";
import { CardBtn } from "../cardBtn/cardBtn";
import "./secondCard.scss";

class Props {
  butItem: {
    name: string;

    latinName: string;

    img: string;

    className?: string;
  } = {} as any;
}

export function SecondCard(props: Props = new Props()) {
  const { butItem } = props;
  return (
    <div className={`second-card ${butItem.className}`}>
      <div
        className="top-content"
        style={{ backgroundImage: `url(${butItem.img})` }}
      ></div>
      <div className="bottom-content">
        <div className="text-name">{butItem.name}</div>
        <div className="text-latinName">{butItem.latinName}</div>
        <CardBtn onClick={() => {}} useBackground={false}></CardBtn>
      </div>
    </div>
  );
}
