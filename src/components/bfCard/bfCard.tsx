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
