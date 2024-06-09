import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'white' | 'black';
}

export const Button = ({
  children,
  variant = 'white',
  className,
}: ButtonProps) => {
  return (
    <div className={`${className} ${styles.button} ${styles[variant]}`}>
      <span>{children}</span>
      <svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_32_16)">
          <path
            d="M0.904785 7H18.0953"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7619 0.875C11.7619 5.6875 18.0952 7 18.0952 7C18.0952 7 11.7619 7.875 11.7619 13.125"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_32_16">
            <rect width="19" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
