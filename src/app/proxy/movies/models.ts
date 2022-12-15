import type { Genre } from './genre.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateMovieDto {
  name: string;
  synopsis: string;
  genre: Genre;
  releaseDate: string;
  price: number;
}

export interface MovieDto extends AuditedEntityDto<string> {
  name?: string;
  synopsis?: string;
  genre: Genre;
  releaseDate?: string;
  price: number;
}
