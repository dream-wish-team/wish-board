import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Favorite, Check } from '@material-ui/icons';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import React, { useContext } from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';

import AddingWishCard from '@/components/AddingWishCard';
import Avatar from '@/components/Avatar';
import Comments from '@/components/Comments/Comments';
import Price from '@/components/Price';
import StatsItem from '@/components/StatsItem/StatsItem';
import AuthContext from '@/context/AuthContex';
import styles from '@/pages/SingleWish/SingleWish.scss';
import FETCH_WISH_QUERY from '@/pages/SingleWish/query';
import { TUser, TDataWish, TGetWish } from '@/types/data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

type TWish = {
  nickname: string;
  wishId: string;
};

type TSingleWishProps = RouteComponentProps<TWish> & HTMLAttributes<HTMLDivElement>;

const SingleWish: FunctionComponent<TSingleWishProps> = ({ ...props }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { nickname, wishId } = props.match.params;
  const classes = useStyles();
  const { id, username, avatar } = useContext(AuthContext);
  const user = {
    id,
    username,
    avatar: {
      small: avatar.small,
      normal: avatar.small,
    },
  } as TUser;
  const { loading, data } = useQuery<TGetWish>(FETCH_WISH_QUERY, {
    variables: {
      wishId,
      username: nickname,
    },
  });

  const wishData = data?.getWish as TDataWish;
  const userWant = wishData?.active[0].user;
  const userCollections: Array<string> = ['Разное', 'День Рождения', 'Для дома', 'Новый год'];
  return (
    <div className={styles['wish-page']}>
      {loading ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles['wish-wrapper']}>
          <nav className={styles['wish-nav']}>
            <Link className={styles['wish-link']} to="/">
              <TrendingFlatIcon className={styles['arrow']} />
              Back
            </Link>
          </nav>
          <div className={styles['wish-content']}>
            <div className={styles['img-container']}>
              <Price price={wishData?.price} />
              <img alt={wishData.name} className={styles['wish-img']} src={wishData.image.normal} />
            </div>
            <div className={styles['data-container']}>
              <div className={styles['data-container_top']}>
                <div className={styles['user']}>
                  <Avatar user={userWant} size="normal" />
                  <span className={styles['user-name']}>{userWant.username}</span>
                  хочет
                </div>
                <div className={styles['button-container']}>
                  <MoreVertIcon />
                </div>
              </div>
              <h2 className={styles['product-name']}>{wishData.name}</h2>
              <div className={styles['product-info-container']}>
                <span>{wishData.createdAt}</span>
                <a href={wishData.originURL} className={styles['link-container']}>
                  {wishData.originURL}
                  <CallMadeIcon className={styles['link-arrow']} />
                </a>
              </div>
              <p className={styles['product-description']}>{wishData.description}</p>
              <div className={styles['stats-container']}>
                <StatsItem
                  text={`${wishData.likeCount} нравится`}
                  stats={wishData.likes}
                  statName="like"
                  wishId={wishData.id}
                  user={user}
                  color="red"
                  userCollections={userCollections}
                >
                  <Favorite className={styles['like-icon']} />
                </StatsItem>
                <StatsItem
                  text={`${wishData.activeCount} хотят`}
                  statName="active"
                  stats={wishData.active}
                  wishId={wishData.id}
                  user={user}
                  color="orange"
                  userCollections={userCollections}
                >
                  <AddingWishCard userCollections={userCollections} />
                </StatsItem>
                <StatsItem
                  text={`${wishData.fulfilledCount} исполнено`}
                  statName="fulfilled"
                  stats={wishData.active}
                  wishId={wishData.id}
                  user={user}
                  color="green"
                  userCollections={userCollections}
                >
                  <Check className={styles['check-icon']} />
                </StatsItem>
              </div>
              <Comments wishId={wishData.id} comments={wishData.comments} user={user} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleWish;
