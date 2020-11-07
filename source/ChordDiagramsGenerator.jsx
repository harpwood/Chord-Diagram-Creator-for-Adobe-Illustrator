#target illustrator
#targetengine 'main'


// Constants
WINDOW_WIDTH                        = 500;
WINDOW_HEIGHT_SMALL                 = 278;
WINDOW_HEIGHT_BIG                   = 490;
VERSION                             = "v0.1.3"
LINK_ICON                           = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%09pHYs%00%00%1EB%00%00%1EB%01K%C3%A3%C3%B9%C2%AD%00%00%00%C2%A5IDAT%18%C2%95u%C2%90Q%0D%021%10D%1F%17%04%C2%9C%C2%84%C2%B6%0A%C2%90%40%1D%20%01%14%10%14%20%01P%40P%00%0E%40%02%0A%C3%9AJ%C3%80%01d%C2%9A%C2%BD%C3%8B%C3%81%1D%C3%B3%C3%93t2%C3%997%C2%BB3%26%C2%94rY%00g%40%C3%AF%0B%C3%985SA%C3%A0%008%05%C2%80%C2%A2%C3%BF%C2%BF%C3%A0%09%C2%88%C3%81%C2%BB%23p%01%C3%9A%1E%C2%9Drq6i%05%3C%C2%82w%C3%91*%C3%9C%C2%85%C2%AF%C3%81%C2%81!%C3%9D%C2%80%C2%A5a%C3%95S%C2%8A%C3%8DO(Z7%C3%A1%C3%BAP%C3%B0%C3%AE%C2%A9%C2%8E%C3%97%C2%A1a%C3%81%C2%BDm%C3%9By%15%C3%BBN%C2%B9%C2%AC%C2%BB%C2%9EF%18in%C3%8E6%C3%A5%C3%92%C3%9A%24MP%C2%85%2F%09%C2%BD%C2%B1%C3%83j%C3%A3z%C3%9C%C3%918%C3%A0%03Z%C3%868t%C2%86%C3%B2I%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
LOCK_ICON                           = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0E%08%06%00%00%00%16%C2%A3%C2%8D%C2%AB%00%00%00%09pHYs%00%00%000%00%00%000%011Y'%C3%BA%00%00%00%C2%9BIDAT(%C2%91%7D%C2%90%C3%AB%0D%C3%820%0C%C2%84%C2%AF%C2%88%C3%9F%C2%A6%23u%C2%842I%C3%95%09%60%03%60%C2%82%C2%8E%00%1B%C3%90%11%60%12%C3%90-Pt%C3%88%C2%91%2C%2B%C3%8AIV%C2%AC%C3%8B%17%3F%02%C2%89dOr!%C2%B9%C2%A5%C2%B8%C3%80%C2%B5%C3%B7%C3%B3%04%60%040%03x%C2%B97%C3%88'%093%C2%9BKE%C2%BD%3E%23I%1E%C3%89%C2%8F%C3%9C%5D%C2%B8Z3%C3%A8%5E%C2%9F%C3%81%C2%A6%3A%C2%92O%C2%9F%C2%A7%C2%A5U%C3%A0%C2%96%C2%80%C2%87%C2%9Fc4s%C3%AB%C2%AB%C2%99%1D%15%C3%8A%5B%C3%A0%3B%C3%A4%C3%BF%25%C2%8Ar%C3%AB%2F%00U%13t%C2%8F%60%C3%B9%C3%B0X%C2%A5%C2%BAX%06%C2%A5C%0D%C2%ACm%5D%C2%95*j%C2%A6%C2%A9I%01%C2%B7%1F3%C3%AFG%02T%05%C3%AC%26%00%00%00%00IEND%C2%AEB%60%C2%82"; 
ERROR_MSG                           = "Some went wrong: "; 
ERROR_TITLE                         = "Oops!!!";
AUTO                                = "auto";
PREFS_FILE                          = Folder.userData + "/ChordDiagramsPrefs.json";
PREFS_VERSION                       = "version";
CHORD_NAME_LOCK                     = "ChordNameLock";
NUMBER_OF_STRINGS_SELECTION         = "numberOfStringsSelection";
NUMBER_OF_FRETS_SELECTION           = "numberOfFretsSelection";
DRAW_BARRE                          = "drawBarre";
FINGERS_USED_LOCK                   = "fingersUsedLock";
FRET_POSITION_LOCK                  = "fretPositionsLock";
IS_NUMBER_OF_STRINGS_AND_FRETS_LOCK = "isNumberOfStringsAndFretsLock";
SHOW_MORE                           = "showMore";
X                                   = "x";
Y                                   = "y";
POSITIONING_LOCK                    = "positioningLock";
CAN_REPOSITION_X                    = "canRepositionX";
CAN_REPOSITION_Y                    = "canRepositionY";
REPOSITIONING_LOCK                  = "repositioningLock";
WIDTH                               = "width";
HEIGHT                              = "height";
DIAGRAM_SIZE_LOCK                   = "diagramSizeLock";
RE_POS_SPACING                      = "rePosSpacing";
IS_LINK_HEIGHT_TO_FRETS             = "isLinkHeightToFrets";
IS_LINK_WIDTH_TO_HEIGHT             = "isLinkWidthToHeight";
STRING_THICKNESS                    = "stringThickness";
FRET_THICKNESS                      = "fretThickness";
IS_LINK_THICKNESS                   = "isLinkThickness";
NUT_THICKNESS                       = "nutThickness";
LINE_ART_THICKNESS_LOCK             = "lineArtThicknessLock";


init();

function loadPreferences()
{
    prefs = {};     // object that handles prefs data (save/load)
    var prefsFile = File(PREFS_FILE); 

    if (!prefsFile.exists)  
    {
        // if prefs file does not exist apply default prefs and save it
        setDefaultAt(PrefID.version);
        setDefaultAt(PrefID.chordNameLock);
        setDefaultAt(PrefID.numberOfStringsSelection);
        setDefaultAt(PrefID.numberOfFretsSelection);
        setDefaultAt(PrefID.drawBarre);
        setDefaultAt(PrefID.fingersUsedLock); 
        setDefaultAt(PrefID.fretPositionsLock);
        setDefaultAt(PrefID.isNumberOfStringsAndFretsLock);
        setDefaultAt(PrefID.showMore);
        setDefaultAt(PrefID.x);
        setDefaultAt(PrefID.y);
        setDefaultAt(PrefID.positioningLock);
        setDefaultAt(PrefID.canRepositionX);
        setDefaultAt(PrefID.canRepositionY);
        setDefaultAt(PrefID.rePosSpacing); 
        setDefaultAt(PrefID.repositioningLock);
        setDefaultAt(PrefID.width);
        setDefaultAt(PrefID.isLinkWidthToHeight);
        setDefaultAt(PrefID.height);
        setDefaultAt(PrefID.isLinkHeightToFrets);
        setDefaultAt(PrefID.diagramSizeLock);
        setDefaultAt(PrefID.stringThickness);
        setDefaultAt(PrefID.isLinkThickness);
        setDefaultAt(PrefID.fretThickness);
        setDefaultAt(PrefID.nutThickness);   
        setDefaultAt(PrefID.lineArtThicknessLock);   
    }
    else
    {
        // if prefs file exist load the prefs data and parse them
        try
        {
            prefsFile.open("r");
            var data = prefsFile.read();
            prefsFile.close();
        } 
        catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}

        try
        {var data = JSON.parse(data);} 
        catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
        
        checkData = []; for(var j = 0; j < 19; j++) {checkData.push(false);}
        PrefID = {
            version : 0,
            chordNameLock : 1,
            numberOfStringsSelection : 2,
            numberOfFretsSelection : 3,
            drawBarre : 4,
            fingersUsedLock : 5, 
            fretPositionsLock : 6,
            isNumberOfStringsAndFretsLock : 7,
            showMore : 8,
            x : 9,
            y : 10,
            positioningLock : 11,
            canRepositionX : 12,
            canRepositionY : 13,
            rePosSpacing : 14, 
            repositioningLock : 15,
            width : 16,
            isLinkWidthToHeight: 17,
            height : 18,
            isLinkHeightToFrets : 19,
            diagramSizeLock : 20,
            stringThickness : 21,
            isLinkThickness : 22,
            fretThickness : 23,
            nutThickness : 24,
            lineArtThicknessLock : 25
        }

        
        for (var i in data)
        {
            switch (i)  // evaluate loaded data and apply them to prefs obj, if evaluation fails apply default value
            {
                case PREFS_VERSION:
                    prefs.version = (data[i] == undefined) ? setDefaultAt(PrefID.version) : data[i];
                    checkData[PrefID.version] = true;
                    break;  
                case CHORD_NAME_LOCK:
                    prefs.chordNameLock = (data[i] == undefined) ? setDefaultAt(PrefID.chordNameLock) : data[i];
                    checkData[PrefID.chordNameLock] = true;
                    break;  
                case NUMBER_OF_STRINGS_SELECTION:
                    prefs.numberOfStringsSelection = (data[i] == undefined) ? setDefaultAt(PrefID.numberOfStringsSelection) : data[i];
                    checkData[PrefID.numberOfStringsSelection] = true;
                    break;  
                case NUMBER_OF_FRETS_SELECTION:
                    prefs.numberOfFretsSelection = (data[i] == undefined) ? setDefaultAt(PrefID.numberOfFretsSelection) : data[i];
                    checkData[PrefID.numberOfFretsSelection] = true;
                    break;    
                case DRAW_BARRE:
                    prefs.drawBarre = (data[i] == undefined) ? setDefaultAt(PrefID.drawBarre) : data[i];
                    checkData[PrefID.drawBarre] = true;
                    break;              
                case FINGERS_USED_LOCK:
                    prefs.fingersUsedLock = (data[i] == undefined) ? setDefaultAt(PrefID.fingersUsedLock) : data[i];
                    checkData[PrefID.fingersUsedLock] = true;
                    break;              
                case FRET_POSITION_LOCK: 
                    prefs.fretPositionsLock = (data[i] == undefined) ? setDefaultAt(PrefID.fretPositionsLock) : data[i];
                    checkData[PrefID.fretPositionsLock] = true;
                    break;              
                case IS_NUMBER_OF_STRINGS_AND_FRETS_LOCK:
                    prefs.isNumberOfStringsAndFretsLock = (data[i] == undefined) ? setDefaultAt(PrefID.isNumberOfStringsAndFretsLock) : data[i];
                    checkData[PrefID.isNumberOfStringsAndFretsLock] = true;
                    break;              
                case SHOW_MORE: 
                    prefs.showMore = (data[i] == undefined) ? setDefaultAt(PrefID.showMore) : data[i];
                    checkData[PrefID.showMore] = true;
                    break;              
                case X:
                    prefs.x = (data[i] == undefined) ? setDefaultAt(PrefID.x) : data[i];
                    checkData[PrefID.showMore] = true;
                    break;                   
                case Y:
                    prefs.y = (data[i] == undefined) ? setDefaultAt(PrefID.y) : data[i];
                    checkData[PrefID.showMore] = true; 
                    break;                
                case POSITIONING_LOCK:
                    prefs.positioningLock = (data[i] == undefined) ? setDefaultAt(PrefID.positioningLock) : data[i];
                    checkData[PrefID.positioningLock] = true; 
                    break;                
                case CAN_REPOSITION_X:
                    prefs.canRepositionX = (data[i] == undefined) ? setDefaultAt(PrefID.canRepositionX) : data[i];
                    checkData[PrefID.canRepositionX] = true;
                    break;        
                case CAN_REPOSITION_Y:
                    prefs.canRepositionY = (data[i] == undefined) ? setDefaultAt(PrefID.canRepositionY) : data[i];
                    checkData[PrefID.canRepositionY] = true;
                    break;
                case RE_POS_SPACING:
                    prefs.rePosSpacing = (data[i] == undefined) ? setDefaultAt(PrefID.rePosSpacing) : data[i];
                    checkData[PrefID.rePosSpacing] = true;
                    break;
                case REPOSITIONING_LOCK:
                    prefs.repositioningLock = (data[i] == undefined) ? setDefaultAt(PrefID.repositioningLock) : data[i];
                    checkData[PrefID.repositioningLock] = true;
                    break;
                case WIDTH:
                    prefs.width = (data[i] == undefined) ? setDefaultAt(PrefID.width) : data[i];
                    checkData[PrefID.width] = true;
                    break;
                case IS_LINK_WIDTH_TO_HEIGHT:
                    prefs.isLinkWidthToHeight = (data[i] == undefined) ? setDefaultAt(PrefID.isLinkWidthToHeight) : data[i];
                    checkData[PrefID.isLinkWidthToHeight] = true;
                    break;          
                case HEIGHT:
                    prefs.height = (data[i] == undefined) ? setDefaultAt(PrefID.height) : data[i];
                    checkData[PrefID.height] = true;
                    break;               
                case DIAGRAM_SIZE_LOCK:
                    prefs.diagramSizeLock = (data[i] == undefined) ? setDefaultAt(PrefID.diagramSizeLock) : data[i];
                    checkData[PrefID.diagramSizeLock] = true;
                    break;               
                case IS_LINK_HEIGHT_TO_FRETS:
                    prefs.isLinkHeightToFrets = (data[i] == undefined) ? setDefaultAt(PrefID.isLinkHeightToFrets) : data[i];
                    checkData[PrefID.isLinkHeightToFrets] = true;
                    break;
                 
                case STRING_THICKNESS:
                    prefs.stringThickness = (data[i] == undefined) ? setDefaultAt(PrefID.stringThickness) : data[i];
                    checkData[PrefID.stringThickness] = true;
                    break;
                case IS_LINK_THICKNESS:
                    prefs.isLinkThickness = (data[i] == undefined) ? setDefaultAt(PrefID.isLinkThickness) : data[i];
                    checkData[PrefID.stringThickness] = true;
                    break;
                case FRET_THICKNESS:
                    prefs.fretThickness = (data[i] == undefined) ? setDefaultAt(PrefID.fretThickness) : data[i];
                    checkData[PrefID.stringThickness] = true;
                    break;   
                case NUT_THICKNESS:
                    prefs.nutThickness = (data[i] == undefined) ? setDefaultAt(PrefID.nutThickness) : data[i];
                    checkData[PrefID.stringThickness] = true;
                    break; 
                case LINE_ART_THICKNESS_LOCK:
                    prefs.lineArtThicknessLock = (data[i] == undefined) ? setDefaultAt(PrefID.lineArtThicknessLock) : data[i];
                    checkData[PrefID.lineArtThicknessLock] = true;
                    break; 
            }
        }

        
        for(var j = 0; j < checkData.length; j++) 
        {
            if (checkData[j] == false)  checkData[j] = setDefaultAt(j); 
            //TODO prompt user to factory reset if data are still not evaluated
        }
    }

    try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
   
    try
    {
        mainWindow = showMainWindow();
        mainWindow.show();
    }
    catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}

}



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
        ChordNamePanel.spacing = 5; 
        ChordNamePanel.margins = [10,10,10,10]; 

    var ChordNameInput = ChordNamePanel.add('edittext {properties: {name: "ChordNameInput"}}');
        ChordNameInput.text = "";
        ChordNameInput.helpTip = "The name of the chord"; 
        ChordNameInput.preferredSize.width = 80; 
        ChordNameInput.preferredSize.height = 23;
var lastChordNameInput = ChordNameInput.text;

            ChordNameInput.onChange = function () 
            {
                lastChordNameInput = ChordNameInput.text;

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    // ChordNamePanel Lock Group
    // ====================================
    var ChordNameLockGroup = ChordNamePanel.add("group", undefined, {name: "ChordNameLockGroup"}); 
    ChordNameLockGroup.orientation = "row"; 
    ChordNameLockGroup.alignChildren = ["center","center"]; 
    ChordNameLockGroup.spacing = 0; 
    ChordNameLockGroup.margins = 0; 

    var ChordNameLockGroupLockCheckBox = ChordNameLockGroup.add("checkbox", undefined, undefined, {name: "ChordNameLockGroupLockCheckBox"}); 
    ChordNameLockGroupLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [New Chord] button is pressed."
    ChordNameLockGroupLockCheckBox.value = prefs.chordNameLock; 
    ChordNameLockGroupLockCheckBox.preferredSize.width = 18; 
    ChordNameLockGroupLockCheckBox.preferredSize.height = 15; 
    ChordNameLockGroupLockCheckBox.alignment = ["center","center"];

    ChordNameLockGroupLockCheckBox.onClick = function()
        {
            prefs.chordNameLock = ChordNameLockGroupLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var ChordNameLockGroupLockImage = ChordNameLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "ChordNameLockGroupLockImage"}); 
    ChordNameLockGroupLockImage.alignment = ["center","center"]; 

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
        NumberOfStringsAndFretsPanel.spacing = 10; 
        NumberOfStringsAndFretsPanel.margins = 10; 

    var NumberOfStringsDropDown_array = ["4 Strings","5 Strings","6 Strings","7 Strings","8 Strings","9 Strings"]; 
    var NumberOfStringsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfStringsDropDown", items: NumberOfStringsDropDown_array}); 
        NumberOfStringsDropDown.helpTip = "The number of strings"; 
        NumberOfStringsDropDown.selection = prefs.numberOfStringsSelection; 
        NumberOfStringsDropDown.preferredSize.width = 80; 
        NumberOfStringsDropDown.preferredSize.height = 23; 

            NumberOfStringsDropDown.onChange = function () 
            {
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var NumberOfFretsDropDown_array = ["4 Frets","5 Frets","6 Frets","7 Frets","8 Frets","9 Frets"]; 
    var NumberOfFretsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfFretsDropDown", items: NumberOfFretsDropDown_array}); 
        NumberOfFretsDropDown.helpTip = "The number of frets to drawn on chord diagram"; 
        NumberOfFretsDropDown.selection = NumberOfFretsDropDown.items[prefs.numberOfFretsSelection] //prefs.numberOfFretsSelection; 
        NumberOfFretsDropDown.preferredSize.width = 72; 
        NumberOfFretsDropDown.preferredSize.height = 23;

            NumberOfFretsDropDown.onChange = function () 
            {
                for (i = 5; i < 11; i++)
                {
                    if (numberOfFretsDropDown.selection == numberOfFretsDropDown.items[i-5]) 
                    {
                        prefs.numberOfFretsSelection = i - 5;
                    }
                }
                //savePrefs();
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    var DrawBarreCheckBox = NumberOfStringsAndFretsPanel.add("checkbox", undefined, undefined, {name: "DrawBarreCheckBox"}); 
        DrawBarreCheckBox.helpTip = "If enabled will be drawn barre, if the same finger is on more than one string "; 
        DrawBarreCheckBox.text = "Draw Barre"; 
        DrawBarreCheckBox.alignment = ["left","center"]; 
        DrawBarreCheckBox.value = prefs.drawBarre;

            DrawBarreCheckBox.onClick = function () 
            {
                prefs.drawBarre = DrawBarreCheckBox.value;

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }
    
    // NumberOf Strings And Frets Lock Group
    // ====================================
    var NumberOfStringsAndFretsLockGroup = NumberOfStringsAndFretsPanel.add("group", undefined, {name: "NumberOfStringsAndFretsLockGroup"}); 
    NumberOfStringsAndFretsLockGroup.orientation = "row"; 
    NumberOfStringsAndFretsLockGroup.alignChildren = ["center","center"]; 
    NumberOfStringsAndFretsLockGroup.spacing = 0; 
    NumberOfStringsAndFretsLockGroup.margins = 0; 

    var NumberOfStringsAndFretsPanelLockCheckBox = NumberOfStringsAndFretsLockGroup.add("checkbox", undefined, undefined, {name: "NumberOfStringsAndFretsPanelLockCheckBox"}); 
    NumberOfStringsAndFretsPanelLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [New Chord] button is pressed."
    NumberOfStringsAndFretsPanelLockCheckBox.value = prefs.isNumberOfStringsAndFretsLock; 
    NumberOfStringsAndFretsPanelLockCheckBox.preferredSize.width = 18; 
    NumberOfStringsAndFretsPanelLockCheckBox.preferredSize.height = 15; 
    NumberOfStringsAndFretsPanelLockCheckBox.alignment = ["center","center"];

        NumberOfStringsAndFretsPanelLockCheckBox.onClick = function()
        {
            prefs.isNumberOfStringsAndFretsLock = NumberOfStringsAndFretsPanelLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var NumberOfStringsAndFretsLockImage = NumberOfStringsAndFretsLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "NumberOfStringsAndFretsLockImage"}); 
    NumberOfStringsAndFretsLockImage.alignment = ["center","center"]; 

    // FINGERS USED PANEL
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

        // FingersUsedPanel Lock Group
        // ====================================
        var FingersUsedLockGroup = FingersUsedPanel.add("group", undefined, {name: "FingersUsedLockGroup"}); 
            FingersUsedLockGroup.orientation = "row"; 
            FingersUsedLockGroup.alignChildren = ["center","center"]; 
            FingersUsedLockGroup.spacing = 0; 
            FingersUsedLockGroup.margins = 0; 

        var FingersUsedLockCheckBox = FingersUsedLockGroup.add("checkbox", undefined, undefined, {name: "FingersUsedLockCheckBox"}); 
            FingersUsedLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [New Chord] button is pressed."
            FingersUsedLockCheckBox.value = prefs.fingersUsedLock; 
            FingersUsedLockCheckBox.preferredSize.width = 18; 
            FingersUsedLockCheckBox.preferredSize.height = 15; 
            FingersUsedLockCheckBox.alignment = ["center","center"];

        FingersUsedLockCheckBox.onClick = function()
        {
            prefs.fingersUsedLock = FingersUsedLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var FingersUsedLockImage = FingersUsedLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "FingersUsedLockImage"}); 
    FingersUsedLockImage.alignment = ["center","center"]; 

    // FRET POSITIONS 
    // =============
    var FretPositionsPanel = MainChordGroup.add("panel", undefined, undefined, {name: "FretPositionsPanel"}); 
        FretPositionsPanel.text = "Fret Positions"; 
        FretPositionsPanel.preferredSize.width = 313; 
        FretPositionsPanel.preferredSize.height = 53; 
        FretPositionsPanel.orientation = "row"; 
        FretPositionsPanel.alignChildren = ["left","center"]; 
        FretPositionsPanel.spacing = 6; 
        FretPositionsPanel.margins = 10; 
        
        var FretPositionsInput = [];

        for (var i = 0; i < 9; i++)
        {
            var FretPositionsInputItem = FretPositionsPanel.add('edittext {properties: {name: "FretPositionsInput"}}'); 
                FretPositionsInputItem.helpTip = "Write here the fret number that the finger is pressing on the  Xth string. \n 0 - Open string, o - Open string, x or emty - not used string "; 
                FretPositionsInputItem.preferredSize.width = 27; 
                FretPositionsInputItem.preferredSize.height = 23; 
            
            if (i > prefs.numberOfStringsSelection + 3) FretPositionsInputItem.enabled = false;
            
            FretPositionsInput.push(FretPositionsInputItem);
        }

    // FretPositions Lock Group
    // ====================================
    var FretPositionsLockGroup = FretPositionsPanel.add("group", undefined, {name: "FretPositionsLockGroup"}); 
        FretPositionsLockGroup.orientation = "row"; 
        FretPositionsLockGroup.alignChildren = ["center","center"]; 
        FretPositionsLockGroup.spacing = 0; 
        FretPositionsLockGroup.margins = 0; 

    var FretPositionsLockCheckBox = FretPositionsLockGroup.add("checkbox", undefined, undefined, {name: "FretPositionsLockCheckBox"}); 
        FretPositionsLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [New Chord] button is pressed."
        FretPositionsLockCheckBox.value = prefs.fretPositionsLock; 
        FretPositionsLockCheckBox.preferredSize.width = 18; 
        FretPositionsLockCheckBox.preferredSize.height = 15; 
        FretPositionsLockCheckBox.alignment = ["center","center"];

        FretPositionsLockCheckBox.onClick = function()
            {
                prefs.fretPositionsLock = FretPositionsLockCheckBox.value;
                
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }
    
    var FretPositionsLockImage = FretPositionsLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "FretPositionsLockImage"}); 
        FretPositionsLockImage.alignment = ["center","center"]; 

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

            DrawChordBtn.onClick = function () 
            {
                alert("OK");

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }
            

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

            NewChordBtn.onClick = function () 
            {
                alert("OK");
            
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    var SaveChordBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "SaveChordBtn"}); 
        SaveChordBtn.enabled = false; 
        SaveChordBtn.helpTip = "The ability to save chords will be added in future update"; 
        SaveChordBtn.text = "Save Chord"; 
        SaveChordBtn.preferredSize.width = 97; 
        SaveChordBtn.preferredSize.height = 24;

            SaveChordBtn.onClick = function () 
            {
                alert("OK");
                
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var OptionsBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "OptionsBtn"}); 
        OptionsBtn.helpTip = "Will open an options dialog "; 
        OptionsBtn.text = "Options"; 
        OptionsBtn.preferredSize.width = 98; 
        OptionsBtn.preferredSize.height = 24;

            OptionsBtn.onClick = function () 
            {
                alert("OK");

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var AboutBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "AboutBtn"}); 
        AboutBtn.helpTip = "Will open a dialog with information about the Chord Diagram Generator script"; 
        AboutBtn.text = "About"; 
        AboutBtn.preferredSize.width = 98; 
        AboutBtn.preferredSize.height = 24;

            AboutBtn.onClick = function () 
            {
                alert("OK");
            
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    var CloseBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "CloseBtn"}); 
        CloseBtn.helpTip = "Will close this window and end the Chord Diagram Generator"; 
        CloseBtn.text = "Close"; 
        CloseBtn.preferredSize.width = 98; 
        CloseBtn.preferredSize.height = 23;

            CloseBtn.onClick = function () 
            {
                MainWindow.close();
            
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } //TODO Confirm exit

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
                prefs.showMore = ShowMoreCheckBox.value;
                
                MainWindow.size = ShowMoreCheckBox.value ? {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_BIG} : {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_SMALL};

                MainBottomGroup.visible = ShowMoreCheckBox.value;
                MainBottomGroup.enabled = ShowMoreCheckBox.value;

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs

                MainWindow.update();
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
        PositioningPanel.spacing = 6; 
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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
        PositioningYGroup.alignment = ["left","bottom"]; 

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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    // PositioningPanel Lock Group
    // ====================================
    var PositioningLockGroup = PositioningPanel.add("group", undefined, {name: "PositioningLockGroup"}); 
        PositioningLockGroup.orientation = "row"; 
        PositioningLockGroup.alignChildren = ["center","bottom"]; 
        PositioningLockGroup.preferredSize.height = 20;
        PositioningLockGroup.spacing = 0; 
        PositioningLockGroup.margins = 0; 

    var PositioningLockCheckBox = PositioningLockGroup.add("checkbox", undefined, undefined, {name: "PositioningLockCheckBox"}); 
        PositioningLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [Reset Line Art] button is pressed."
        PositioningLockCheckBox.value = prefs.positioningLock; 
        PositioningLockCheckBox.preferredSize.width = 18; 
        PositioningLockCheckBox.preferredSize.height = 15; 
        PositioningLockCheckBox.alignment = ["center","bottom"];

            PositioningLockCheckBox.onClick = function()
                {
                    prefs.positioningLock = PositioningLockCheckBox.value;
                    
                    try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
                }
    
    var PositioningLockImage = PositioningLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "PositioningLockImage"}); 
        PositioningLockImage.alignment = ["center","bottom"];

    // REPOSITIONING PANEL
    // ==================
    var RepositioningPanel = PosAndReposGroup.add("panel", undefined, undefined, {name: "RepositioningPanel"}); 
        RepositioningPanel.text = "Repositioning"; 
        RepositioningPanel.preferredSize.width = 260; 
        RepositioningPanel.preferredSize.height = 53; 
        RepositioningPanel.orientation = "row"; 
        RepositioningPanel.alignChildren = ["left","center"]; 
        RepositioningPanel.spacing = 4; 
        RepositioningPanel.margins = 10; 

    // REPOSITIONING GROUP
    // ==================
    var RepositioningGroup = RepositioningPanel.add("group", undefined, {name: "RepositioningGroup"}); 
        RepositioningGroup.preferredSize.width = 200; 
        RepositioningGroup.preferredSize.height = 25; 
        RepositioningGroup.orientation = "row"; 
        RepositioningGroup.alignChildren = ["center","center"]; 
        RepositioningGroup.spacing = 6; 
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    // REPOS SPACING GROUP
    // =================
    var ReposSpacingGroup = RepositioningGroup.add("group", undefined, {name: "ReposSpacingGroup"}); 
        ReposSpacingGroup.preferredSize.width = 122; 
        ReposSpacingGroup.preferredSize.height = 25; 
        ReposSpacingGroup.orientation = "row"; 
        ReposSpacingGroup.alignChildren = ["center","center"]; 
        ReposSpacingGroup.spacing = 0; 
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    // RepositioningPanel Lock Group
    // ====================================
    var RepositioningLockGroup = RepositioningPanel.add("group", undefined, {name: "RepositioningLockGroup"}); 
    RepositioningLockGroup.orientation = "row"; 
    RepositioningLockGroup.alignChildren = ["center","center"]; 
    RepositioningLockGroup.spacing = 0; 
    RepositioningLockGroup.margins = 0; 

    var RepositioningLockCheckBox = RepositioningLockGroup.add("checkbox", undefined, undefined, {name: "RepositioningLockCheckBox"}); 
    RepositioningLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [Reset Line Art] button is pressed."
    RepositioningLockCheckBox.value = prefs.repositioningLock; 
    RepositioningLockCheckBox.preferredSize.width = 18; 
    RepositioningLockCheckBox.preferredSize.height = 15; 
    RepositioningLockCheckBox.alignment = ["center","center"];

    RepositioningLockCheckBox.onClick = function()
        {
            prefs.repositioningLock = RepositioningLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var RepositioningLockImage = RepositioningLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "RepositioningLockImage"}); 
    RepositioningLockImage.alignment = ["center","center"];

    // DIAGRAM SIZE GROUP
    // ================
    var DiagramSizeGroup = MainBottomGroup.add("group", undefined, {name: "DiagramSizeGroup"}); 
        DiagramSizeGroup.preferredSize.width = 470; 
        DiagramSizeGroup.preferredSize.height = 55; 
        DiagramSizeGroup.orientation = "column"; 
        DiagramSizeGroup.alignChildren = ["center","center"]; 
        DiagramSizeGroup.spacing = 0; 
        DiagramSizeGroup.margins = 0; 

    // DIAGRAM SIZE PANEL
    // ================
    var DiagramSizePanel = DiagramSizeGroup.add("panel", undefined, undefined, {name: "DiagramSizePanel"}); 
        DiagramSizePanel.text = "Diagram Size"; 
        DiagramSizePanel.preferredSize.width = 470; 
        DiagramSizePanel.preferredSize.height = 53; 
        DiagramSizePanel.orientation = "row"; 
        DiagramSizePanel.alignChildren = ["center","top"]; 
        DiagramSizePanel.spacing = 10; 
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            } 

    var LinkHeightToFretsImage = LinkHeightToFretsGroup.add("image", undefined, File.decode(LINK_ICON), {name: "LinkHeightToFretsImage"}); 
        LinkHeightToFretsImage.alignment = ["center","center"]; 

    var LinkHeightToFrets = LinkHeightToFretsGroup.add("statictext", undefined, undefined, {name: "LinkHeightToFrets"}); 
        LinkHeightToFrets.text = "Height to Frets"; 
        LinkHeightToFrets.preferredSize.width = 87; 
        LinkHeightToFrets.preferredSize.height = 17; 
        LinkHeightToFrets.justify = "right";
        
    // DiagramSizePanel Lock Group
    // ====================================
    var DiagramSizeLockGroup = DiagramSizePanel.add("group", undefined, {name: "DiagramSizeLockGroup"}); 
        DiagramSizeLockGroup.orientation = "row"; 
        DiagramSizeLockGroup.alignChildren = ["center","center"]; 
        DiagramSizeLockGroup.spacing = 0; 
        DiagramSizeLockGroup.margins = 0; 

    var DiagramSizeLockCheckBox = DiagramSizeLockGroup.add("checkbox", undefined, undefined, {name: "RepositioningLockCheckBox"}); 
        DiagramSizeLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [Reset Line Art] button is pressed."
        DiagramSizeLockCheckBox.value = prefs.diagramSizeLock; 
        DiagramSizeLockCheckBox.preferredSize.width = 18; 
        DiagramSizeLockCheckBox.preferredSize.height = 15; 
        DiagramSizeLockCheckBox.alignment = ["center","center"];

    DiagramSizeLockCheckBox.onClick = function()
        {
            prefs.diagramSizeLock = DiagramSizeLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var DiagramSizeLockImage = DiagramSizeLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "RepositioningLockImage"}); 
        DiagramSizeLockImage.alignment = ["center","center"];

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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
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

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }
    
    // LineArtThicknessPanel Lock Group
    // ====================================
    var LineArtThicknessLockGroup = LineArtThicknessPanel.add("group", undefined, {name: "LineArtThicknessLockGroup"}); 
        LineArtThicknessLockGroup.orientation = "row"; 
        LineArtThicknessLockGroup.alignChildren = ["center","bottom"];
        LineArtThicknessLockGroup.preferredSize.height = 20; 
        LineArtThicknessLockGroup.spacing = 0; 
        LineArtThicknessLockGroup.margins = 0; 

    var LineArtThicknessLockCheckBox = LineArtThicknessLockGroup.add("checkbox", undefined, undefined, {name: "RepositioningLockCheckBox"}); 
        LineArtThicknessLockCheckBox.helpTip = "If locked, the values in this panel will not reset\nwhen the [Reset Line Art] button is pressed."
        LineArtThicknessLockCheckBox.value = prefs.lineArtThicknessLock; 
        LineArtThicknessLockCheckBox.preferredSize.width = 18; 
        LineArtThicknessLockCheckBox.preferredSize.height = 15; 
        LineArtThicknessLockCheckBox.alignment = ["center","bottom"];

        LineArtThicknessLockCheckBox.onClick = function()
        {
            prefs.lineArtThicknessLock = LineArtThicknessLockCheckBox.value;
            
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        }
    
    var LineArtThicknessLockImage = LineArtThicknessLockGroup.add("image", undefined, File.decode(LOCK_ICON), {name: "LineArtThicknessLockImage"}); 
        LineArtThicknessLockImage.alignment = ["center","bottom"];

    // LINE ART THICKNESS GROUP
    // =====================
    var ResetLineArtBtn = LineArtThicknessGroup.add("button", undefined, undefined, {name: "ResetLineArtBtn"}); 
        ResetLineArtBtn.helpTip = "Will reset all the not locked, chord line art values"; 
        ResetLineArtBtn.text = "Reset Line Art"; 
        ResetLineArtBtn.preferredSize.width = 109; 
        ResetLineArtBtn.preferredSize.height = 24;

        ResetLineArtBtn.onClick = function()
        {
            alert("OK");
        
            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        } 

               
        // determine the size of MainWindow  and visibility of the MainBottomGroup, based on ShowMoreCheckBox.value
        MainBottomGroup.visible = ShowMoreCheckBox.value ? true : false;
        MainBottomGroup.enabled = ShowMoreCheckBox.value ? true : false;
        MainWindow.size = ShowMoreCheckBox.value ? {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_BIG} : {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_SMALL};

        MainWindow.layout.layout();

    return MainWindow;
}



// Helper functions
//=================

/** Sends a function with its arguments to be executed on Illustrator via BridgeTalk
 * 
 * @param {*String} func The name of the function to sent as String
 * @param {*Array} args The arguments of the function to sent as Array of Strings. Single arguments can be sent without being inside an Array
 */
function btExecute(func, args) 
{
    var bridgeTalk = new BridgeTalk();
   
    //bake the arguments
    if (args != undefined) 
    {
        if ((typeof args == 'string') || (args instanceof String)) 
            stringArgs = ((args != undefined) ? ('"' + args + '"') : '');
		 else stringArgs = args;
	} 
    else stringArgs = '';
    
    //prepare the message
    var msg = (eval(func) + '\r ' + func + '(' + stringArgs + ');');
	bridgeTalk.target = "Illustrator";
    bridgeTalk.body = msg;
    
	return bridgeTalk.send();
}

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

/**
* Saves the prefs obj into a predefined path and file
*/
function savePrefs()
{
    var prefsFile = File(PREFS_FILE);

    prefsFile.open("w");
    prefsFile.write(JSON.stringify(prefs));
    prefsFile.close();
}

function makeColor(c, m, y, k) 
{
    var col = new CMYKColor();
    
    col.cyan = c;
    col.magenta = m;
    col.yellow = y;
    col.black = k;

    return col;
}

function getIndexOf(arr, value)
{
    var index = -1;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == value)
        {
            index = i;
            break;

        }
    }

    return index;
}

function getLastIndexOf(arr, value)
{
    var index = -1;
    for (var i = arr.length - 1; i > -1; i--)
    {
        if (arr[i] == value)
        {
            index = i;
            break;

        }
    }

    return index;
}

/**
 * Assings default value in prefs obj based on a predefined index
 * @param {* Int} index 
 */
function setDefaultAt(index)
{
    switch (index)  // evaluate loaded data and apply them to prefs obj, if evaluation fails apply default value
    {
        case PrefID.version: 
            prefs.version = VERSION;
            return true;
            break;  
        case PrefID.chordNameLock: 
            prefs.chordNameLock = false;
            return true;
            break;  
        case PrefID.numberOfStringsSelection: 
            prefs.numberOfStringsSelection = 2;
            return true;
            break;  
        case PrefID.numberOfFretsSelection:
            prefs.numberOfFretsSelection = 1;
            return true;
            break;    
        case PrefID.drawBarre: 
            prefs.drawBarre = false;
            return true;
            break;              
        case PrefID.fingersUsedLock: 
            prefs.fingersUsedLock = false;
            return true;
            break;              
        case PrefID.fretPositionsLock: 
            prefs.fretPositionsLock = false;
            return true;
            break;              
        case PrefID.isNumberOfStringsAndFretsLock: 
            prefs.isNumberOfStringsAndFretsLock = true;
            return true;
            break;              
        case PrefID.showMore: 
            prefs.showMore = false;
            return true;
            break;              
        case PrefID.x: 
            prefs.x = "0";
            return true;
            break;                   
        case PrefID.y: 
            prefs.y = "0";
            return true;
            break;                
        case PrefID.positioningLock: 
            prefs.positioningLock = false;
            return true;
            break;                
        case PrefID.canRepositionX: 
            prefs.canRepositionX = false;
            return true;
            break;        
        case PrefID.canRepositionY:  
            prefs.canRepositionY = false;
            return true;
            break;
        case PrefID.rePosSpacing:
            prefs.rePosSpacing = AUTO;
            return true;
            break;
        case PrefID.repositioningLock:
            prefs.repositioningLock = false;
            return true;
            break;
        case PrefID.width:
            prefs.width = "100";
            return true;
            break;             
        case PrefID.height:
            prefs.height = "100";
            return true;
            break;               
        case PrefID.isLinkHeightToFrets: 
            prefs.isLinkHeightToFrets = true;
            return true;
            break;
        case PrefID.diagramSizeLock: 
            prefs.diagramSizeLock = true;
            return true;
            break;
        case PrefID.isLinkWidthToHeight:  
            prefs.isLinkWidthToHeight = true;
            return true;
            break; 
        case PrefID.diagramSizeLock:  
            prefs.diagramSizeLock = false;
            return true;
            break; 
        case PrefID.stringThickness:  
            prefs.stringThickness = AUTO;
            return true;
            break;
        case PrefID.fretThickness:
            prefs.fretThickness = AUTO;
            return true;
            break;          
        case PrefID.isLinkThickness:
            prefs.isLinkThickness = true;
            return true;
            break;   
        case PrefID.nutThickness:
            prefs.nutThickness = AUTO;
            return true;
            break;
        case PrefID.lineArtThicknessLock:
            prefs.lineArtThicknessLock = false;
            return true;
            break;
        
        default:
            return false;
            break;
    }
}


function init()
{
    // Creates a new document if none exists
    if ( app.documents.length < 1 ) app.documents.add();
    

    // Inspecting if the active layer of the document is locked
    if (app.activeDocument.activeLayer.locked) 
    {
        alert("The active layer is locked");
        return;     // TODO: unlock layer or create a new layer)
    } 

    //Turn colors black
    app.activeDocument.defaultFillColor = makeColor(0, 0, 0, 100);
    app.activeDocument.defaultStrokeColor = makeColor(0, 0, 0, 100);

    
    ///////////////////////////////////////////////////////////////
    /* minified json2 code * NOT part of the script source code */
    /**/ "object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
    ////////////////////////////////////////////////////////////    

    try{loadPreferences();}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
    
}
