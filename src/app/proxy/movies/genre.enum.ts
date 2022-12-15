import { mapEnumToOptions } from '@abp/ng.core';

export enum Genre {
  Undefined = 0,
  Adventure = 1,
  Biography = 2,
  Dystopia = 3,
  Fantastic = 4,
  Horror = 5,
  Science = 6,
  ScienceFiction = 7,
  Comedy = 8,
}

export const genreOptions = mapEnumToOptions(Genre);
