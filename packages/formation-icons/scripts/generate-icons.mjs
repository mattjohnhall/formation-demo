import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const iconsDir = path.dirname(
  require.resolve('@mui/icons-material/AddOutlined')
)

const files = fs.readdirSync(iconsDir)

const ignoredVariants = ['Rounded', 'Sharp', 'TwoTone']

const exportsMap = new Map()

for (const file of files) {
  if (!file.endsWith('.js')) continue

  const iconName = file.replace('.js', '')

  // skip variants
  if (ignoredVariants.some(v => iconName.endsWith(v))) continue

  // only outlined set
  const isOutlined =
    iconName.endsWith('Outlined') ||
    iconName.endsWith('Outline')

  if (!isOutlined) continue

  const exportName =
    iconName
      .replace(/Outlined$/, '')
      .replace(/Outline$/, '') + 'Icon'

  // prefer Outlined over Outline
  const existing = exportsMap.get(exportName)

  if (!existing || iconName.endsWith('Outlined')) {
    exportsMap.set(exportName, iconName)
  }
}

const output = Array.from(exportsMap.entries())
  .sort(([a], [b]) => a.localeCompare(b))
  .map(
    ([exportName, iconName]) =>
      `export { default as ${exportName} } from '@mui/icons-material/${iconName}'`
  )

fs.writeFileSync(
  path.resolve(process.cwd(), 'src/index.ts'),
  output.join('\n') + '\n'
)

console.log(`Generated ${exportsMap.size} outlined icons`)