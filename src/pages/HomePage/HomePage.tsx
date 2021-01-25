import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import AddWish from '@/components/AddWish';
import SmallWish from '@/components/SmallWish';
import { SCREEN_SIZES } from '@/constants';
import AddWishWindowContext from '@/context/AddWishContext';
import AuthContext from '@/context/AuthContext';
import styles from '@/pages/HomePage/HomePage.scss';
import FETCH_WISHES_QUERY from '@/pages/HomePage/query';
import { TDataWish, TGetWishes } from '@/types/data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const HomePage: FunctionComponent<HTMLAttributes<HTMLDivElement>> = () => {
  const classes = useStyles();
  const { mobileM, tablet, laptop, custom } = SCREEN_SIZES;
  const { username } = useContext(AuthContext);
  const nameSearch = '';
  const { isAddWishWindowOpen } = useContext(AddWishWindowContext);

  const { loading, data } = useQuery<TGetWishes>(FETCH_WISHES_QUERY, {
    variables: {
      name: nameSearch,
      usernameGuest: username,
    },
  });

  const dataWishes = data?.getWishes as TDataWish[];

  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page-wrapper']}>
        {loading ? (
          <div className={classes.root}>
            <CircularProgress />
          </div>
        ) : (
          <React.Fragment>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ [mobileM]: 1, [tablet]: 2, [laptop]: 3, [custom]: 4 }}
            >
              <Masonry gutter="10px">
                {dataWishes.map(elem => (
                  <SmallWish wishData={elem} key={elem.id} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </React.Fragment>
        )}
      </div>
      {isAddWishWindowOpen ? <AddWish /> : ''}
    </div>
  );
};

export default HomePage;
