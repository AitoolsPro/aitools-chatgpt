export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `欢迎使用 ChatGPT聊天机器人
- 艾兔思Aitools - 您的ai工具终极指南。
- 抖音/微信公众号/视频号：艾兔思Aitools
-  [@艾兔思Aitools中文导航论坛](https://aitools.chat) 。
- 设置：
- 首次使用需填写网站密码：aitools ，如自有API Key请填写自己的，现由我免费提供，故意滥用删ID。
- 系统角色指令：会在每次提问时添加，一定用加句号。主要用于对 ChatGPT 的语气，口头禅这些进行定制。（可不填）
- 思维发散程度：越高 ChatGPT 思维就越发散，开始乱答。根据不同的问题可以调节这个选项，创意性的就可以调高一点。（默认中等）
- 开启连续对话：OpenAI 并没有提供 ChatGPT 那样的上下文功能，只能每次都把全部对话传过去，并且都要算 token，而且仍然有最大 4096 token 的限制。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
