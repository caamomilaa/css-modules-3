import styles from './social-media-container.module.css';

const SocialMediaContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default SocialMediaContainer;
