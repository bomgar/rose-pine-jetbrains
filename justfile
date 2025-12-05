# Updates bundled plugin theme from files in `template`
template:
   npx @rose-pine/build -o src/main/resources/ -t template/rose_pine.theme.json
   npx @rose-pine/build -o src/main/resources/ -t template/rose_pine.xml

# Start IDE with the plugin loaded
ui: template
   ./gradlew runIdeForUiTests
