<template>
  <form-group :list="formList" :url="url"/>
</template>
<script>
import FormGroup from '_c/form-group'
export default {
  data () {
    return {
      url: '/data/formData',
      formList: [
        {
          name: 'name',
          type: 'Input',
          value: '',
          label: '姓名',
          rule: [
            {
              required: true,
              message: 'The name cannot be empty',
              trigger: 'blur'
            }
          ]
        },
        {
          name: 'name1',
          type: 'Slider',
          value: [20, 50],
          range: true,
          label: '滑块'
        },
        {
          name: 'name2',
          type: 'Select',
          value: '',
          label: '选择器',
          rule: [
            {
              required: true,
              message: 'Please select the city',
              trigger: 'change'
            }
          ],
          children: {
            type: 'Option',
            list: [
              { value: 'beijing', title: '北京' },
              { value: 'shanghai', title: '上海' },
              { value: 'shenzhen', title: '深圳' }
            ]
          }
        },
        {
          name: 'Radio',
          type: 'RadioGroup',
          value: '',
          label: '单选框',
          children: {
            type: 'Radio',
            list: [
              { label: '1', title: '北京' },
              { label: '2', title: '上海' },
              { label: '3', title: '深圳' }
            ]
          }
        },
        {
          name: 'Checkbox',
          type: 'CheckboxGroup',
          value: [],
          label: '多选框',
          children: {
            type: 'Checkbox',
            list: [
              { label: '1', title: '北京' },
              { label: '2', title: '上海' },
              { label: '3', title: '深圳' }
            ]
          }
        },
        {
          name: 'Rate',
          type: 'Rate',
          value: 0,
          label: '评分'
        },
        {
          name: 'ColorPicker',
          type: 'ColorPicker',
          value: '',
          label: '颜色选择器'
        }
      ]
    }
  },
  components: {
    FormGroup
  }
}
</script>
