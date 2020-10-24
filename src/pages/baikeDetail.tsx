import { Breadcrumb, Checkbox, Input, Tag, Modal } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import BfCard, {
  latinNameLoopList,
  nameLoopList,
} from "../components/bfCard/bfCard";
import "./baikeDetail.scss";

class Props {
  searchContent: any[] = [];

  data: any[] = [];
}

function BaikeDetail(props: Props) {
  const { data } = props;

  const [searcContent, setSearchContent] = useState("");

  const [searchKeContent, setSearchKeContent] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [modalItem, setModalItem] = useState({});

  const getTitle = useCallback(() => {
    const { data, searchContent } = props;

    const firstData = data?.[0] || {};

    const nameList = nameLoopList.map((item) => firstData[item]);
    const latinNameList = latinNameLoopList.map((item) => firstData[item]);

    const index = latinNameList.findIndex(
      (item) => item === searchContent?.[0]?.latinName
    );
    return {
      nameList: nameList.filter((item, itemIndex) => itemIndex <= index),
      latinNameList: latinNameList.filter(
        (item, itemIndex) => itemIndex <= index
      ),
    };
  }, [props]);

  const getAllTypes = useCallback(() => {
    const { data } = props;

    if (!data) {
      return [];
    }

    return Array.from(
      new Set(
        data
          .filter((item) => item.species)
          .map((item) => {
            return { label: item.species, value: item.species };
          })
      )
    );
  }, [props]);

  return useMemo(() => {
    const title = getTitle();
    const allTypes = getAllTypes();
    return (
      <div className="baike-detail-content">
        <div className="top-content">
          <div className="name-breadcrumb">
            <div className="nameList">
              <Breadcrumb separator=">">
                {title?.nameList?.map((item) => (
                  <Breadcrumb.Item>{item}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
            <div className="latin-name-list">
              <Breadcrumb separator=">">
                {title?.latinNameList?.map((item) => (
                  <Breadcrumb.Item>{item}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
          </div>
          <div className="search-input">
            <Input
              placeholder="请输入关键字"
              onChange={(value) => {
                setSearchContent(value.target.value);
              }}
              style={{ width: 220 }}
              suffix={<SearchOutlined />}
            />
          </div>
        </div>
        <div className="center-content">
          <div className="search-ke-content">
            <div className="top-type">
              <div className="all-type-text">所有分类 &gt;</div>
              <div className="type-list-content">
                {searchKeContent.map((item) => (
                  <Tag
                    closable
                    onClose={() => {
                      setSearchKeContent(
                        searchKeContent.filter((key) => key !== item)
                      );
                    }}
                  >
                    {item}
                  </Tag>
                ))}
              </div>
              <div className="open-btn">筛选</div>
            </div>
            <div className="bottom-type-list">
              <Checkbox.Group
                options={allTypes}
                value={searchKeContent}
                onChange={(e) => {
                  setSearchKeContent(e as any);
                }}
              />
            </div>
          </div>
        </div>
        <div className="footer-content">
          {data
            ?.filter(
              (item) =>
                (searchKeContent.length === 0 ||
                  searchKeContent.includes(item.species as never)) &&
                (!searcContent || item.name.includes(searcContent))
            )
            ?.map((item) => (
              <BfCard
                BFItem={item}
                onClick={() => {
                  setModalVisible(true);
                  setModalItem(item);
                }}
              />
            ))}
        </div>

        <Modal title="" className="baike-modal" visible={modalVisible}>
          <CloseOutlined
            onClick={() => {
              setModalVisible(false);
            }}
          />
          <BfCard BFItem={modalItem} isModal onClick={() => {}}></BfCard>
        </Modal>
      </div>
    );
  }, [
    data,
    getTitle,
    searcContent,
    searchKeContent,
    getAllTypes,
    modalVisible,
    modalItem,
  ]);
}

export default BaikeDetail;
