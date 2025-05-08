import styles from './social-media-item.module.css';

const SocialMediaItem = ({
	gradient,
	socialmedia,
	username,
	number,
	text,
	color,
	icon,
	update
}) => {
	const cardStyles = `${styles.card} ${styles[gradient]}`;
	const updateContainerStyles = `${styles.updatecontainer} ${styles[color]}`;
	return (
		<article className={cardStyles}>
			<div className={styles.socialmediacontainer}>
				<img src={socialmedia} alt='' />
				<span className={styles.user}>{username}</span>
			</div>
			<div className={styles.datacontainer}>
				<span className={styles.number}>{number}</span>
				<span className={styles.text}>{text}</span>
			</div>
			<div className={updateContainerStyles}>
				<img src={icon} alt='' />
				<span className={styles.updatetext}>{update}</span>
			</div>
		</article>
	);
};
export default SocialMediaItem;
