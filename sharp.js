import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

// Define input and output directories using relative paths from the project root
const inputDir = 'public/assets/images/source'
const outputBaseDir = 'public/assets/images'
const sizes = [320, 480, 768, 1024, 1920]
const formats = ['jpg', 'webp']

// Ensure the input directory exists
if (!fs.existsSync(inputDir)) {
  console.error(`Input directory ${inputDir} does not exist.`)
  process.exit(1)
}

// Generate responsive images
fs.readdirSync(inputDir).forEach((file) => {
  const inputFile = path.join(inputDir, file)
  const fileName = path.parse(file).name
  const projectDir = fileName.split('-')[0] // Assuming file names are like 'projectname-image.jpg'

  const outputDir = path.join(outputBaseDir, projectDir)

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  sizes.forEach((size) => {
    formats.forEach((format) => {
      const outputFile = path.join(outputDir, `${fileName}-${size}w.${format}`)
      sharp(inputFile)
        .resize(size)
        .toFormat(format)
        .toFile(outputFile)
        .then(() => {
          console.log(`Generated ${outputFile}`)
        })
        .catch((err) => {
          console.error(`Error generating ${outputFile}:`, err)
        })
    })
  })
})
