import axios, {AxiosPromise} from 'axios';
import {Tag} from './interfaces';

export interface GetTagResponse {
  data: Tag;
}

export interface GetTagsResponse {
  data: Tag[];
};

interface RequestOptions {
  slug?: string;
};

export const getTags = (

): AxiosPromise<GetTagsResponse> => axios.get('/api/tags');

export const getTag = (
  id: number
): AxiosPromise<GetTagResponse> => axios.get(`/api/tags/${id}`);
