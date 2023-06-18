import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  let status;
  isOnline ? (status = 'online') : (status = 'offline');
    return (
      <li className={css.item}>
      <span className={`${css.status} ${css[status]}`}/>
      <img className={css.avatar} src={avatar} alt="User avatar" width="50px" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  props: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};