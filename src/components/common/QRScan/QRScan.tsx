import Image from 'next/image';
import styles from './QRScan.module.scss';

export const QRScan = () => {
  return (
    <div className={styles.qrscan}>
      <Image src={`/images/qrcode.svg`} alt="qr" width={92} height={92} />
      <p>Get the app</p>
    </div>
  );
};
