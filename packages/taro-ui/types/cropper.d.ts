import { ComponentClass } from 'react'
import Component from './base'

export interface CropperStates {
  showCropper: boolean
  imagePath: string
  stageLeft: number
  stageTop: number
  stageWidth: number
  stageHeight: number

  boxWidth: number
  boxHeight: number
  boxLeft: number
  boxTop: number

  canvasWidth: number
  canvasHeight: number
}

export interface CropperProps extends Component {
  success: (res) => void
  fail?: (err) => void
  cancel?: () => void
}

declare const Cropper: ComponentClass<CropperProps>

export default Cropper
