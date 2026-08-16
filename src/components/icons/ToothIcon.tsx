import React from "react";

export default function ToothIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  const { className = "", ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M7.2 4.8C5.1 4.8 3.7 6.3 3.7 8.7C3.7 10.4 4.4 11.9 5.3 13.5C6.2 15.1 6.6 16.7 6.9 18C7.2 19.4 7.5 21 8.9 21C10 21 10.5 20 10.9 18.9L11.3 17.8C11.5 17.1 11.8 16.7 12 16.7C12.2 16.7 12.5 17.1 12.7 17.8L13.1 18.9C13.5 20 14 21 15.1 21C16.5 21 16.8 19.4 17.1 18C17.4 16.7 17.8 15.1 18.7 13.5C19.6 11.9 20.3 10.4 20.3 8.7C20.3 6.3 18.9 4.8 16.8 4.8C15.5 4.8 14.5 5.3 13.6 6.1C13 6.6 12.4 7.1 12 7.1C11.6 7.1 11 6.6 10.4 6.1C9.5 5.3 8.5 4.8 7.2 4.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.2 8.2C8.2 7.2 9 6.5 10 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}