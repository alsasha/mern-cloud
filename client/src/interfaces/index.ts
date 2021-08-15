export interface inputProps {
  type: string,
  required: boolean
  value: string,
  setValue: (param:string) => void,
  className?: string,
  placeholder: string
}
