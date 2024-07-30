import { ElMessage } from 'element-plus'
// 复制文本
export function useCopy(text: string) {
  /*
  // execCommand 已弃用
  // 创建输入框
  const input = document.createElement('input')
  // 给输入框value赋值
  input.value = text
  // 追加到body里面
  document.body.appendChild(input)
  // 选择输入框的操作
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  // 删除创建的input
  document.body.removeChild(input)
  // 提示用户复制成功
  ElMessage.success('复制成功')*/

  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success('复制成功')
    })
    .catch((err) => {
      ElMessage.success('复制失败')
    })
}
