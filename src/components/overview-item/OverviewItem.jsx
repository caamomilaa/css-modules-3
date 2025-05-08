import styles from './overview-item.module.css';
const OverviewItem = ({
	text,
	socialmedia,
	number,
	color,
	icon,
	percentage
}) => {
	const statsStyles = `${styles.statstext} ${styles[color]}`;
	return (
		<article className={styles.card}>
			<div className={styles.results}>
				<span className={styles.text}>{text}</span>
				<span className={styles.number}>{number}</span>
			</div>
			<div className={styles.smcontainer}>
				<img src={socialmedia} alt='' />
				<div className={styles.statscontainer}>
					<img src={icon} alt='' />
					<p className={statsStyles}>{percentage}</p>
				</div>
			</div>
		</article>
	);
};
export default OverviewItem;
