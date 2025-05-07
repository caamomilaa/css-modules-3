// import styles from './overview-item.module.css';
const OverviewItem = ({
	text,
	socialmedia,
	number,
	// color,
	icon,
	percentage
}) => {
	return (
		<article>
			<div>
				<span>{text}</span>
				<img src={socialmedia} alt='' />
			</div>
			<div>
				<span>{number}</span>
				<div>
					<img src={icon} alt='' />
					<p>{percentage}</p>
				</div>
			</div>
		</article>
	);
};
export default OverviewItem;
