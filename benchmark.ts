
const decoder = new TextDecoder()
const encoder = new TextEncoder()

const run = async (filename: string) => {
  const content = decoder.decode(await Deno.readFile(filename))
  const iteration = 10e5
  const durations = []

  for (let i = 0; i < iteration; i++) {
    const now = Date.now()
    await Deno.run({
      cmd: ["deno", "run", filename],
      stdout: "piped",
    })
      .output()
    const duration = Date.now() - now
    durations.push(duration)   
    await Deno.writeFile(filename, 
      encoder.encode(
        content.includes('hi')
          ? content.replace('hi', 'hello')
          : content.replace('hello', 'hi')
      ))
  }

  const averageCompileTime = durations.reduce((total, x) => total + x, 0) / durations.length
  console.log(`${filename} compiled in average ${averageCompileTime / 1000} seconds.`)
}

await run('./x.ts')
await run('./y.ts')
