import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDown = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.103 12.778L16.81 6.08C16.8751 6.01455 16.9527 5.96283 17.0382 5.9279C17.1236 5.89298 17.2152 5.87556 17.3075 5.87668C17.3999 5.8778 17.491 5.89743 17.5756 5.93442C17.6602 5.9714 17.7365 6.02499 17.8 6.092C17.9301 6.22906 18.0016 6.41146 17.9994 6.60044C17.9972 6.78941 17.9213 6.97006 17.788 7.104L10.585 14.297C10.5204 14.3621 10.4434 14.4136 10.3586 14.4486C10.2739 14.4836 10.183 14.5013 10.0912 14.5007C9.99953 14.5002 9.90885 14.4813 9.8245 14.4453C9.74016 14.4093 9.66383 14.3569 9.6 14.291L2.205 6.72C2.07412 6.58446 2.00098 6.40341 2.00098 6.215C2.00098 6.02659 2.07412 5.84554 2.205 5.71C2.26931 5.64377 2.34626 5.59113 2.43129 5.55518C2.51631 5.51923 2.60769 5.5007 2.7 5.5007C2.79231 5.5007 2.88369 5.51923 2.96872 5.55518C3.05374 5.59113 3.13069 5.64377 3.195 5.71L10.103 12.778Z"
      fill="#535252"
    />
  </Svg>
);
export default ArrowDown;