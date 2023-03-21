export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `艾兔思Aitools ChatGPT聊天机器人
- 艾兔思Aitools - 您的ai工具终极指南。
- 微信公众号：艾兔思Aitools
- 抖音/微信视频号：艾兔思Aitools
- 艾兔思Aitools中文导航论坛 [@aitools.chat](https://aitools.chat) 。API Key 由我自己免费提供，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
