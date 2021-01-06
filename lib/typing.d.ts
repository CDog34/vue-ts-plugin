declare module '@vue/compiler-sfc' {
  export interface SFCParseOptions {
    pad?: boolean | 'line' | 'space'
  }

  export interface SFCBlock {
    content: string
  }

  export interface SFCScriptBlock extends SFCBlock {
  }

  export interface SFCDescriptor {
    script: SFCScriptBlock | null
  }

  export interface SFCParseResult {
    descriptor: SFCDescriptor
  }

  export function parse(
    source: string,
    options: SFCParseOptions 
  ): SFCParseResult
}
