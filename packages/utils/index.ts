// 把驼峰转成横杆连接
export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, '$1').toLowerCase()
}
