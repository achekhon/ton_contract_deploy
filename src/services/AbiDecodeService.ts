import { Field, Func } from '@/model/state'

export default function AbiDecodeService (func: Func): Field[] {
  return func.inputs.map(item => {
    return {
      name: item.name,
      array: !!item.type.match(/\[\]/) 
    }
  })
}