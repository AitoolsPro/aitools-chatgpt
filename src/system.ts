import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `欢迎使用 ChatGPT聊天机器人
- 艾兔思Aitools | ai终极指南 
- 抖音/微信公众号/视频号：艾兔思Aitools
-  [@艾兔思Aitools中文导航论坛](https://aitools.chat) 。
-  [@体验艾兔思ChatGPT最新版本](https://myaitools.cn) 。
- 设置：
- 首次用需填网站暗号：aitools ，如自有API Key请填写，现由我免费提供，故意滥用删ID。
- 系统角色指令：会在每次提问时添加，需加句号。主要对ChatGPT的语气，口头禅这些定制。（可不填）
- 思维发散程度：越高 ChatGPT 思维就越发散，开始乱答。根据不同的问题可以调节这个选项，创意性的就可以调高一点。（默认中等）
- 开启连续对话：OpenAI 并没提供ChatGPT那样的上下文功能，只能每次都把全部对话传过去，并且都要算 token，而且仍然有最大4096 token 的限制。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
