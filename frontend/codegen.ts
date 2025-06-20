import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../backend/src/main/resources/schema/schema.graphqls',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  hooks: {
    afterAllFileWrite: ['prettier --write', 'eslint --fix']
  },
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      }
    },
    './src/__generated__/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  }
}

export default config
