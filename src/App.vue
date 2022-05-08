<template>
  <el-row>
    <el-col :span="12" class="inner">
      <el-card header="方法编辑">
        <el-form ref="formEl" :model="form">
          <el-form-item label="接口名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="请求方法" prop="method">
            <el-select v-model="form.method" style="width: 100%">
              <el-option
                v-for="value in methods"
                :key="value"
                :label="value"
                :value="value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请求路径" prop="url">
            <el-input v-model="form.url"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="formEl?.resetFields()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="12" class="inner">
      <Preview :name="form.name" :url="form.url" :method="form.method" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import Preview from "@/components/Preview.vue";

const methods = ["GET", "POST", "PUT", "DELETE"] as const;

type Method = typeof methods[number];

const formEl = ref<FormInstance>();

const form = reactive<{
  url: string;
  name: string;
  method: Method;
}>({
  url: "",
  name: "",
  method: "GET",
});
</script>

<style lang="scss" scoped>
.inner {
  padding: 16px;
}
</style>
