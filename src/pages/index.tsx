/**
 * @description 中国蝶蛾首页
 */
import React from "react";
import { CardBtn } from "../components/cardBtn/cardBtn";
import { SecondCard } from "../components/indexCard/secondCard";
import { firstCardList, secondCardList, thirdCardList } from "./common";
import "./index.scss";

function getFirstCard(item: any) {
  return (
    <div
      className="first-card-item"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="card-content">
        <div className="item-content">
          <div className="mask"></div>
          <div className="text-name">{item.name}</div>
          <div className="text-latinname">{item.latinName}</div>
        </div>
        <CardBtn onClick={() => {}} useBackground></CardBtn>
      </div>
    </div>
  );
}

function DeIndex() {
  return (
    <div className="de-main-page">
      <div className="all-de-card">
        <div className="all-card-detail">
          <span className="detail-title">鳞翅目昆虫目前已知超过160000种</span>
          <div className="detail-content">
            <div className="mask"></div>
            <div className="text">
              由人们熟悉的蝶和蛾组成蝴蝶白天活动，蛾类大多夜晚活动，但物种数占鳞翅目的90%以上，不少蛾类的幼虫是农、林业生产中的重要害虫。
            </div>
          </div>
          <CardBtn onClick={() => {}} useBackground></CardBtn>
        </div>
      </div>
      <div className="first-class">
        {firstCardList.map((item) => {
          return getFirstCard(item);
        })}
      </div>
      <div className="second-class">
        {secondCardList.map((item) => {
          return <SecondCard butItem={item as any}></SecondCard>;
        })}
      </div>
      <div className="third-class">
        {thirdCardList.map((item) => {
          return <SecondCard butItem={item as any}></SecondCard>;
        })}
      </div>
      <div className="visit-content">
        您是第<span className="visit-count">2345</span>位访客
      </div>
    </div>
  );
}

export default DeIndex;
