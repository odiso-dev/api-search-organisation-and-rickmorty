import * as apiCharacterResponseModel from '@/api/api.rickandmorty.model';
import * as paginationVM from '@/pages/pagination.vm';

export const mapApiCharactersResponseToPaginationVM = (
  apiResponse: apiCharacterResponseModel.ApiCharacterResponse
): paginationVM.PaginationVm => ({
  // count: apiResponse?.info.count,
  pages: apiResponse?.info.pages,
  next: apiResponse?.info.next,
  prev: apiResponse?.info.prev,
});
