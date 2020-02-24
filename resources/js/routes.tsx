import {Tag, Post} from './api/interfaces';

export const routeHome = () => '/';
export const routeTag = ({slug, id}: Tag) => `/tags/${id}-${slug}`;
export const routePost = ({slug, id}: Post) => `/posts/${id}-${slug}`;
