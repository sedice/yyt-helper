/****  GET  start ****/

// 请求类型
export type GetRequest = {};

// 返回类型
export type GetResponse = {};

// 请求参数类型
type GetRequestConfig = Readonly<
  RequestConfig<
    "https://yapi.buffalo-robot.com/mock/54",
    "",
    "",
    "",
    "data",
    string,
    string,
    false
  >
>;

// 请求参数
const GetRequestConfig: GetRequestConfig = {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: "",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "Get",
  extraInfo: {},
};

// 请求函数
export const Get = (requestData: GetRequest, ...args: UserRequestRestArgs) => {
  return request<GetResponse>(prepare(GetRequestConfig, requestData), ...args);
};
Get.requestConfig = GetRequestConfig;

// hooks
export const useGet = makeRequestHook<
  GetRequest,
  GetRequestConfig,
  ReturnType<typeof Get>
>(Get);

/****  GET  end ****/
