// import styles from './social-media-item.module.css';

const SocialMediaItem = ({
	// gradient,
	socialmedia,
	username,
	number,
	text,
	// color,
	icon,
	update
}) => {
	return (
		<article>
			<div>
				<img src={socialmedia} alt='' />
				<span>{username}</span>
			</div>
			<div>
				<span>{number}</span>
				<span>{text}</span>
			</div>
			<div>
				<img src={icon} alt='' />
				<span>{update}</span>
			</div>
		</article>
	);
};
export default SocialMediaItem;
