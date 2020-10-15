import { Menu } from "antd";
import Item from "antd/lib/list/Item";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useCallback, useState } from "react";
import useSWR from "swr";
import MaskCard from "../components/baikeCards/maskCard";
import { host } from "../utils/utils";
import "./baike.scss";
import { baikeMaskCard, footerMsakCard } from "./common";

function BaikePage() {
  //@ts-ignore
  const { searchConfig, setSearchConfig } = useState([] as never);

  const { data } = useSWR(`${host}/getCatalog`);

  const handleClick = useCallback((e: any) => {
    console.log(e);
  }, []);

  const getMenu = useCallback(() => {
    return (
      <Menu
        onSelect={(e) => {
          console.log(e);
        }}
        onClick={handleClick}
        style={{ width: 300 }}
        mode="vertical"
      >
        {data?.children.map((child: any) => {
          return (
            <SubMenu
              key={`${child?.value?.latinName}/${child?.value?.name}`}
              title={
                <span>
                  <div className="titile-name">{child?.value?.name}</div>
                  <div className="title-latinName">
                    {child?.value?.latinName}
                  </div>
                </span>
              }
            >
              {getSubMenu(child?.children || [])}
            </SubMenu>
          );
        })}
      </Menu>
    );
  }, [data]);

  const getSubMenu = (bfChildren: any[]) => {
    return bfChildren.map((child) => {
      if (child.children) {
        return (
          <SubMenu
            key={`${child?.value?.latinName}/${child?.value?.name}`}
            title={child?.value?.name}
            onTitleClick={(e) => {
              console.log(e);
            }}
          >
            {getSubMenu(child?.children || [])}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={child?.value?.latinName}>
          {child?.value?.name}
        </Menu.Item>
      );
    });
  };

  return (
    <div className="baike-page">
      <div className="top-content">
        <div className="left-menu">{getMenu()}</div>
        <div className="right-content">
          {!searchConfig && (
            <div className="right-cards-list">
              {baikeMaskCard.map((cardItem) => {
                return (
                  <MaskCard
                    imgUrl={cardItem.img}
                    name={cardItem.name}
                    latinName={cardItem.latinName}
                  ></MaskCard>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        {!searchConfig && (
          <div className="bottom-content">
            <div className="footer-title">经典蝶蛾</div>
            <div className="footer-cards-list">
              {footerMsakCard.map((cardItem) => {
                return (
                  <MaskCard
                    imgUrl={cardItem.img}
                    name={cardItem.name}
                    latinName={cardItem.latinName}
                    useFooter={true}
                    footerChildren={cardItem.footer}
                  ></MaskCard>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BaikePage;
