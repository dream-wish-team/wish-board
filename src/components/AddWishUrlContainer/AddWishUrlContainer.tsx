import { Button, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import classNames from 'classnames';
import React, { useState, FormEvent, Fragment } from 'react';
import type {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from 'react';

import styles from '@/components/AddWishUrlContainer/AddWishUrlContainer.scss';
import { addWish } from '@/constants';

interface AddWishUrlContainerProps extends HTMLAttributes<HTMLDivElement> {
  open: ReactNode;
  url: ReactNode;
  gradient: ReactNode;
  file: ReactNode;
  previewRef: MutableRefObject<HTMLDivElement>;
}

const AddWishUrlContainer: FunctionComponent<AddWishUrlContainerProps> = (props: {
  open: Dispatch<SetStateAction<boolean>>;
  url: Dispatch<SetStateAction<string>>;
  gradient: Dispatch<SetStateAction<string>>;
  file: Dispatch<SetStateAction<string | Blob>>;
  previewRef: MutableRefObject<HTMLDivElement>;
}) => {
  const [Url, setUrl] = useState('');
  const [BadUrl, setBadUrl] = useState(true);
  const ChangeUrl = (e: { currentTarget: { value: string } }): void => {
    setUrl(e.currentTarget.value);
  };

  const closeUrl = (): void => {
    setUrl('');
    props.open(false);
  };

  const submitUrl = (e: FormEvent): void => {
    e.preventDefault();
    const checkImg = new Image();
    checkImg.src = Url;
    checkImg.onerror = (): void => {
      setBadUrl(false);
    };
    checkImg.onload = (): void => {
      props.url(Url);
      const image: HTMLElement | null = document.getElementById('image');
      if (image) {
        image.remove();
      }
      const divElem = props.previewRef.current;
      const img: HTMLImageElement = document.createElement('img');
      img.id = 'image';
      img.style.cssText = 'position:absolute; max-width:100%; max-height:100%';
      img.src = Url;
      if (divElem) {
        divElem.appendChild(img);
        divElem.style.background = 'none';
      }
      setUrl('');
      props.open(false);
      props.gradient('');
      props.file('');
    };
  };

  return (
    <Fragment>
      <div className={styles['addImageUrlContainer']}>
        <div className={styles['addImageUrl']}>
          <form onSubmit={submitUrl} className={styles['form']}>
            <div className={styles['headerUrl']}>
              <h2>{addWish.addUrl}</h2>
              <Close className={styles['closeUrl']} onClick={closeUrl} />
            </div>
            <span className={classNames(styles['badUrl'], BadUrl ? styles['hide'] : '')}>
              {addWish.badUrl}
            </span>
            <TextField
              onChange={ChangeUrl}
              style={{ marginBottom: '1em' }}
              value={Url}
              margin="dense"
              id="url"
              required
              label={addWish.url}
              type="text"
              fullWidth
            />
            <div className={styles['submit_btns']}>
              <Button
                onClick={closeUrl}
                variant="outlined"
                color="primary"
                style={{
                  boxShadow:
                    '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
                  color: 'black',
                  margin: '0 0 1em 1em',
                }}
              >
                {addWish.cancel}
              </Button>
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                style={{
                  boxShadow:
                    '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
                  color: 'white',
                  margin: '0 0 1em 1em',
                }}
              >
                {addWish.send}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddWishUrlContainer;
