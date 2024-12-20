import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CopyIcon = (props: any) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 3V12C6 12.3978 6.15804 12.7794 6.43934 13.0607C6.72064 13.342 7.10218 13.5 7.5 13.5H13.5C13.8978 13.5 14.2794 13.342 14.5607 13.0607C14.842 12.7794 15 12.3978 15 12V5.4315C15 5.23167 14.96 5.03386 14.8825 4.84968C14.805 4.66551 14.6914 4.49868 14.5485 4.359L12.0623 1.9275C11.782 1.65349 11.4057 1.50005 11.0138 1.5H7.5C7.10218 1.5 6.72064 1.65804 6.43934 1.93934C6.15804 2.22064 6 2.60218 6 3Z"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13.5V15C12 15.3978 11.842 15.7794 11.5607 16.0607C11.2794 16.342 10.8978 16.5 10.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V6.75C3 6.35218 3.15804 5.97064 3.43934 5.68934C3.72064 5.40804 4.10218 5.25 4.5 5.25H6"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CopyIcon;
