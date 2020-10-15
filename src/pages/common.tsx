import React from "react";

export const firstCardList = [
  {
    name: "有喙亚目(旋喙亚目)",
    latinName: "lossata",
    img: require("../imgs/first-2.png"),
  },
  {
    name: "无旋喙亚目",
    latinName: "Aglossata",
    img: require("../imgs/first-3.png"),
  },
];

export const secondCardList = [
  {
    name: (
      <span>
        有喙亚目(旋喙亚目)/<span className="strong">异脉下目</span>
      </span>
    ),
    latinName: "lossata/Heteroneura",
    img: require("../imgs/first-4.png"),
  },
  {
    name: (
      <span>
        有喙亚目(旋喙亚目)/<span className="strong">冠蛾下目</span>
      </span>
    ),
    latinName: "lossata/Lophocoronina",
    img: require("../imgs/first-5.png"),
  },
  {
    name: (
      <span>
        有喙亚目(旋喙亚目)/<span className="strong">蝙蝠蛾下目</span>
      </span>
    ),
    latinName: "lossata/Exoporia",
    img: require("../imgs/first-6.png"),
  },
];

export const thirdCardList = [
  {
    name: (
      <span>
        有喙亚目(旋喙亚目)/异脉下目/双孔部/
        <span className="strong">伪螟蛾总科伪螟蛾总科</span>
      </span>
    ),
    latinName: "lossata/Heteroneura/Division/Simaethistoidea",
    img: require("../imgs/first-7.png"),
  },
  {
    name: (
      <span>
        有喙亚目(旋喙亚目)/异脉下目/双孔部/
        <span className="strong">谷蛾总科(榖蛾总科)</span>
      </span>
    ),
    latinName: "lossata/Heteroneura/Division/Tineoidea",
    img: require("../imgs/first-8.png"),
  },
  {
    name: (
      <span>
        异石蛾亚目(异蛾亚目)/
        <span className="strong">异石蛾总科</span>
      </span>
    ),
    latinName: "Heterobathmiina/Heterobathmioidea",
    img: require("../imgs/first-9.png"),
  },
  {
    name: (
      <span>
        轭翅亚目(小翅蛾亚目)/
        <span className="strong">小翅蛾总科</span>
      </span>
    ),
    latinName: "Zeugloptera/Micropterigoidea",
    img: require("../imgs/first-10.png"),
  },
];

export const baikeMaskCard = [
  {
    name: "无旋喙亚目",
    latinName: "Aglossata",
    img: require("../imgs/mask-card-1.png"),
  },
  {
    name: "有喙亚目/旋喙亚目",
    latinName: "Glossata",
    img: require("../imgs/mask-card-2.png"),
  },
  {
    name: "异石蛾亚目/异蛾亚目",
    latinName: "Heterobathmiina ",
    img: require("../imgs/mask-card-3.png"),
  },
  {
    name: "轭翅亚目/小翅蛾亚目",
    latinName: "Zeugloptera ",
    img: require("../imgs/mask-card-4.png"),
  },
];

export const footerMsakCard = [
  {
    name: "异脉下目",
    latinName: "Heteroneura",
    img: require("../imgs/mask-card-5.png"),
    footer: (
      <div className="latinname-tips">
        有喙亚目(旋喙亚目)/异脉下目
        <div>lossata/Heteroneura</div>
      </div>
    ),
  },
  {
    name: "冠蛾下目",
    latinName: "Lophocoronina",
    img: require("../imgs/mask-card-6.png"),
    footer: (
      <div className="latinname-tips">
        有喙亚目(旋喙亚目)/冠蛾下目
        <div>lossata/Lophocoronina</div>
      </div>
    ),
  },
  {
    name: "蝙蝠蛾下目",
    latinName: "Exoporia",
    img: require("../imgs/mask-card-7.png"),
    footer: (
      <div className="latinname-tips">
        有喙亚目(旋喙亚目)/蝙蝠蛾下目
        <div>lossata/Exoporia</div>
      </div>
    ),
  },
  {
    name: "卵翅蛾下目",
    latinName: "Neopseustina",
    img: require("../imgs/mask-card-8.png"),
    footer: (
      <div className="latinname-tips">
        有喙亚目(旋喙亚目)/卵翅蛾下目
        <div>lossata/Neopseustina</div>
      </div>
    ),
  },
];
