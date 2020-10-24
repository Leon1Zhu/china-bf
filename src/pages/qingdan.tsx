import React, { useEffect, useMemo, useState } from "react";
import Swiper from "swiper";
import "./swiper.css";
import "./qingdan.scss";

function QingdanPage() {
  const [swiper, setSwiper] = useState(null as any);

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      slidesPerView: 2,
    });

    setSwiper(mySwiper as any);
  }, []);

  return useMemo(() => {
    return (
      <div className="qingdan-page">
        <div className="title">蝶蛾清单</div>
        <div className="text text1">
          亚洲南部蝴蝶品种名单(包括区域及国家) Checklists of Butterflies of
          South Asian Biodiversity Hotspots: 南亚生物多样性热点蝴蝶清单:
        </div>
        <div className="text text2">
          The Western Ghats: 西高止山脉 336 species 336种.
        </div>
        <div className="text text3">
          Other Checklists: 其他清单: Paul Van Gasse. 2014. Annotated checklist
          of the Butterflies of the Indo-Burmese region. Download the Paul Van
          Gasse. 2014。印度-缅甸地区蝴蝶的注释清单。下载Word (.doc) Word (.
          doc), pdf Pdf 格式, or ，或open office (.odt) 开放办公室(. odt) format
          files. 格式化文件
        </div>
        <div className="text text4">
          Cite this page along with its URL as: 引用这个页面和它的 URL 如下:
          Kunte, K. 2020. Species Checklists, Including Regional And National,
          Of Butterflies Of S. Asia . In Kunte, K., S. Sondhi, and P. Roy (Chief
          Editors). Butterflies of India, v. 3.00. Indian Foundation for
          Butterflies.
        </div>
        <div className="text text5">
          2020.亚洲南部蝴蝶种类清单，包括区域和国家。在 Kunte，k，s. Sondhi，和
          p. Roy (主编)。印度的蝴蝶，3.00版。印度蝴蝶基金会。
        </div>

        <div
          className="btn prev-btn iconfont iconzuojiantou"
          onClick={() => {
            swiper.slidePrev();
          }}
        ></div>
        <div
          className="btn next-btn iconfont iconyoujiantou"
          onClick={() => {
            swiper.slideNext();
          }}
        ></div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require("../imgs/qingdan2.png")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../imgs/qingdan2.png")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("../imgs/qingdan2.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }, [swiper]);
}

export default QingdanPage;
