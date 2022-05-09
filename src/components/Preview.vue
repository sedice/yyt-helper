<template>
  <el-card>
    <div>
      <el-button @click="handleCopy" type="primary">复制</el-button>
    </div>
    <pre ref="dom">
      <code >

        /**** {{props.name}} {{upperCaseMethod}} {{props.url}} start  ****/


        // 请求类型
        export type {{ namePrefix }}Request =  {

        }
      

        // 返回类型
        export type {{ namePrefix }}Response =  {

        }


        // 请求参数类型
        type {{ namePrefix }}RequestConfig = Readonly&lt;
          RequestConfig&lt;
            "https://yapi.buffalo-robot.com/mock/54",
            "",
            "",
            "{{ props.url }}",
            "data",
            string,
            string,
            false
          >
        >;


        // 请求参数
        const {{ namePrefix }}RequestConfig: {{ namePrefix }}RequestConfig = {
          mockUrl: mockUrl_0_1_0_0,
          devUrl: devUrl_0_1_0_0,
          prodUrl: prodUrl_0_1_0_0,
          path: "{{ props.url }}",
          method: Method.{{ upperCaseMethod }},
          requestHeaders: {},
          requestBodyType: RequestBodyType.{{
              upperCaseMethod === "GET" ? "query" : "json"
            }},
          responseBodyType: ResponseBodyType.json,
          dataKey: dataKey_0_1_0_0,
          paramNames: [],
          queryNames: [],
          requestDataOptional: false,
          requestDataJsonSchema: {},
          responseDataJsonSchema: {},
          requestFunctionName: "{{ namePrefix }}",
          extraInfo: {},
        };


        // 请求函数
        export const {{ namePrefix }} = (
          requestData: {{ namePrefix }}Request,
          ...args: UserRequestRestArgs
        ) => {
          return request&lt;{{ namePrefix }}Response>(
            prepare({{ namePrefix }}RequestConfig, requestData),
            ...args
          );
        };
        {{ namePrefix }}.requestConfig = {{ namePrefix }}RequestConfig;


        // hooks
        export const use{{ namePrefix }} = makeRequestHook&lt;
          {{ namePrefix }}Request,
          {{ namePrefix }}RequestConfig,
          ReturnType&lt;typeof {{ namePrefix }}>
        >({{ namePrefix }});


        /**** {{name}} {{upperCaseMethod}} {{url}} end  ****/
      </code>
    </pre>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { upperCase } from "lodash-es";
import { buildPrefix } from "@/utils";
import { useClipboard } from "@vueuse/core";

const props = defineProps<{
  name: string;
  url: string;
  method: string;
}>();

const upperCaseMethod = computed(() => upperCase(props.method));
const namePrefix = computed(() => buildPrefix(props.method, props.url));

const dom = ref<HTMLElement>();
const { copy } = useClipboard();
const handleCopy = () => {
  copy(dom.value?.innerText || "");
};
</script>
