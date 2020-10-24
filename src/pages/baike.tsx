import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import MaskCard from "../components/baikeCards/maskCard";
import { host } from "../utils/utils";
import "./baike.scss";
import BaikeDetail from "./baikeDetail";
import { baikeMaskCard, footerMsakCard } from "./common";

function BaikePage(props: any) {
  const [searchConfig, setSearchConfig] = useState([] as any);

  const { data } = useSWR(`${host}/getCatalog`);

  const { data: showResult } = useSWR(
    () =>
      `${host}/getSpeciesByLatinName?latinName=${searchConfig?.[0]?.latinName}`
  );

  useEffect(() => {
    const location = props.location;
    if (location?.state?.latinName) {
      setSearchConfig([
        {
          latinName: location.state.latinName,
          name: location.state.name,
        },
      ]);
    }
  }, [props.location]);
  const handleClick = useCallback(
    (e: any) => {
      const nameConfig = e.key.split("/");
      setSearchConfig([
        {
          latinName: nameConfig[0],
          name: nameConfig[1],
        },
      ]);
    },
    [setSearchConfig]
  );

  const getSubMenu = useCallback(
    (bfChildren: any[]) => {
      return bfChildren.map((child) => {
        if (child.children) {
          return (
            <SubMenu
              key={`${child?.value?.latinName}/${child?.value?.name}`}
              title={child?.value?.name}
              onTitleClick={handleClick}
            >
              {getSubMenu(child?.children || [])}
            </SubMenu>
          );
        }

        return (
          <Menu.Item key={`${child?.value?.latinName}/${child?.value?.name}`}>
            {child?.value?.name}
          </Menu.Item>
        );
      });
    },
    [handleClick]
  );

  const getMenu = useCallback(() => {
    return (
      <Menu
        onSelect={handleClick}
        onClick={handleClick}
        style={{ width: 300, marginRight: "2px" }}
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
  }, [data, getSubMenu, handleClick]);

  return React.useMemo(() => {
    return (
      <div className="baike-page">
        <div className="top-content">
          <div className="left-menu">{getMenu()}</div>
          <div className="right-content">
            {searchConfig.length === 0 && !showResult?.length ? (
              <div className="right-cards-list">
                {baikeMaskCard.map((cardItem) => {
                  return (
                    <MaskCard
                      imgUrl={cardItem.img}
                      name={cardItem.name}
                      latinName={cardItem.latinName}
                      key={cardItem.latinName}
                    ></MaskCard>
                  );
                })}
              </div>
            ) : (
              <BaikeDetail searchContent={searchConfig} data={showResult} />
            )}
          </div>
        </div>
        <div className="footer">
          {searchConfig.length === 0 && !showResult?.length && (
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
                      key={cardItem.latinName}
                    ></MaskCard>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }, [searchConfig, getMenu, showResult]);
}

export default BaikePage;
