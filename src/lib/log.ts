export function log(
  prefix: 'core' | 'shell',
  func: string,
  ...args: unknown[]
) {
  console.log(`[${prefix}] ${func}: ${args}`)
}
