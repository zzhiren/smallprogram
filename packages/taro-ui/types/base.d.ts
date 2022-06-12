import { CSSProperties } from 'react'

interface Component {
  className?: string

  customStyle?: string | CSSProperties
}

export interface IconBaseProps2 extends Component {
  value: string

  color?: string
}

export interface IconBaseProps extends Component {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default Component
