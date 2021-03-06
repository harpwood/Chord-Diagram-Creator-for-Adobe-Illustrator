```Changelog
# Changelog Chord Diagram Creator for Adobe Illustrator
```

```
## [0.7.2] beta 
### Fixed
- Exception error, when the name of the chord is empty

## [0.7.1] beta 
### Refactoring

## [0.7.0] beta 
### Added
- Functionality of the [Draw Chord] Button
- The chord engine (migrated from deprecated repo)
- Applied the Fonts on the chord Engine
- Renamed the script from 'ChordDiagramCreator.jsx' to 'Chord Diagram Creator.jsx'
- More info in README.MD 

## [0.4.2] 
### Added
- The About dialog
- The functionality of about dialog buttons

## [0.4.0] 
### Added
- Support buttons functionality in options dialog
- [Factory Reset] button functionality in options dialog
### Removed
- Some typos

## [0.3.8] 
### Added
- [Apply] button in options implemented for the fonts Tab. Now this button will save all the font changes
- [Defaults] button in options implemented for the fonts Tab. Now this button will restore all the font changes to default values
- Some refactoring and UI reformating
- The openURL function

## [0.3.4] 
### Added
- An if statement to check if the script is already running, if it does the script will not run
- An if statement to check if the options dialog is already open, if it is already open it will not open again
### Changed
- The [Close] button of the main window, to [Quit] button

## [0.3.1] 
### Added
- FingersUsedFontDropDown fonts population
- FingersUsedFontSizeInput, FingersUsedFontHInput and FingersUsedFontVInput implementation
- FretNumberFontDropDown fonts population
- FretNumberFontSizeInput, FretNumberFontHInput and FretNumberFontVInput implementation
- ChordNameFontSizeInput, ChordNameFontHInput and ChordNameFontVInput input evaluation
- FingersUsedFontSizeInput, FingersUsedFontHInput and FingersUsedFontVInput input evaluation
-FretPositionsFontSizeInput, FretPositionsFontHInput and FretPositionsFontVInput input evaluation
- FretNumberFontSizeInput, FretNumberFontHInput and FretNumberFontVInput input evaluation

## [0.2.3] 
### Added
- Options dialog
- ChordNameFontDropDown fonts population
- ChordNameFontSizeInput, ChordNameFontHInput and ChordNameFontVInput implementation

## [0.1.9] 
### Added
- quit confirmation dialog box
- lock warning dialog box

## [0.1.7] 
### Added
- the fuctionality of prefs.isLinkWidthToHeight. Now if enabled, diagram width and height will change by the rule of three
- the fuctionality of prefs.isLinkThickness. Now if enabled, The thickness of strings and frets will change by the rule of three
- the fuctionality of prefs.isLinkHeightToFrets. Now if enabled, the diagram height will change along with the strings and frets dropdown menus.
- The functionality of [New Chord] button. Now the button will reset the panels, [Chord Name], [Number of Strings and Frets], [Fingers Used] and [Fret Positions] if they are not locked  

## [0.1.3] 
### Added
- preferences data enumeration 
- lock icons/check boxes on every panel
- The Fingers Used and Fret Positions input fields are enabled/disabled based on the Number of Strings dropdown menu selection
- All interactable UI elements, expept buttons, are storing in to prefs object
- Minified json2 code https://github.com/douglascrockford/JSON-js
- The user input  autoload and autosave as prefs obj into file. If the file is not found a new file is created and the default settings are included. Excluded chord name and fingerings.
- getIndexOf and getLastIndexOf functions
- setDefaultAt function
- Loaded prefs data evaluation, if evaluation fails assing default value via setDefaultAt function
- btExcecute function. Now the script is compliant to Adobe Illustrator security
### Removed
- The rest alert dialog triggers on event listeners callback functions except buttons

## [0.0.4] Initial commit on GitHub
### Added
- The evalInput function.
- Evaluation of user input via evalInput.
### Removed
- All text input alert dialog triggers on event listeners callback functions 

## [0.0.3] 
### Added
- [prefs] object, it will store the user preferences
- Functionality on "show more" check box. Now It shows/hides the line art options
- The close button closes the main window
### Removed
- The alert dialog trigger on "show more" check box

## [0.0.2] 
### Added
- Event listeners on all UI elements of MainWindow that the user can interact.
- An alert dialog trigger on every event listener, to foolproof them

## [0.0.1] 
### Added
- [ChordDiagramsGenerator.jsx] file created
- MainWindow function. It creates the main window UI. Created on from https://scriptui.joonas.me/
- The link icon as constant String literaly
```

