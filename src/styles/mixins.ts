export const rgba = (color: string, opacity?: number) => {
  const opacityValue = opacity !== undefined ? opacity : 1
  const colorValue = color.split("(").pop()?.split(")")?.shift()

  return `rgba(${colorValue}, ${opacityValue})`
}
