<template>
  <Form
    v-if="Object.keys(valueList).length"
    ref="formValidate"
    :model="valueList"
    :rules="rules"
    :label-width="labelWidth"
  >
    <FormItem
      v-for="(item, index) in list"
      :key="`${_uid}_${index}`"
      :label="item.label"
      :prop="item.name"
    >
      <component :is="item.type" :range="item.range" v-model="valueList[item.name]">
        <template v-if="item.children">
          <component
            :is="item.children.type"
            v-for="(child, i) in item.children.list"
            :value="child.value"
            :key="`${_uid}_${i}`"
            :label="child.label"
          >{{child.title}}</component>
        </template>
      </component>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
import { sentFormData } from '@/api/data'
export default {
  name: 'FormGroup',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 80
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      valueList: {},
      rules: {}
    }
  },
  watch: {
    list () {
      this.setInitValue()
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
          sentFormData({
            url: this.url,
            data: this.valueList
          }).then(res => {
            this.$emit('on-submit-success', res)
          }).catch(err => {
            console.log(err.response.data)
            this.$emit('on-submit-error', err)
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    setInitValue () {
      let rules = {}
      let valueList = {}
      this.list.forEach(item => {
        rules[item.name] = item.rule
        valueList[item.name] = item.value
      })
      this.rules = rules
      this.valueList = valueList
    }
  },
  mounted () {
    this.setInitValue()
  }
}
</script>
