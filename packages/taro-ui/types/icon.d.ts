import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import Component, { IconBaseProps } from './base'

export interface IconProps extends Component, IconBaseProps {
  onClick?: CommonEventFunction
}

declare const Icon: ComponentClass<IconProps>

export default Icon
