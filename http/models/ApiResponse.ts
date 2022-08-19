export interface ApiResponse<T> {
    data: T,
    meta: ApiMetaResponse
}

export interface ApiMetaResponse {
    pagination?: ApiPaginationResponse
}

export interface ApiPaginationResponse {
    total: number,
    pageSize: number,
    pagesCount: number,
    page: number
}