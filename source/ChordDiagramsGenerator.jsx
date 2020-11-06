//#target illustrator
//#targetengine 'main'

// Constants
VERSION = "v0.0.5"
LINK_ICON = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%09pHYs%00%00%1EB%00%00%1EB%01K%C3%A3%C3%B9%C2%AD%00%00%00%C2%A5IDAT%18%C2%95u%C2%90Q%0D%021%10D%1F%17%04%C2%9C%C2%84%C2%B6%0A%C2%90%40%1D%20%01%14%10%14%20%01P%40P%00%0E%40%02%0A%C3%9AJ%C3%80%01d%C2%9A%C2%BD%C3%8B%C3%81%1D%C3%B3%C3%93t2%C3%997%C2%BB3%26%C2%94rY%00g%40%C3%AF%0B%C3%985SA%C3%A0%008%05%C2%80%C2%A2%C3%BF%C2%BF%C3%A0%09%C2%88%C3%81%C2%BB%23p%01%C3%9A%1E%C2%9Drq6i%05%3C%C2%82w%C3%91*%C3%9C%C2%85%C2%AF%C3%81%C2%81!%C3%9D%C2%80%C2%A5a%C3%95S%C2%8A%C3%8DO(Z7%C3%A1%C3%BAP%C3%B0%C3%AE%C2%A9%C2%8E%C3%97%C2%A1a%C3%81%C2%BDm%C3%9By%15%C3%BBN%C2%B9%C2%AC%C2%BB%C2%9EF%18in%C3%8E6%C3%A5%C3%92%C3%9A%24MP%C2%85%2F%09%C2%BD%C2%B1%C3%83j%C3%A3z%C3%9C%C3%918%C3%A0%03Z%C3%868t%C2%86%C3%B2I%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
ERROR_MSG = "Some went wrong: "; 
ERROR_TITLE = "Oops!!!";
AUTO = "auto";

NUMBER_OF_STRINGS_SELECTION  = "numberOfStringsSelection";
NUMBER_OF_FRETS_SELECTION = "numberOfFretsSelection";
DRAW_BARRE = "drawBarre";
X = "x";
Y = "y";
CAN_REPOSITION_X        = "canRepositionX";
CAN_REPOSITION_Y        = "canRepositionY";
IS_REVERSED             = "isReversed";
WIDTH                   = "width";
HEIGHT                  = "height"; 
RE_POS_SPACING          = "rePosSpacing";
IS_LINK_HEIGHT_TO_FRETS = "isLinkHeightToFrets";
IS_LINK_WIDTH_TO_HEIGHT = "isLinkWidthToHeight";
STRING_THICKNESS        = "stringThickness";
FRET_THICKNESS          = "fretThickness";
IS_LINK_THICKNESS       = "isLinkThickness";
NUT_THICKNESS           = "nutThickness";

prefs = {};     // object that handles prefs data (save/load)
// default values

prefs.numberOfStringsSelection = 2;
prefs.numberOfFretsSelection = 1;
prefs.drawBarre = true;
prefs.showMore = true;
prefs.x = "0";
prefs.y = "0";
prefs.canRepositionX = true;
prefs.canRepositionY = true;

prefs.rePosSpacing = AUTO;
prefs.width = "100";
prefs.height = "100";
prefs.isLinkHeightToFrets = true;
prefs.isLinkWidthToHeight = true;
prefs.isLinkThickness = true;
prefs.stringThickness = AUTO;
prefs.fretThickness = AUTO;
prefs.nutThickness = AUTO;

try{mainWindow = showMainWindow();}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
mainWindow.show();


/**
* Creates the main window UI. Returns the reference of the main window UI
*/
function showMainWindow()
{
    // MAIN WINDOW
    // ==========
    var MainWindow = new Window("window", undefined, undefined, {su1PanelCoordinates: false, maximizeButton: false, minimizeButton: false, independent: false, borderless: false, resizeable: false}); 
        MainWindow.text = "Chord Diagram Creator for Adobe Illustrator " + VERSION; 
        MainWindow.preferredSize.width = 464; 
        MainWindow.preferredSize.height = 483; 
        MainWindow.orientation = "column"; 
        MainWindow.alignChildren = ["left","top"]; 
        MainWindow.spacing = 10; 
        MainWindow.margins = 16; 

    // MAIN TOP GROUP
    // ============
    var MainTopGroup = MainWindow.add("group", undefined, {name: "MainTopGroup"}); 
        MainTopGroup.preferredSize.width = 449; 
        MainTopGroup.preferredSize.height = 251; 
        MainTopGroup.orientation = "row"; 
        MainTopGroup.alignChildren = ["left","top"]; 
        MainTopGroup.spacing = 10; 
        MainTopGroup.margins = 0; 

    // MAIN CHORD GROUP
    // ==============
    var MainChordGroup = MainTopGroup.add("group", undefined, {name: "MainChordGroup"}); 
        MainChordGroup.preferredSize.width = 277; 
        MainChordGroup.preferredSize.height = 250; 
        MainChordGroup.orientation = "column"; 
        MainChordGroup.alignChildren = ["left","center"]; 
        MainChordGroup.spacing = 10; 
        MainChordGroup.margins = 0; 

    // CHORD NAME AND SAVED GROUP
    // ======================
    var ChordNameAndSavedGroup = MainChordGroup.add("group", undefined, {name: "ChordNameAndSavedGroup"}); 
        ChordNameAndSavedGroup.preferredSize.width = 327; 
        ChordNameAndSavedGroup.preferredSize.height = 55; 
        ChordNameAndSavedGroup.orientation = "row"; 
        ChordNameAndSavedGroup.alignChildren = ["left","center"]; 
        ChordNameAndSavedGroup.spacing = 10; 
        ChordNameAndSavedGroup.margins = 0; 

    // CHORD NAME PANEL
    // ==============
    var ChordNamePanel = ChordNameAndSavedGroup.add("panel", undefined, undefined, {name: "ChordNamePanel"}); 
        ChordNamePanel.text = "Chord Name"; 
        ChordNamePanel.preferredSize.width = 120; 
        ChordNamePanel.preferredSize.height = 53; 
        ChordNamePanel.orientation = "row"; 
        ChordNamePanel.alignChildren = ["left","center"]; 
        ChordNamePanel.spacing = 0; 
        ChordNamePanel.margins = [10,10,10,10]; 

    var ChordNameInput = ChordNamePanel.add('edittext {properties: {name: "ChordNameInput"}}');
        ChordNameInput.text = "";
        ChordNameInput.helpTip = "The name of the chord"; 
        ChordNameInput.preferredSize.width = 94; 
        ChordNameInput.preferredSize.height = 23;
var lastChordNameInput = ChordNameInput.text;

            ChordNameInput.onChange = function () 
            {
                lastChordNameInput = ChordNameInput.text;
            }
   
    // YOUR SAVED CHORDS PANEL //TODO
    // ====================
     var YourSavedChordsPanel = ChordNameAndSavedGroup.add("panel", undefined, undefined, {name: "YourSavedChordsPanel"}); 
        YourSavedChordsPanel.text = "Your Saved Chords"; 
        YourSavedChordsPanel.preferredSize.width = 185; 
        YourSavedChordsPanel.preferredSize.height = 53; 
        YourSavedChordsPanel.orientation = "column"; 
        YourSavedChordsPanel.alignChildren = ["left","top"]; 
        YourSavedChordsPanel.spacing = 10; 
        YourSavedChordsPanel.margins = 10;  

    var YourSavedChordsDropDown_array = ["Not Found Any"]; 
    var YourSavedChordsDropDown = YourSavedChordsPanel.add("dropdownlist", undefined, undefined, {name: "YourSavedChordsDropDown", items: YourSavedChordsDropDown_array}); 
        YourSavedChordsDropDown.enabled = false; 
        YourSavedChordsDropDown.helpTip = "The ability to load chords will be added in future update"; 
        YourSavedChordsDropDown.selection = 0; 
        YourSavedChordsDropDown.preferredSize.width = 163; 
        YourSavedChordsDropDown.preferredSize.height = 23; 

    // NUMBER OF STRINGS AND FRETS PANEL
    // ============================
    var NumberOfStringsAndFretsPanel = MainChordGroup.add("panel", undefined, undefined, {name: "NumberOfStringsAndFretsPanel"}); 
        NumberOfStringsAndFretsPanel.text = "Number of Strings and Frets"; 
        NumberOfStringsAndFretsPanel.preferredSize.width = 316; 
        NumberOfStringsAndFretsPanel.preferredSize.height = 53; 
        NumberOfStringsAndFretsPanel.orientation = "row"; 
        NumberOfStringsAndFretsPanel.alignChildren = ["left","top"]; 
        NumberOfStringsAndFretsPanel.spacing = 23; 
        NumberOfStringsAndFretsPanel.margins = 10; 

    var NumberOfStringsDropDown_array = ["4 Strings","5 Strings","6 Strings","7 Strings","8 Strings","9 Strings"]; 
    var NumberOfStringsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfStringsDropDown", items: NumberOfStringsDropDown_array}); 
        NumberOfStringsDropDown.helpTip = "The number of strings"; 
        NumberOfStringsDropDown.selection = prefs.numberOfStringsSelection; 
        NumberOfStringsDropDown.preferredSize.width = 80; 
        NumberOfStringsDropDown.preferredSize.height = 23; 

            NumberOfStringsDropDown.onChange = function () 
            {
                prefs.numberOfStringsSelection = NumberOfStringsDropDown.selection;

                for (i = 4; i < 10; i++)
                {
                    if (NumberOfStringsDropDown.selection == NumberOfStringsDropDown.items[i-4]) 
                    {
                        //change input visibility based on selected dropmenu option
                        for (var j = 0; j < 9; j++)
                        if (j < i) 
                        {
                             
                            FingersUsedInput[j].enabled = true;
                            FretPositionsInput[j].enabled = true;
                        }
                        else
                        {
                            FingersUsedInput[j].enabled = false;  
                            FretPositionsInput[j].enabled = false;
                        }
        
                        prefs.numberOfStringsSelection = i-4;
                    } 
                }
            }

    var NumberOfFretsDropDown_array = ["4 Frets","5 Frets","6 Frets","7 Frets","8 Frets","9 Frets"]; 
    var NumberOfFretsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfFretsDropDown", items: NumberOfFretsDropDown_array}); 
        NumberOfFretsDropDown.helpTip = "The number of frets"; 
        NumberOfFretsDropDown.selection = prefs.numberOfFretsSelection; 
        NumberOfFretsDropDown.preferredSize.width = 80; 
        NumberOfFretsDropDown.preferredSize.height = 23;

            NumberOfFretsDropDown.onChange = function () 
            {
                prefs.numberOfFretsSelection = NumberOfFretsDropDown.selection;
            } 

    var DrawBarreCheckBox = NumberOfStringsAndFretsPanel.add("checkbox", undefined, undefined, {name: "DrawBarreCheckBox"}); 
        DrawBarreCheckBox.helpTip = "If enabled will be drawn barre, if the same finger is on more than one string "; 
        DrawBarreCheckBox.text = "Draw Barre"; 
        DrawBarreCheckBox.alignment = ["left","center"]; 
        DrawBarreCheckBox.value = prefs.drawBarre;

            DrawBarreCheckBox.onClick = function () 
            {
                prefs.drawBarre = DrawBarreCheckBox.value;
            }

    // FINGERS USED PANEL //TODO LOOP
    // ================
    var FingersUsedPanel = MainChordGroup.add("panel", undefined, undefined, {name: "FingersUsedPanel"}); 
        FingersUsedPanel.text = "Fingers Used"; 
        FingersUsedPanel.preferredSize.width = 313; 
        FingersUsedPanel.preferredSize.height = 53; 
        FingersUsedPanel.orientation = "row"; 
        FingersUsedPanel.alignChildren = ["left","center"]; 
        FingersUsedPanel.spacing = 6; 
        FingersUsedPanel.margins = 10; 

        var FingersUsedInput = [];
        for (var i = 0; i < 9; i++)
        {
            var FingersUsedInputItem = FingersUsedPanel.add('edittext {properties: {name: "FingersUsedInput"}}'); 
                FingersUsedInputItem.helpTip = "Write here the finger that is used on the Xth string. \n T - Thumb, 1- Index, 2 - Middle, 3 - Ring, 4- Pinky\nIf not used any finger, leave it empty."; 
                FingersUsedInputItem.preferredSize.width = 27; 
                FingersUsedInputItem.preferredSize.height = 23;

                if (i > prefs.numberOfStringsSelection + 3) FingersUsedInputItem.enabled = false;
            
            FingersUsedInput.push(FingersUsedInputItem);
        }

    // FRET POSITIONS //TODO LOOP
    // =============
    var FretPositions = MainChordGroup.add("panel", undefined, undefined, {name: "FretPositions"}); 
        FretPositions.text = "Fret Positions"; 
        FretPositions.preferredSize.width = 313; 
        FretPositions.preferredSize.height = 53; 
        FretPositions.orientation = "row"; 
        FretPositions.alignChildren = ["left","center"]; 
        FretPositions.spacing = 6; 
        FretPositions.margins = 10; 
        
        var FretPositionsInput = [];

        for (var i = 0; i < 9; i++)
        {
            var FretPositionsInputItem = FretPositions.add('edittext {properties: {name: "FretPositionsInput"}}'); 
                FretPositionsInputItem.helpTip = "Write here the fret number that the finger is pressing on the  Xth string. \n 0 - Open string, o - Open string, x or emty - not used string "; 
                FretPositionsInputItem.preferredSize.width = 27; 
                FretPositionsInputItem.preferredSize.height = 23; 
            
            if (i > prefs.numberOfStringsSelection + 3) FretPositionsInputItem.enabled = false;
            
            FretPositionsInput.push(FretPositionsInputItem);
        }

    // MAIN TOP GROUP
    // ============
    var ButtonDivider = MainTopGroup.add("panel", undefined, undefined, {name: "ButtonDivider"}); 
        ButtonDivider.alignment = "fill"; 

    // MAIN BUTTON GROUP
    // ===============
    var MainButtonGroup = MainTopGroup.add("group", undefined, {name: "MainButtonGroup"}); 
        MainButtonGroup.preferredSize.width = 39; 
        MainButtonGroup.preferredSize.height = 253; 
        MainButtonGroup.orientation = "column"; 
        MainButtonGroup.alignChildren = ["fill","center"]; 
        MainButtonGroup.spacing = 6; 
        MainButtonGroup.margins = 0; 

    var DrawChordBtn = MainButtonGroup.add("button", undefined, undefined, {name: "DrawChordBtn"}); 
        DrawChordBtn.helpTip = "Will draw the chord"; 
        DrawChordBtn.text = "Draw Chord"; 
        DrawChordBtn.preferredSize.width = 100; 
        DrawChordBtn.preferredSize.height = 40; 

            DrawChordBtn.onClick = function () {alert("OK");}

    // MAIN BUTTON SUBGROUP
    // ==================
    var MainButtonSubGroup = MainButtonGroup.add("group", undefined, {name: "MainButtonSubGroup"}); 
        MainButtonSubGroup.preferredSize.width = 100; 
        MainButtonSubGroup.preferredSize.height = 170; 
        MainButtonSubGroup.orientation = "column"; 
        MainButtonSubGroup.alignChildren = ["fill","bottom"]; 
        MainButtonSubGroup.spacing = 10; 
        MainButtonSubGroup.margins = 0; 

    var NewChordBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "NewChordBtn"}); 
        NewChordBtn.helpTip = "Will clear the user input textfields"; 
        NewChordBtn.text = "New Chord"; 
        NewChordBtn.preferredSize.width = 97; 
        NewChordBtn.preferredSize.height = 25;

            NewChordBtn.onClick = function () {alert("OK");} 

    var SaveChordBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "SaveChordBtn"}); 
        SaveChordBtn.enabled = false; 
        SaveChordBtn.helpTip = "The ability to save chords will be added in future update"; 
        SaveChordBtn.text = "Save Chord"; 
        SaveChordBtn.preferredSize.width = 97; 
        SaveChordBtn.preferredSize.height = 24;

            SaveChordBtn.onClick = function () {alert("OK");}

    var OptionsBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "OptionsBtn"}); 
        OptionsBtn.helpTip = "Will open an options dialog "; 
        OptionsBtn.text = "Options"; 
        OptionsBtn.preferredSize.width = 98; 
        OptionsBtn.preferredSize.height = 24;

            OptionsBtn.onClick = function () {alert("OK");}

    var AboutBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "AboutBtn"}); 
        AboutBtn.helpTip = "Will open a dialog with information about the Chord Diagram Generator script"; 
        AboutBtn.text = "About"; 
        AboutBtn.preferredSize.width = 98; 
        AboutBtn.preferredSize.height = 24;

            AboutBtn.onClick = function () {alert("OK");} 

    var CloseBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "CloseBtn"}); 
        CloseBtn.helpTip = "Will close this window and end the Chord Diagram Generator"; 
        CloseBtn.text = "Close"; 
        CloseBtn.preferredSize.width = 98; 
        CloseBtn.preferredSize.height = 23;

            CloseBtn.onClick = function () {MainWindow.close();} //TODO Confirm exit

    // SHOW MORE GROUP
    // =============
    var ShowMoreGroup = MainButtonGroup.add("group", undefined, {name: "ShowMoreGroup"}); 
        ShowMoreGroup.preferredSize.width = 100; 
        ShowMoreGroup.preferredSize.height = 30; 
        ShowMoreGroup.orientation = "row"; 
        ShowMoreGroup.alignChildren = ["center","center"]; 
        ShowMoreGroup.spacing = 10; 
        ShowMoreGroup.margins = 0; 

    var ShowMoreCheckBox = ShowMoreGroup.add("checkbox", undefined, undefined, {name: "ShowMoreCheckBox"}); 
        ShowMoreCheckBox.helpTip = "Will show line art customizations for chord"; 
        ShowMoreCheckBox.text = "Show More"; 
        ShowMoreCheckBox.preferredSize.width = 84; 
        ShowMoreCheckBox.preferredSize.height = 14; 
        ShowMoreCheckBox.alignment = ["center","center"]; 
        ShowMoreCheckBox.value = prefs.showMore;

            // Change the window size based on ShowMoreCheckBox.value
            ShowMoreCheckBox.onClick = function () 
            {
                prefs.showMore = MainBottomGroup.visible;
                MainBottomGroup.visible = ShowMoreCheckBox.value;     
                MainWindow.size = ShowMoreCheckBox.value ? {width: 480, height: 490} : {width: 480, height: 278};
            }

    // MAIN WINDOW
    // ==========
    var MainDivider = MainWindow.add("panel", undefined, undefined, {name: "MainDivider"}); 
        MainDivider.alignment = "fill"; 

    // MAIN BOTTOM GROUP
    // ===============
    var MainBottomGroup = MainWindow.add("group", undefined, {name: "MainBottomGroup"}); 
        MainBottomGroup.preferredSize.width = 446; 
        MainBottomGroup.preferredSize.height = 181; 
        MainBottomGroup.orientation = "column"; 
        MainBottomGroup.alignChildren = ["left","center"]; 
        MainBottomGroup.spacing = 10; 
        MainBottomGroup.margins = 0; 

    // POS AND REPOS GROUP
    // ================
    var PosAndReposGroup = MainBottomGroup.add("group", undefined, {name: "PosAndReposGroup"}); 
        PosAndReposGroup.preferredSize.width = 446; 
        PosAndReposGroup.preferredSize.height = 55; 
        PosAndReposGroup.orientation = "row"; 
        PosAndReposGroup.alignChildren = ["left","center"]; 
        PosAndReposGroup.spacing = 10; 
        PosAndReposGroup.margins = 0; 

    // POSITIONING PANEL
    // ================
    var PositioningPanel = PosAndReposGroup.add("panel", undefined, undefined, {name: "PositioningPanel"}); 
        PositioningPanel.text = "Positioning"; 
        PositioningPanel.preferredSize.width = 151; 
        PositioningPanel.preferredSize.height = 53; 
        PositioningPanel.orientation = "row"; 
        PositioningPanel.alignChildren = ["left","top"]; 
        PositioningPanel.spacing = 16; 
        PositioningPanel.margins = 10; 

    // POSITIONING X GROUP
    // =================
    var PositioningXGroup = PositioningPanel.add("group", undefined, {name: "PositioningXGroup"}); 
        PositioningXGroup.preferredSize.width = 58; 
        PositioningXGroup.preferredSize.height = 25; 
        PositioningXGroup.orientation = "row"; 
        PositioningXGroup.alignChildren = ["left","center"]; 
        PositioningXGroup.spacing = 7; 
        PositioningXGroup.margins = 0; 
        PositioningXGroup.alignment = ["left","center"]; 

    var PositioningX = PositioningXGroup.add("statictext", undefined, undefined, {name: "PositioningX"}); 
        PositioningX.text = "x:"; 
        PositioningX.preferredSize.width = 11; 
        PositioningX.preferredSize.height = 17; 
        PositioningX.alignment = ["left","center"]; 

    var PositioningXInput = PositioningXGroup.add('edittext {properties: {name: "PositioningXInput"}}'); 
        PositioningXInput.helpTip = "The x position that chord will be drawn on Artboard"; 
        PositioningXInput.text = prefs.x; 
        PositioningXInput.preferredSize.width = 50; 
        PositioningXInput.preferredSize.height = 23; 
        PositioningXInput.alignment = ["left","center"];
var lastPositioningXInput = PositioningXInput.text;

            PositioningXInput.onChange = function () 
            {
                PositioningXInput.text = evalInput(PositioningXInput.text, lastPositioningXInput);
                lastPositioningXInput = PositioningXInput.text;
                prefs.x = PositioningXInput.text;
            }

    // POSITIONING Y GROUP
    // =================
    var PositioningYGroup = PositioningPanel.add("group", undefined, {name: "PositioningYGroup"}); 
        PositioningYGroup.preferredSize.width = 57; 
        PositioningYGroup.preferredSize.height = 25; 
        PositioningYGroup.orientation = "row"; 
        PositioningYGroup.alignChildren = ["left","center"]; 
        PositioningYGroup.spacing = 6; 
        PositioningYGroup.margins = 0; 
        PositioningYGroup.alignment = ["left","center"]; 

    var PositioningY = PositioningYGroup.add("statictext", undefined, undefined, {name: "PositioningY"}); 
        PositioningY.text = "y:"; 
        PositioningY.preferredSize.width = 11; 
        PositioningY.preferredSize.height = 17; 
        PositioningY.alignment = ["left","center"]; 

    var PositioningYInput = PositioningYGroup.add('edittext {properties: {name: "PositioningYInput"}}'); 
        PositioningYInput.helpTip = "The y position that chord will be drawn on Artboard"; 
        PositioningYInput.text = prefs.y; 
        PositioningYInput.preferredSize.width = 50; 
        PositioningYInput.preferredSize.height = 23; 
        PositioningYInput.alignment = ["left","center"];
var lastPositioningYInput = PositioningYInput.text;

            PositioningYInput.onChange = function () 
            {
                PositioningYInput.text = evalInput(PositioningYInput.text, lastPositioningYInput);
                lastPositioningYInput = PositioningYInput.text;
                prefs.y = PositioningYInput.text;
            }

    // REPOSITIONING PANEL
    // ==================
    var RepositioningPanel = PosAndReposGroup.add("panel", undefined, undefined, {name: "RepositioningPanel"}); 
        RepositioningPanel.text = "Repositioning"; 
        RepositioningPanel.preferredSize.width = 260; 
        RepositioningPanel.preferredSize.height = 53; 
        RepositioningPanel.orientation = "column"; 
        RepositioningPanel.alignChildren = ["left","top"]; 
        RepositioningPanel.spacing = 4; 
        RepositioningPanel.margins = 10; 

    // REPOSITIONING GROUP
    // ==================
    var RepositioningGroup = RepositioningPanel.add("group", undefined, {name: "RepositioningGroup"}); 
        RepositioningGroup.preferredSize.width = 227; 
        RepositioningGroup.preferredSize.height = 25; 
        RepositioningGroup.orientation = "row"; 
        RepositioningGroup.alignChildren = ["center","center"]; 
        RepositioningGroup.spacing = 27; 
        RepositioningGroup.margins = 0; 

    var ReposXCheckBox = RepositioningGroup.add("checkbox", undefined, undefined, {name: "ReposXCheckBox"}); 
        ReposXCheckBox.helpTip = "If enabled after drawing a chord, the next chord will be drawn further  to the right on x axis,\n by the amount specified in spacing. For opposite direction, use a negative number   "; 
        ReposXCheckBox.text = "x"; 
        ReposXCheckBox.preferredSize.width = 27; 
        ReposXCheckBox.preferredSize.height = 14; 
        ReposXCheckBox.alignment = ["center","center"];
        ReposXCheckBox.value = prefs.canRepositionX;

            ReposXCheckBox.onClick = function() 
            {
                prefs.canRepositionX = ReposXCheckBox.value;
            } 

    var ReposYCheckBox = RepositioningGroup.add("checkbox", undefined, undefined, {name: "ReposYCheckBox"}); 
        ReposYCheckBox.helpTip = "If enabled after drawing a chord, the next chord will be drawn upwards on y axis,\n by the amount specified in spacing. For opposite direction, use a negative number   "; 
        ReposYCheckBox.text = "y"; 
        ReposYCheckBox.preferredSize.width = 27; 
        ReposYCheckBox.preferredSize.height = 14; 
        ReposYCheckBox.alignment = ["center","center"];
        ReposYCheckBox.value = prefs.canRepositionY;

            ReposYCheckBox.onClick = function() 
            {
                prefs.canRepositionY = ReposYCheckBox.value;
            } 

    // REPOS SPACING GROUP
    // =================
    var ReposSpacingGroup = RepositioningGroup.add("group", undefined, {name: "ReposSpacingGroup"}); 
        ReposSpacingGroup.preferredSize.width = 122; 
        ReposSpacingGroup.preferredSize.height = 25; 
        ReposSpacingGroup.orientation = "row"; 
        ReposSpacingGroup.alignChildren = ["center","center"]; 
        ReposSpacingGroup.spacing = 6; 
        ReposSpacingGroup.margins = 0; 

    var ReposSpacing = ReposSpacingGroup.add("statictext", undefined, undefined, {name: "ReposSpacing"}); 
        ReposSpacing.text = "Spacing : "; 
        ReposSpacing.preferredSize.width = 57; 
        ReposSpacing.preferredSize.height = 17; 

    var ReposSpacingInput = ReposSpacingGroup.add('edittext {properties: {name: "ReposSpacingInput"}}'); 
        ReposSpacingInput.helpTip = "The amount  in distance in px that next chord diagram will  be drawn. For\nopposite direction, use a negative number.  If the value is not numerical \nthe spacing will be calculated automatically "; 
        ReposSpacingInput.text = prefs.rePosSpacing; 
        ReposSpacingInput.preferredSize.width = 55; 
        ReposSpacingInput.preferredSize.height = 23;
var lastReposSpacingInput = ReposSpacingInput.text;

            ReposSpacingInput.onChange = function() 
            {
                ReposSpacingInput.text = evalInput(ReposSpacingInput.text, lastReposSpacingInput, true);
                lastReposSpacingInput = ReposSpacingInput.text;
                prefs.rePosSpacing = ReposSpacingInput.text;
            } 

    // DIAGRAM SIZE GROUP
    // ================
    var DiagramSizeGroup = MainBottomGroup.add("group", undefined, {name: "DiagramSizeGroup"}); 
        DiagramSizeGroup.preferredSize.width = 446; 
        DiagramSizeGroup.preferredSize.height = 55; 
        DiagramSizeGroup.orientation = "column"; 
        DiagramSizeGroup.alignChildren = ["left","center"]; 
        DiagramSizeGroup.spacing = 7; 
        DiagramSizeGroup.margins = 0; 

    // DIAGRAM SIZE PANEL
    // ================
    var DiagramSizePanel = DiagramSizeGroup.add("panel", undefined, undefined, {name: "DiagramSizePanel"}); 
        DiagramSizePanel.text = "Diagram Size"; 
        DiagramSizePanel.preferredSize.width = 444; 
        DiagramSizePanel.preferredSize.height = 53; 
        DiagramSizePanel.orientation = "row"; 
        DiagramSizePanel.alignChildren = ["center","top"]; 
        DiagramSizePanel.spacing = 15; 
        DiagramSizePanel.margins = 10; 

    // DIAGRAM WIDTH GROUP
    // =================
    var DiagramWidthGroup = DiagramSizePanel.add("group", undefined, {name: "DiagramWidthGroup"}); 
        DiagramWidthGroup.preferredSize.width = 90; 
        DiagramWidthGroup.preferredSize.height = 25; 
        DiagramWidthGroup.orientation = "row"; 
        DiagramWidthGroup.alignChildren = ["left","center"]; 
        DiagramWidthGroup.spacing = 0; 
        DiagramWidthGroup.margins = 0; 

    var DiagramWidth = DiagramWidthGroup.add("statictext", undefined, undefined, {name: "DiagramWidth"}); 
        DiagramWidth.text = "Width:"; 
        DiagramWidth.preferredSize.width = 41; 
        DiagramWidth.preferredSize.height = 17; 
        DiagramWidth.alignment = ["left","center"]; 

    var DiagramWidthInput = DiagramWidthGroup.add('edittext {properties: {name: "DiagramWidthInput"}}'); 
        DiagramWidthInput.helpTip = "The width of the chord diagram.\n If the value is not numerical  the width will be calculated automatically  "; 
        DiagramWidthInput.text = prefs.width; 
        DiagramWidthInput.preferredSize.width = 45; 
        DiagramWidthInput.preferredSize.height = 23; 
        DiagramWidthInput.alignment = ["left","center"]; 
var lastDiagramWidthInput = DiagramWidthInput.text;
            DiagramWidthInput.onChange = function() 
            {
                DiagramWidthInput.text = evalInput(DiagramWidthInput.text, lastDiagramWidthInput);
                lastDiagramWidthInput = DiagramWidthInput.text;
                prefs.width = DiagramWidthInput.text;
            }

    // LINK WIDTH TO HEIGHT GROUP
    // ======================
    var LinkWidthToHeightGroup = DiagramSizePanel.add("group", undefined, {name: "LinkWidthToHeightGroup"}); 
        LinkWidthToHeightGroup.preferredSize.width = 32; 
        LinkWidthToHeightGroup.preferredSize.height = 17; 
        LinkWidthToHeightGroup.orientation = "row"; 
        LinkWidthToHeightGroup.alignChildren = ["center","center"]; 
        LinkWidthToHeightGroup.spacing = 0; 
        LinkWidthToHeightGroup.margins = 0; 
        LinkWidthToHeightGroup.alignment = ["center","center"]; 

    var LinkWidthToHeightCheckBox = LinkWidthToHeightGroup.add("checkbox", undefined, undefined, {name: "LinkWidthToHeightCheckBox"}); 
        LinkWidthToHeightCheckBox.helpTip = "If enabled, the width and height values of the diagram will be linked,\nthus changing the one value will also affect the other analogically "; 
        LinkWidthToHeightCheckBox.preferredSize.width = 18; 
        LinkWidthToHeightCheckBox.preferredSize.height = 14; 
        LinkWidthToHeightCheckBox.alignment = ["center","center"]; 
        LinkWidthToHeightCheckBox.value = prefs.isLinkWidthToHeight; 

            LinkWidthToHeightCheckBox.onClick = function()
            {
                prefs.isLinkWidthToHeight = LinkWidthToHeightCheckBox.value;
            }

    var LinkWidthToHeightImage = LinkWidthToHeightGroup.add("image", undefined, File.decode(LINK_ICON), {name: "LinkWidthToHeightImage"}); 
        LinkWidthToHeightImage.alignment = ["center","center"]; 

    // DIAGRAM HEIGHT GROUP
    // ==================
    var DiagramHeightGroup = DiagramSizePanel.add("group", undefined, {name: "DiagramHeightGroup"}); 
        DiagramHeightGroup.preferredSize.width = 95; 
        DiagramHeightGroup.preferredSize.height = 25; 
        DiagramHeightGroup.orientation = "row"; 
        DiagramHeightGroup.alignChildren = ["center","center"]; 
        DiagramHeightGroup.spacing = 0; 
        DiagramHeightGroup.margins = 0; 

    var DiagramHeight = DiagramHeightGroup.add("statictext", undefined, undefined, {name: "DiagramHeight"}); 
        DiagramHeight.text = "Height:"; 
        DiagramHeight.preferredSize.width = 46; 
        DiagramHeight.preferredSize.height = 17; 
        DiagramHeight.alignment = ["lecenterft","center"]; 

    var DiagramHeightInput = DiagramHeightGroup.add('edittext {properties: {name: "DiagramHeightInput"}}'); 
        DiagramHeightInput.helpTip = "The height of the chord diagram"; 
        DiagramHeightInput.text = prefs.height; 
        DiagramHeightInput.preferredSize.width = 45; 
        DiagramHeightInput.preferredSize.height = 23; 
        DiagramHeightInput.alignment = ["center","center"]; 
var lastDiagramHeightInput = DiagramHeightInput.text;
            DiagramHeightInput.onChange = function() 
            {
                DiagramHeightInput.text = evalInput(DiagramHeightInput.text, lastDiagramHeightInput);
                lastDiagramHeightInput = DiagramHeightInput.text;
                prefs.height = DiagramHeightInput.text;
            }

    // LINK HEIGHT TO FRETS GROUP
    // ======================
    var LinkHeightToFretsGroup = DiagramSizePanel.add("group", undefined, {name: "LinkHeightToFretsGroup"}); 
        LinkHeightToFretsGroup.preferredSize.width = 121; 
        LinkHeightToFretsGroup.preferredSize.height = 19; 
        LinkHeightToFretsGroup.orientation = "row"; 
        LinkHeightToFretsGroup.alignChildren = ["center","center"]; 
        LinkHeightToFretsGroup.spacing = 0; 
        LinkHeightToFretsGroup.margins = 0; 

    var LinkHeightToFretsCheckBox = LinkHeightToFretsGroup.add("checkbox", undefined, undefined, {name: "LinkHeightToFretsCheckBox"}); 
        LinkHeightToFretsCheckBox.helpTip = "If enabled, the height and the number of frets will be linked,\nthus changing the number of  frets will also affect the height analogically "; 
        LinkHeightToFretsCheckBox.preferredSize.width = 18; 
        LinkHeightToFretsCheckBox.preferredSize.height = 14; 
        LinkHeightToFretsCheckBox.alignment = ["center","center"];
        LinkHeightToFretsCheckBox.value = prefs.isLinkHeightToFrets;

            LinkHeightToFretsCheckBox.onClick = function()
            {
                prefs.isLinkHeightToFrets = LinkHeightToFretsCheckBox.value;
            } 

    var LinkHeightToFretsImage = LinkHeightToFretsGroup.add("image", undefined, File.decode(LINK_ICON), {name: "LinkHeightToFretsImage"}); 
        LinkHeightToFretsImage.alignment = ["center","center"]; 

    var LinkHeightToFrets = LinkHeightToFretsGroup.add("statictext", undefined, undefined, {name: "LinkHeightToFrets"}); 
        LinkHeightToFrets.text = "Height to Frets"; 
        LinkHeightToFrets.preferredSize.width = 87; 
        LinkHeightToFrets.preferredSize.height = 17; 
        LinkHeightToFrets.justify = "right"; 

    // LINE ART THICKNESS GROUP
    // =====================
    var LineArtThicknessGroup = MainBottomGroup.add("group", undefined, {name: "LineArtThicknessGroup"}); 
        LineArtThicknessGroup.preferredSize.width = 434; 
        LineArtThicknessGroup.preferredSize.height = 55; 
        LineArtThicknessGroup.orientation = "row"; 
        LineArtThicknessGroup.alignChildren = ["left","center"]; 
        LineArtThicknessGroup.spacing = 8; 
        LineArtThicknessGroup.margins = 0; 

    // LINE ART THICKNESS PANEL
    // =====================
    var LineArtThicknessPanel = LineArtThicknessGroup.add("panel", undefined, undefined, {name: "LineArtThicknessPanel"}); 
        LineArtThicknessPanel.text = "Line Art Thickness"; 
        LineArtThicknessPanel.preferredSize.width = 315; 
        LineArtThicknessPanel.preferredSize.height = 53; 
        LineArtThicknessPanel.orientation = "row"; 
        LineArtThicknessPanel.alignChildren = ["left","top"]; 
        LineArtThicknessPanel.spacing = 5; 
        LineArtThicknessPanel.margins = 10; 

    // LINE ART THICKNESS STRINGSGROUP
    // ============================
    var LineArtThicknessStringsGroup = LineArtThicknessPanel.add("group", undefined, {name: "LineArtThicknessStringsGroup"}); 
        LineArtThicknessStringsGroup.preferredSize.width = 94; 
        LineArtThicknessStringsGroup.preferredSize.height = 25; 
        LineArtThicknessStringsGroup.orientation = "row"; 
        LineArtThicknessStringsGroup.alignChildren = ["left","center"]; 
        LineArtThicknessStringsGroup.spacing = 0; 
        LineArtThicknessStringsGroup.margins = 0; 

    var LineArtThicknessStrings = LineArtThicknessStringsGroup.add("statictext", undefined, undefined, {name: "LineArtThicknessStrings"}); 
        LineArtThicknessStrings.text = "Strings:"; 
        LineArtThicknessStrings.preferredSize.width = 48; 
        LineArtThicknessStrings.preferredSize.height = 17; 
        LineArtThicknessStrings.alignment = ["left","center"]; 

    var LineArtThicknessStringsInput = LineArtThicknessStringsGroup.add('edittext {properties: {name: "LineArtThicknessStringsInput"}}'); 
        LineArtThicknessStringsInput.helpTip = "The thickness of the line art that represents the strings"; 
        LineArtThicknessStringsInput.text = prefs.stringThickness; 
        LineArtThicknessStringsInput.preferredSize.width = 42; 
        LineArtThicknessStringsInput.preferredSize.height = 23; 
        LineArtThicknessStringsInput.alignment = ["left","center"];
var lastLineArtThicknessStringsInput = LineArtThicknessStringsInput.text;

            LineArtThicknessStringsInput.onChange = function() 
            {
                LineArtThicknessStringsInput.text = evalInput(LineArtThicknessStringsInput.text, lastLineArtThicknessStringsInput, true);
                lastLineArtThicknessStringsInput = LineArtThicknessStringsInput.text;
                prefs.stringThickness = LineArtThicknessStringsInput.text;
            } 

    // LINK STRING TO FRETS THICKNESS GROUP
    // ===============================
    var LinkStringToFretsThicknessGroup = LineArtThicknessPanel.add("group", undefined, {name: "LinkStringToFretsThicknessGroup"}); 
        LinkStringToFretsThicknessGroup.preferredSize.width = 32; 
        LinkStringToFretsThicknessGroup.preferredSize.height = 17; 
        LinkStringToFretsThicknessGroup.orientation = "row"; 
        LinkStringToFretsThicknessGroup.alignChildren = ["left","center"]; 
        LinkStringToFretsThicknessGroup.spacing = 0; 
        LinkStringToFretsThicknessGroup.margins = 0; 
        LinkStringToFretsThicknessGroup.alignment = ["left","center"]; 

    var LinkStringToFretsThicknessCheckBox = LinkStringToFretsThicknessGroup.add("checkbox", undefined, undefined, {name: "LinkStringToFretsThicknessCheckBox"}); 
        LinkStringToFretsThicknessCheckBox.helpTip = "If enabled, the thickness of strings and frets will be linked, thus\nchanging the one value will also affect the other analogically "; 
        LinkStringToFretsThicknessCheckBox.preferredSize.width = 18; 
        LinkStringToFretsThicknessCheckBox.preferredSize.height = 14; 
        LinkStringToFretsThicknessCheckBox.alignment = ["left","center"];
        LinkStringToFretsThicknessCheckBox.value = prefs.isLinkThickness;

            LinkStringToFretsThicknessCheckBox.onClick = function()
            {
                prefs.isLinkThickness = LinkStringToFretsThicknessCheckBox.value;
            }  

    var LinkStringToFretsThicknessImage = LinkStringToFretsThicknessGroup.add("image", undefined, File.decode(LINK_ICON), {name: "LinkStringToFretsThicknessImage"}); 

    // LINE ART THICKNESS FRETS GROUP
    // ==========================
    var LineArtThicknessFretsGroup = LineArtThicknessPanel.add("group", undefined, {name: "LineArtThicknessFretsGroup"}); 
        LineArtThicknessFretsGroup.preferredSize.width = 81; 
        LineArtThicknessFretsGroup.preferredSize.height = 25; 
        LineArtThicknessFretsGroup.orientation = "row"; 
        LineArtThicknessFretsGroup.alignChildren = ["left","center"]; 
        LineArtThicknessFretsGroup.spacing = 0; 
        LineArtThicknessFretsGroup.margins = 0; 

    var LineArtThicknessFrets = LineArtThicknessFretsGroup.add("statictext", undefined, undefined, {name: "LineArtThicknessFrets"}); 
        LineArtThicknessFrets.text = "Frets:"; 
        LineArtThicknessFrets.preferredSize.width = 35; 
        LineArtThicknessFrets.preferredSize.height = 17; 
        LineArtThicknessFrets.alignment = ["left","center"]; 

    var LineArtThicknessFretsInput = LineArtThicknessFretsGroup.add('edittext {properties: {name: "LineArtThicknessFretsInput"}}'); 
        LineArtThicknessFretsInput.helpTip = "The thickness of the line art that represents the frets"; 
        LineArtThicknessFretsInput.text = prefs.fretThickness; 
        LineArtThicknessFretsInput.preferredSize.width = 42; 
        LineArtThicknessFretsInput.preferredSize.height = 23; 
        LineArtThicknessFretsInput.alignment = ["left","center"]; 
var lastLineArtThicknessFretsInput = LineArtThicknessFretsInput.text;

            LineArtThicknessFretsInput.onChange = function() 
            {
                LineArtThicknessFretsInput.text = evalInput(LineArtThicknessFretsInput.text, lastLineArtThicknessFretsInput, true);
                lastLineArtThicknessFretsInput = LineArtThicknessFretsInput.text;
                prefs.fretThickness = LineArtThicknessFretsInput.text;
            } 

    // LINE ART THICKNESS NUT GROUP
    // ========================
    var LineArtThicknessNutGroup = LineArtThicknessPanel.add("group", undefined, {name: "LineArtThicknessNutGroup"}); 
        LineArtThicknessNutGroup.preferredSize.width = 73; 
        LineArtThicknessNutGroup.preferredSize.height = 25; 
        LineArtThicknessNutGroup.orientation = "row"; 
        LineArtThicknessNutGroup.alignChildren = ["right","center"]; 
        LineArtThicknessNutGroup.spacing = 0; 
        LineArtThicknessNutGroup.margins = 0; 

    var LineArtThicknessNut = LineArtThicknessNutGroup.add("statictext", undefined, undefined, {name: "LineArtThicknessNut"}); 
        LineArtThicknessNut.text = "Nut:"; 
        LineArtThicknessNut.preferredSize.width = 27; 
        LineArtThicknessNut.preferredSize.height = 17; 
        LineArtThicknessNut.alignment = ["right","center"]; 

    var LineArtThicknessNutInput = LineArtThicknessNutGroup.add('edittext {properties: {name: "LineArtThicknessNutInput"}}'); 
        LineArtThicknessNutInput.helpTip = "The thickness of the line art that represents the nut"; 
        LineArtThicknessNutInput.text = prefs.nutThickness; 
        LineArtThicknessNutInput.preferredSize.width = 42; 
        LineArtThicknessNutInput.preferredSize.height = 23; 
        LineArtThicknessNutInput.alignment = ["right","center"];
var lastLineArtThicknessNutInput = LineArtThicknessNutInput.text;

            LineArtThicknessNutInput.onChange = function() 
            {
                LineArtThicknessNutInput.text = evalInput(LineArtThicknessNutInput.text, lastLineArtThicknessNutInput, true);
                lastLineArtThicknessNutInput = LineArtThicknessNutInput.text;
                prefs.nutThickness = LineArtThicknessNutInput.text;
            } 

    // LINE ART THICKNESS GROUP
    // =====================
    var ResetLineArtBtn = LineArtThicknessGroup.add("button", undefined, undefined, {name: "ResetLineArtBtn"}); 
        ResetLineArtBtn.helpTip = "Will reset all the chord line art  values"; 
        ResetLineArtBtn.text = "Reset Line Art"; 
        ResetLineArtBtn.preferredSize.width = 109; 
        ResetLineArtBtn.preferredSize.height = 24;

        ResetLineArtBtn.onClick = function(){alert("OK");} 

        MainWindow.layout.layout();
        
        // determine the size of MainWindow based on ShowMoreCheckBox.value
        MainWindow.size = ShowMoreCheckBox.value ? {width: 480, height: 490} : {width: 480, height: 278};

    return MainWindow;
}



// Helper functions
//=================

/**
* Evaluate a string value as INT or FLOAT. Returns the evaluated value or the default value passed as argument if the evaluation fails
* @param _arg         {* String} Argument to evaluate
* @param _default     {* String} The default value to return if the evaluation fail
* @param _override    {* Boolean} if can override _default and sent AUTO instead
* @param _isInt       {* Boolean} if the value to evaluate is integer
*/
function evalInput(_arg, _default, _override, _isInt)
{
    if (_override == undefined) _override = false;
    if (_isInt == undefined) _isInt = false;

    var value = parseFloat(_arg.replace(",", "."));

    if (isNaN(value))
    {
        if(_override && _arg == AUTO) return AUTO;
        else return _default;
    }
    else if (_isInt) return String(Math.round(value));
            else return String(value);
}
