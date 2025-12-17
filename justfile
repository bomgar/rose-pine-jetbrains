# Updates bundled plugin theme from files in `template`
template:
   bloom build -o src/main/resources/ template/rose_pine.theme.json
   bloom build -o src/main/resources/ template/rose_pine.xml

# Start IDE with the plugin loaded
ui: template
   ./gradlew runIdeForUiTests
