import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const iconsDir = path.dirname(
  require.resolve('@mui/icons-material/AddOutlined')
)

const files = fs.readdirSync(iconsDir)

const ignoredVariants = [
  'Rounded',
  'Sharp',
  'TwoTone'
]

const exportsMap = new Map()

for (const file of files) {
  if (!file.endsWith('.js')) {
    continue
  }

  const iconName = file.replace('.js', '')

  const isIgnoredVariant =
    ignoredVariants.some((variant) =>
      iconName.endsWith(variant)
    )

  if (isIgnoredVariant) {
    continue
  }

  const isOutlined =
    iconName.endsWith('Outlined') ||
    iconName.endsWith('Outline')

  if (!isOutlined) {
    continue
  }

  const exportName =
    iconName
      .replace(/Outlined$/, '')
      .replace(/Outline$/, '') + 'Icon'

  // Prefer Outlined over Outline
  const existing =
    exportsMap.get(exportName)

  if (
    !existing ||
    iconName.endsWith('Outlined')
  ) {
    exportsMap.set(
      exportName,
      iconName
    )
  }
}

const exports = Array.from(
  exportsMap.entries()
)
  .sort(([a], [b]) =>
    a.localeCompare(b)
  )
  .map(
    ([exportName, iconName]) =>
      `export { default as ${exportName} } from '@mui/icons-material/${iconName}'`
  )

fs.writeFileSync(
  path.resolve(
    process.cwd(),
    'src/index.ts'
  ),
  exports.join('\n') + '\n'
)

console.log(
  `Generated ${exports.length} icons`
)