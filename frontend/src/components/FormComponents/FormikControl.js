import React from 'react'
import Input from './Input'
import Textarea from './Textarea.js'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker'
import ReactQuillE from './ReactQuillE'


function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    case 'reactQuill':
      return <ReactQuillE {...rest}/>
    default:
      return null
  }
}

export default FormikControl