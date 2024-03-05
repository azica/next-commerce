export const getValueFromArray = <T>(array: InputData[] | undefined): T => {
  let values: Partial<T> = {}

  array?.forEach(({ field, value }) => {
    values = { ...values, [field]: value }
  })

  return values as T
}
