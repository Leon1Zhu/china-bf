import React from "react";
import "./about.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="left-content">
        <img src={require("../imgs/about.png")} alt="" />
      </div>
      <div className="right-content">
        <div className="top-text">
          <div className="title">关于我们</div>
          <div className="top-text-content">
            <div className="left-text-content">
              鳞翅目昆虫世界已知超过160000种，由人们熟悉的蝶和蛾组成。蝴蝶白天活动，蛾类大多夜晚活动，但物种数占鳞翅目的90%以上，不少蛾类的幼虫是农、林业生产中的重要害虫。
            </div>
            <div className="right-text-content">
              本网站以拍自中国境内的生态图片为主展示中国丰富的蝴蝶和蛾类的物种多样性，为大众科普和物种鉴定提供参考。
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <div className="bottom-title">有任何建议与意见,欢迎联系我们:</div>

          <div className="link-content">联系电话： 13777777777</div>
          <div className="link-content">电子邮箱: zephyrus168@aliyun.com</div>

          <div className="wechat-code">
            <img></img>
            <div> 欢迎扫码我们的小程序</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
