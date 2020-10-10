import { Button } from "antd";
import * as React from "react";
import "./cardBtn.scss";

class Props {
  onClick: Function = () => {};

  useBackground? = true;
}

export function CardBtn(props: Props) {
  const { useBackground, onClick } = props;
  console.log(useBackground);
  return (
    <Button
      className={`card-btn ${useBackground && "useBackground"}`}
      onClick={onClick as any}
    >
      了解更多
    </Button>
  );
}
