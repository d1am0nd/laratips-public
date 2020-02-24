import axios, {AxiosPromise} from 'axios';
import {Post} from './interfaces';

export interface GetPostsResponse {
  data: Post[];
};

export interface GetPostResponse {
  data: Post;
};

interface RequestOptions {
  tagIds?: number[];
};

export const getPosts = (
  {tagIds}: RequestOptions = {}
): AxiosPromise<GetPostsResponse> => axios.get(`/api/posts`, {
  params: {
    tagIds,
  },
});

export const getPost = (
  id: number,
  {tagIds}: RequestOptions = {}
): AxiosPromise<GetPostResponse> => axios.get(`/api/posts/${id}`, {
  params: {
    tagIds,
  },
});

export const postUrl = (post: Post) => (`/posts/${post.id}-${post.slug}`);
