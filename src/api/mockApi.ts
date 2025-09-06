import models from '../data/models.json'
import templates from '../data/templates.json'

export async function getModels() {
  await wait(250)
  return models.models
}

export async function getTemplates() {
  await wait(250)
  return templates.templates
}

export async function sendPrompt({ prompt, model, parameters }) {
  await wait(500)
  const { temperature = 0.7, maxTokens = 120 } = parameters || {}
  const style =
    temperature < 0.3 ? 'concise' :
      temperature > 0.85 ? 'creative' :
        'balanced'
  const base = [
    `Model: ${model || 'bai-3.5'} | Style: ${style} |`,
    `Prompt: ${prompt}`
  ].join('\n\n')
  // generate content length
  const seed = Math.max(30, Math.min(400, Math.round(maxTokens)))
  const filler = generateFiller(style, seed)
  const text = `${base}\n\nResponse:\nAnswer: ${filler}`
  // Parse into structured object
  const parsed = parseResponseString(text)
  return {
    parsed,
  }
}

function generateFiller(style, length) {
  const blocks = {
    concise:
      'Here is a brief, focused response tailored to your request.',
    balanced:
      'Here is a clear, structured response with key points and a short example.',
    creative:
      'Imagine a scene—vivid, surprising, and playful—while still addressing your request.'
  }
  const base = blocks[style] || blocks.balanced
  const pad = ' ' + 'This is the detailed explanation of the Given prompt'.repeat(1000)
  return (base + pad).slice(0, length)
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

function parseResponseString(str) {
  const modelMatch = str.match(/Model:\s*([^|]+)\s*\|\s*Style:\s*([^|]+)\|?/);
  const promptMatch = str.match(/Prompt:\s*([\s\S]*?)\n\nResponse:/);
  const answerMatch = str.match(/Answer:\s*([\s\S]*)/);
  return {
    model: modelMatch ? modelMatch[1].trim() : null,
    style: modelMatch ? modelMatch[2].trim() : null,
    prompt: promptMatch ? promptMatch[1].trim() : null,
    answer: answerMatch ? answerMatch[1].trim() : null,
  };
}
