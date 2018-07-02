import "./styles.scss";
import * as React from "react";
import * as bem from "b_";

const b = bem.with("Avatar");

interface AvatarProps {
  src: string;
}

class Avatar extends React.PureComponent<AvatarProps> {
  render() {
    const { src } = this.props;

    return (
      <img
        alt=""
        src={src}
        className={b()}
      />
    );
  }
}

export default Avatar;
