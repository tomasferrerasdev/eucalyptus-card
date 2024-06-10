import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footerRight}>
          <Image src={`/images/logo.svg`} alt="logo" width={172} height={172} />
          <div className={styles.footer__container__links}>
            <div className={styles.footer__container__links__content}>
              <p className="p">sales@eucalyptuscard.com</p>
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.943 10.1543C1.07627 10.1543 0.373573 10.857 0.373499 11.7238C0.373573 12.5905 1.07627 13.2932 1.943 13.2933L1.943 10.1543ZM31.1667 12.8335C31.7796 12.2206 31.7796 11.2269 31.1667 10.614L21.1789 0.626136C20.566 0.0132511 19.5722 0.0132509 18.9593 0.626135C18.3465 1.23902 18.3465 2.23277 18.9593 2.84566L27.8374 11.7238L18.9593 20.6019C18.3465 21.2147 18.3465 22.2085 18.9593 22.8214C19.5722 23.4343 20.566 23.4343 21.1789 22.8214L31.1667 12.8335ZM1.943 13.2933L30.057 13.2933L30.057 10.1543L1.943 10.1543L1.943 13.2933Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.footer__container__links__content}>
              <p className="p">904 326 8600</p>
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.943 10.1543C1.07627 10.1543 0.373573 10.857 0.373499 11.7238C0.373573 12.5905 1.07627 13.2932 1.943 13.2933L1.943 10.1543ZM31.1667 12.8335C31.7796 12.2206 31.7796 11.2269 31.1667 10.614L21.1789 0.626136C20.566 0.0132511 19.5722 0.0132509 18.9593 0.626135C18.3465 1.23902 18.3465 2.23277 18.9593 2.84566L27.8374 11.7238L18.9593 20.6019C18.3465 21.2147 18.3465 22.2085 18.9593 22.8214C19.5722 23.4343 20.566 23.4343 21.1789 22.8214L31.1667 12.8335ZM1.943 13.2933L30.057 13.2933L30.057 10.1543L1.943 10.1543L1.943 13.2933Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.sitemap}>
          <h3>Sitemap</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.sitemap}>
          <h3>Products</h3>
          <ul>
            <li>Design</li>
            <li>Custom card</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
