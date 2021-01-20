import { gql } from '@apollo/client';

const FETCH_WISH_QUERY = gql`
  query getWish($wishId: ID!) {
    getWish(wishId: $wishId) {
      id
      name
      createdAt
      creator {
        id
        username
        avatar {
          small
        }
      }
      backgroundColor
      originURL
      description
      image {
        small
        normal
      }
      price {
        value
        currency
      }
      active {
        username
      }
      activeCount
      comments {
        id
        username
        createdAt
        body
        creator {
          username
          id
          avatar {
            small
          }
        }
      }
      commentCount
      likes {
        username
        createdAt
      }
      likeCount
      fulfilled {
        username
      }
      fulfilledCount
    }
  }
`;

const FETCH_WISHES_QUERY = gql`
  {
    getWishes {
      id
      name
      createdAt
      creator {
        id
        username
        avatar {
          small
        }
      }
      backgroundColor
      image {
        small
        normal
      }
      price {
        value
        currency
      }
      active {
        username
      }
      activeCount
      comments {
        username
      }
      commentCount
      likes {
        username
        createdAt
      }
      likeCount
      fulfilled {
        username
      }
      fulfilledCount
    }
  }
`;

export { FETCH_WISH_QUERY, FETCH_WISHES_QUERY };
