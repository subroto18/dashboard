export interface ApiError {
  status: number;
  statusText: string;
  internal?: boolean;
  data: string;
}
