import { deviceDimensions } from '../../helpers/device-dimensions'

export const size = (n: number) => `${deviceDimensions(n)}px`

export const parseSize = (size: string) => {
    deviceDimensions(Number(size.split('px')[0]))
}