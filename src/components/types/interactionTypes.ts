export interface Interactivity {
  start?: Function
  during?: Function
  end?: Function
  brush?: string
  extent?: Array<number[]> | number[]
  columnsBrush?: boolean
  projection?: string
  projectedColumns?: object
}
