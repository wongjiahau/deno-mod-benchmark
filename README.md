## Purpose
This repository is to demonsrate the downside of `mod.ts` and `deps.ts` convention.  

The purpose of this repository is to convince the Deno community that they shouldn't include all imports in a single `deps.ts` and shouldn't export all modules in a single `mod.ts`.

## How to run?
Clone this repository then:
```
deno run --allow-all benchmark.ts
```

## Results
On my Macbook Pro 2018, running using Deno 1.0.5, this is the result.

![image](https://user-images.githubusercontent.com/23183656/84122691-6cb14180-aa6b-11ea-8731-b5345ac09d70.png)


As you can see, the `mod.ts` convention causes the compilation time to be 200% slower. 

And this is only with exporting 3 modules at `mod.ts`, can you imagine exporting more modules?
