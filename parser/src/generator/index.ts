import { TreeSitterLanguage } from '../TreeSitterLanguage'

export class LanguageParserGenerator {
  private language: TreeSitterLanguage

  constructor(languageJson: any) {
    this.language = new TreeSitterLanguage(languageJson)
  }

  generate() {}
}
