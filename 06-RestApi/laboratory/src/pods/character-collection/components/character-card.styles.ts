import { css } from '@emotion/css';

export const classes = {
	card: css`
    max-width: 345px;
    margin: 1rem;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
  `,
	media: css`
    height: 0;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
  `,
	content: css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1rem;
  `,
};
