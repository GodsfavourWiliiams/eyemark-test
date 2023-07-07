export const Heart = ({ strokeColor, bgColor }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

      <g transform="matrix(0.5 0 0 0.5 12 12)">
        <path
          transform=" translate(-25, -26.65)"
          d="M 25 44.296875 L 24.363281 43.769531 C 23.363281 42.941406 22.019531 42.027344 20.46875 40.96875 C 14.308594 36.765625 5 30.414063 5 20.285156 C 5 14.0625 10.097656 9 16.363281 9 C 19.714844 9 22.851563 10.457031 25 12.957031 C 27.148438 10.457031 30.289063 9 33.636719 9 C 39.902344 9 45 14.0625 45 20.285156 C 45 30.414063 35.691406 36.765625 29.53125 40.96875 C 27.976563 42.027344 26.636719 42.941406 25.636719 43.769531 Z"
          stroke-linecap="round"
          stroke={strokeColor}
          strokeWidth={2}
          fill={bgColor}
        />
      </g>
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

      <g transform="matrix(0.9 0 0 0.9 12 12)">
        <path
          transform=" translate(-12, -11.5)"
          d="M 12 17.877 L 18.831 22 L 17.018 14.23 L 23.053 9.002 L 15.106000000000002 8.328000000000001 L 12 1 L 8.894 8.328 L 0.947 9.002 L 6.982 14.23 L 5.169 22 L 12 17.877 z"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};
