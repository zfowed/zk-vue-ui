## Form 表单

### 引入组件

```javascript
import Form from 'zk-vue-ul/packages/components/global/form'
import FormItem from 'zk-vue-ul/packages/components/global/form-item'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-form ref="form" :model="form" :rules="formRules" label-width="80px">
      <zk-form-item label="活动名称" prop="value1">
        <zk-input v-model="form.value1"></zk-input>
      </zk-form-item>
      <zk-form-item label="活动区域" prop="value2">
        <zk-select v-model="form.value2" placeholder="请选择活动区域">
          <zk-option label="区域一" value="区域一"></zk-option>
          <zk-option label="区域二" value="区域二"></zk-option>
        </zk-select>
      </zk-form-item>
      <zk-form-item label="活动时间">
        <zk-row>
          <zk-col :span="11">
            <zk-form-item prop="value3">
              <zk-date-picker v-model="form.value3" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
          <zk-col :span="2" style="text-align: center;">-</zk-col>
          <zk-col :span="11">
            <zk-form-item prop="value4">
              <zk-date-picker v-model="form.value4" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
        </zk-row>
      </zk-form-item>
      <zk-form-item label="活动性质">
        <zk-checkbox v-model="form.value5">美食/餐厅线上活动</zk-checkbox>
        <zk-checkbox v-model="form.value6">地推活动</zk-checkbox>
        <zk-checkbox v-model="form.value7">线下主题活动</zk-checkbox>
        <zk-checkbox v-model="form.value8">单纯品牌曝光</zk-checkbox>
      </zk-form-item>
      <zk-form-item label="特殊资源" prop="value9">
        <zk-radio v-model="form.value9" label="1">线上品牌商赞助</zk-radio>
        <zk-radio v-model="form.value9" label="2">线下场地免费</zk-radio>
      </zk-form-item>
      <zk-form-item label="活动形式" prop="value10">
        <zk-input v-model="form.value10" type="textarea"></zk-input>
      </zk-form-item>
      <zk-form-item>
        <zk-button type="primary" @click="$refs.form.validate()">提交</zk-button>
        <zk-button>返回</zk-button>
      </zk-form-item>
    </zk-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          value1: '',
          value2: '',
          value3: undefined,
          value4: undefined,
          value5: false,
          value6: false,
          value7: false,
          value8: false,
          value9: '1',
          value10: '',
        },
        formRules: {
          value1: {
            type: 'string',
            message: '活动名称不允许为空',
            required: true,
            whitespace: true
          },
          value2: {
            type: 'string',
            message: '活动区域不允许为空',
            required: true,
            whitespace: true
          },
          value3: {
            type: 'number',
            message: '开始活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value4: {
            type: 'number',
            message: '结束活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value10: {
            type: 'string',
            message: '活动形式不允许为空',
            required: true,
            whitespace: true
          },
        }
      }
    }
  }
</script>
```

### 对齐方式为头部

```html
/*vue*/

<template>
  <div>
    <zk-form ref="form" :model="form" label-position="top" :rules="formRules">
      <zk-form-item label="活动名称" prop="value1">
        <zk-input v-model="form.value1"></zk-input>
      </zk-form-item>
      <zk-form-item label="活动区域" prop="value2">
        <zk-select v-model="form.value2" placeholder="请选择活动区域">
          <zk-option label="区域一" value="区域一"></zk-option>
          <zk-option label="区域二" value="区域二"></zk-option>
        </zk-select>
      </zk-form-item>
      <zk-form-item label="活动时间">
        <zk-row>
          <zk-col :span="11">
            <zk-form-item prop="value3">
              <zk-date-picker v-model="form.value3" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
          <zk-col :span="2" style="text-align: center;">-</zk-col>
          <zk-col :span="11">
            <zk-form-item prop="value4">
              <zk-date-picker v-model="form.value4" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
        </zk-row>
      </zk-form-item>
      <zk-form-item label="活动性质">
        <zk-checkbox v-model="form.value5">美食/餐厅线上活动</zk-checkbox>
        <zk-checkbox v-model="form.value6">地推活动</zk-checkbox>
        <zk-checkbox v-model="form.value7">线下主题活动</zk-checkbox>
        <zk-checkbox v-model="form.value8">单纯品牌曝光</zk-checkbox>
      </zk-form-item>
      <zk-form-item label="特殊资源" prop="value9">
        <zk-radio v-model="form.value9" label="1">线上品牌商赞助</zk-radio>
        <zk-radio v-model="form.value9" label="2">线下场地免费</zk-radio>
      </zk-form-item>
      <zk-form-item label="活动形式" prop="value10">
        <zk-input v-model="form.value10" type="textarea"></zk-input>
      </zk-form-item>
      <zk-form-item>
        <zk-button type="primary" @click="$refs.form.validate()">提交</zk-button>
        <zk-button>返回</zk-button>
      </zk-form-item>
    </zk-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          value1: '',
          value2: '',
          value3: undefined,
          value4: undefined,
          value5: false,
          value6: false,
          value7: false,
          value8: false,
          value9: '1',
          value10: '',
        },
        formRules: {
          value1: {
            type: 'string',
            message: '活动名称不允许为空',
            required: true,
            whitespace: true
          },
          value2: {
            type: 'string',
            message: '活动区域不允许为空',
            required: true,
            whitespace: true
          },
          value3: {
            type: 'number',
            message: '开始活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value4: {
            type: 'number',
            message: '结束活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value10: {
            type: 'string',
            message: '活动形式不允许为空',
            required: true,
            whitespace: true
          },
        }
      }
    }
  }
</script>
```

### 错误提示为右边

```html
/*vue*/

<template>
  <div>
    <zk-form ref="form" :model="form" :rules="formRules" label-width="80px" inline-message style="width: 500px">
      <zk-form-item label="活动名称" prop="value1">
        <zk-input v-model="form.value1"></zk-input>
      </zk-form-item>
      <zk-form-item label="活动区域" prop="value2">
        <zk-select v-model="form.value2" placeholder="请选择活动区域">
          <zk-option label="区域一" value="区域一"></zk-option>
          <zk-option label="区域二" value="区域二"></zk-option>
        </zk-select>
      </zk-form-item>
      <zk-form-item label="活动时间">
        <zk-row>
          <zk-col :span="11">
            <zk-form-item prop="value3">
              <zk-date-picker v-model="form.value3" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
          <zk-col :span="2" style="text-align: center;">-</zk-col>
          <zk-col :span="11">
            <zk-form-item prop="value4">
              <zk-date-picker v-model="form.value4" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
        </zk-row>
      </zk-form-item>
      <zk-form-item label="活动性质">
        <zk-checkbox v-model="form.value5">美食/餐厅线上活动</zk-checkbox>
        <zk-checkbox v-model="form.value6">地推活动</zk-checkbox>
        <zk-checkbox v-model="form.value7">线下主题活动</zk-checkbox>
        <zk-checkbox v-model="form.value8">单纯品牌曝光</zk-checkbox>
      </zk-form-item>
      <zk-form-item label="特殊资源" prop="value9">
        <zk-radio v-model="form.value9" label="1">线上品牌商赞助</zk-radio>
        <zk-radio v-model="form.value9" label="2">线下场地免费</zk-radio>
      </zk-form-item>
      <zk-form-item label="活动形式" prop="value10">
        <zk-input v-model="form.value10" type="textarea"></zk-input>
      </zk-form-item>
      <zk-form-item>
        <zk-button type="primary" @click="$refs.form.validate()">提交</zk-button>
        <zk-button>返回</zk-button>
      </zk-form-item>
    </zk-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          value1: '',
          value2: '',
          value3: undefined,
          value4: undefined,
          value5: false,
          value6: false,
          value7: false,
          value8: false,
          value9: '1',
          value10: '',
        },
        formRules: {
          value1: {
            type: 'string',
            message: '活动名称不允许为空',
            required: true,
            whitespace: true
          },
          value2: {
            type: 'string',
            message: '活动区域不允许为空',
            required: true,
            whitespace: true
          },
          value3: {
            type: 'number',
            message: '开始活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value4: {
            type: 'number',
            message: '结束活动时间不允许为空',
            required: true,
            whitespace: true
          },
          value10: {
            type: 'string',
            message: '活动形式不允许为空',
            required: true,
            whitespace: true
          },
        }
      }
    }
  }
</script>
```

### 行内表单

```html
/*vue*/

<template>
  <div>
    <zk-form ref="form" :model="form" inline>
      <zk-form-item label="活动名称" prop="value1">
        <zk-input v-model="form.value1"></zk-input>
      </zk-form-item>
      <zk-form-item label="活动区域" prop="value2">
        <zk-select v-model="form.value2" placeholder="请选择活动区域">
          <zk-option label="区域一" value="区域一"></zk-option>
          <zk-option label="区域二" value="区域二"></zk-option>
        </zk-select>
      </zk-form-item>
      <zk-form-item label="活动时间">
        <zk-row>
          <zk-col :span="11">
            <zk-form-item prop="value3">
              <zk-date-picker v-model="form.value3" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
          <zk-col :span="2" style="text-align: center;">-</zk-col>
          <zk-col :span="11">
            <zk-form-item prop="value4">
              <zk-date-picker v-model="form.value4" style="width: 100%;"></zk-date-picker>
            </zk-form-item>
          </zk-col>
        </zk-row>
      </zk-form-item>
      <zk-form-item label="活动性质">
        <zk-checkbox v-model="form.value5">美食/餐厅线上活动</zk-checkbox>
        <zk-checkbox v-model="form.value6">地推活动</zk-checkbox>
        <zk-checkbox v-model="form.value7">线下主题活动</zk-checkbox>
        <zk-checkbox v-model="form.value8">单纯品牌曝光</zk-checkbox>
      </zk-form-item>
      <zk-form-item label="特殊资源" prop="value9">
        <zk-radio v-model="form.value9" label="1">线上品牌商赞助</zk-radio>
        <zk-radio v-model="form.value9" label="2">线下场地免费</zk-radio>
      </zk-form-item>
      <zk-form-item label="活动形式" prop="value10">
        <zk-input v-model="form.value10" type="textarea"></zk-input>
      </zk-form-item>
      <zk-form-item>
        <zk-button type="primary" @click="$refs.form.validate()">提交</zk-button>
        <zk-button>返回</zk-button>
      </zk-form-item>
    </zk-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          value1: '',
          value2: '',
          value3: undefined,
          value4: undefined,
          value5: false,
          value6: false,
          value7: false,
          value8: false,
          value9: '1',
          value10: '',
        }
      }
    }
  }
</script>
```
