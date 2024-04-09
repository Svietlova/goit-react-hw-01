import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({friend: { avatar, name, isOnline }}) {
  return (
    <div className={css['friend-item-container']}>
      <img className={css['friend-item-avatar']} src={avatar} alt={`Avatar ${name}`} width="48" />
      <p className={css['friend-item-name']}>{name}</p>
      <p className={clsx(css['friend-item-status'], isOnline ? css['online'] : css['offline'])}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
