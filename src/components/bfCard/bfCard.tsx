import React, { useCallback, useMemo } from "react";
import "./bfCard.scss";

class Props {
  BFItem: any = {};

  isModal? = false;

  onClick?: Function = () => {};
}

export const nameLoopList = [
  "order",
  "suborder",
  "infoOrder",
  "division",
  "superfamily",
  "family",
  "species",
];

function formatDate(date: any, format: any) {
	if (!date) return;
	if (!format)
		format = "yyyy-MM-dd";
	switch (typeof date) {
	case "string":
		date = new Date(date.replace(/-/, "/"));
		break;
	case "number":
		date = new Date(date);
		break;
	}
	if (!(date instanceof Date)) return;
	var dict = {
		"yyyy" : date.getFullYear(),
		"M" : date.getMonth() + 1,
		"d" : date.getDate(),
		"H" : date.getHours(),
		"m" : date.getMinutes(),
		"s" : date.getSeconds(),
		"MM" : ("" + (date.getMonth() + 101)).substr(1),
		"dd" : ("" + (date.getDate() + 100)).substr(1),
		"HH" : ("" + (date.getHours() + 100)).substr(1),
		"mm" : ("" + (date.getMinutes() + 100)).substr(1),
		"ss" : ("" + (date.getSeconds() + 100)).substr(1)
	} as any;
	return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
		return dict[arguments[0]];
	});
}

export const latinNameLoopList = [
  "orderLatin",
  "suborderLatin",
  "infoOrderLatin",
  "divisionLatin",
  "superfamilyLatin",
  "familyLatin",
  "speciesLatin",
];

function BfCard(props: Props = {} as any) {
  const getName = useCallback(() => {
    const { BFItem } = props;
    return nameLoopList.reduce((result, item, index) => {
      const name = BFItem?.[item];
      if (name) {
        if (index === 0) {
          return result + name;
        }
        return `${result} > ${name}`;
      }

      return result;
    }, "");
  }, [props]);

  const getLatinName = useCallback(() => {
    const { BFItem } = props;
    return latinNameLoopList.reduce((result, item, index) => {
      const name = BFItem?.[item];
      if (name) {
        if (index === 0) {
          return result + name;
        }
        return `${result}/${name}`;
      }
      return result;
    }, "");
  }, [props]);

  return useMemo(() => {
    const { BFItem, isModal } = props;
    return (
      <div
        className={`bf-card ${!isModal && "useShowStyle"}`}
        onClick={() => {
          props.onClick && props.onClick();
        }}
      >
        <div className="img-wrapper">
          <img className="bf-bg-img" src={BFItem?.imgUrl} alt="" />
        </div>

        <div className="bf-info-content">
          <div className="title-info">
            <div className="bf-title">{BFItem?.name}</div>
            <div className="bf-title-other-ifno-content">
              <div className="title-latinName">{BFItem?.latinName}</div>
              <div className="title-weiyima"></div>
            </div>
          </div>
          <div className="bottom-title-info">
            <div className="picture-info">
              <div className="pic-top">
                <span className="icon">©</span>
                <span className="user">{BFItem?.author}</span>
                <span className="text">摄于</span>
                <span className="time">{formatDate(new Date(BFItem?.createTime) || new Date() , 'yyyy-MM-dd')}</span>
              </div>
              <div className="pic-bottom">
      <span className="area">{BFItem?.location}</span>
              </div>
            </div>
            <div className="bf-type-breadcrumb">
              <div className="ttype-name">{getName()}</div>
              <div className="type-latin-name">{getLatinName()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [props, getLatinName, getName]);
}

export default BfCard;
