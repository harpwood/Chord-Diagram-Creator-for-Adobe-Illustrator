#target illustrator
#targetengine 'main'


// Constants

PrefID = {
    version:0,
    chordNameLock:1,
    numberOfStringsSelection:2,
    numberOfFretsSelection:3,
    drawBarre:4,
    fingersUsedLock:5,
    fretPositionsLock:6,
    isNumberOfStringsAndFretsLock:7,
    showMore:8,
    x:9,
    y:10,
    positioningLock:11,
    canRepositionX:12,
    canRepositionY:13,
    rePosSpacing:14,
    repositioningLock:15,
    width:16,
    isLinkWidthToHeight:17,
    height:18,
    isLinkHeightToFrets:19,
    diagramSizeLock:20,
    stringThickness:21,
    isLinkThickness:22,
    fretThickness:23,
    nutThickness:24,
    lineArtThicknessLock:25,
    quitByDefault:26,
    unlockByDefault:27,
    chordNameFont:28,
    chordNameFontSize:29,
    chordNameFontH:30,
    chordNameFontV:31,
    fingersUsedFont:32,
    fingersUsedFontSize:33,
    fingersUsedFontH:34,
    fingersUsedFontV:35,
    fretPositionsFont:36,
    fretPositionsFontSize:37,
    fretPositionsFontH:38,
    fretPositionsFontV:39,
    fretNumberFont:40,
    fretNumberFontSize:41,
    fretNumberFontH:42,
    fretNumberFontV:43,

    size:41
};

DEBUG                               = false;
WINDOW_WIDTH                        = 500;
WINDOW_HEIGHT_SMALL                 = 278;
WINDOW_HEIGHT_BIG                   = 490;
VERSION                             = "v0.4.2"
LINK_ICON                           = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%09pHYs%00%00%1EB%00%00%1EB%01K%C3%A3%C3%B9%C2%AD%00%00%00%C2%A5IDAT%18%C2%95u%C2%90Q%0D%021%10D%1F%17%04%C2%9C%C2%84%C2%B6%0A%C2%90%40%1D%20%01%14%10%14%20%01P%40P%00%0E%40%02%0A%C3%9AJ%C3%80%01d%C2%9A%C2%BD%C3%8B%C3%81%1D%C3%B3%C3%93t2%C3%997%C2%BB3%26%C2%94rY%00g%40%C3%AF%0B%C3%985SA%C3%A0%008%05%C2%80%C2%A2%C3%BF%C2%BF%C3%A0%09%C2%88%C3%81%C2%BB%23p%01%C3%9A%1E%C2%9Drq6i%05%3C%C2%82w%C3%91*%C3%9C%C2%85%C2%AF%C3%81%C2%81!%C3%9D%C2%80%C2%A5a%C3%95S%C2%8A%C3%8DO(Z7%C3%A1%C3%BAP%C3%B0%C3%AE%C2%A9%C2%8E%C3%97%C2%A1a%C3%81%C2%BDm%C3%9By%15%C3%BBN%C2%B9%C2%AC%C2%BB%C2%9EF%18in%C3%8E6%C3%A5%C3%92%C3%9A%24MP%C2%85%2F%09%C2%BD%C2%B1%C3%83j%C3%A3z%C3%9C%C3%918%C3%A0%03Z%C3%868t%C2%86%C3%B2I%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
LOCK_ICON                           = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0E%08%06%00%00%00%16%C2%A3%C2%8D%C2%AB%00%00%00%09pHYs%00%00%000%00%00%000%011Y'%C3%BA%00%00%00%C2%9BIDAT(%C2%91%7D%C2%90%C3%AB%0D%C3%820%0C%C2%84%C2%AF%C2%88%C3%9F%C2%A6%23u%C2%842I%C3%95%09%60%03%60%C2%82%C2%8E%00%1B%C3%90%11%60%12%C3%90-Pt%C3%88%C2%91%2C%2B%C3%8AIV%C2%AC%C3%8B%17%3F%02%C2%89dOr!%C2%B9%C2%A5%C2%B8%C3%80%C2%B5%C3%B7%C3%B3%04%60%040%03x%C2%B97%C3%88'%093%C2%9BKE%C2%BD%3E%23I%1E%C3%89%C2%8F%C3%9C%5D%C2%B8Z3%C3%A8%5E%C2%9F%C3%81%C2%A6%3A%C2%92O%C2%9F%C2%A7%C2%A5U%C3%A0%C2%96%C2%80%C2%87%C2%9Fc4s%C3%AB%C2%AB%C2%99%1D%15%C3%8A%5B%C3%A0%3B%C3%A4%C3%BF%25%C2%8Ar%C3%AB%2F%00U%13t%C2%8F%60%C3%B9%C3%B0X%C2%A5%C2%BAX%06%C2%A5C%0D%C2%ACm%5D%C2%95*j%C2%A6%C2%A9I%01%C2%B7%1F3%C3%AFG%02T%05%C3%AC%26%00%00%00%00IEND%C2%AEB%60%C2%82"; 
ERROR_MSG                           = "Something went wrong: "; 
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
QUIT_BY_DEFAULT                     = "quitByDefault";
UNLOCK_BY_DEFAULT                   = "unlockByDefault";

CHORD_NAME_FONT                     = "chordNameFont";
CHORD_NAME_FONT_SIZE                = "chordNameFontSize";
CHORD_NAME_FONT_H                   = "chordNameFontH";
CHORD_NAME_FONT_V                   = "chordNameFontV";

FINGERS_USED_FONT                   = "fingersUsedFont";
FINGERS_USED_FONT_SIZE              = "fingersUsedFontSize";
FINGERS_USED_FONT_H                 = "fingersUsedFontH";
FINGERS_USED_FONT_V                 = "fingersUsedFontV";

FRET_POSITION_FONT                  = "fretPositionsFont";
FRET_POSITION_FONT_SIZE             = "fretPositionsFontSize";
FRET_POSITION_FONT_H                = "fretPositionsFontH";
FRET_POSITION_FONT_V                = "fretPositionsFontV";

FRET_NUMBER_FONT                    = "fretNumberFont";
FRET_NUMBER_FONT_SIZE               = "fretNumberFontSize";
FRET_NUMBER_FONT_H                  = "fretNumberFontH";
FRET_NUMBER_FONT_V                  = "fretNumberFontV";

DEFAULT_FONT                        = getDefaultFont("PetalumaScript", "Petaluma Script");
DEFAULT_NUMERIC_FONT                = getDefaultFont("PetalumaText", "Petaluma Text");

// end of constants

// check if the script is already running. If it does, do not run it again
if (typeof isRunning == 'undefined') isRunning = false;

if (!isRunning) 
{
    isRunning = true;
    init();
}
else alert("The Chord Diagram Creator is already running");

function loadPreferences()
{
    prefs = {};     // object that handles prefs data (save/load)
    var prefsFile = File(PREFS_FILE); 

    if (DEBUG && prefsFile.exists) prefsFile.remove(); 

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
        setDefaultAt(PrefID.quitByDefault);   
        setDefaultAt(PrefID.unlockByDefault);   
        setDefaultAt(PrefID.chordNameFont);   
        setDefaultAt(PrefID.chordNameFontSize);   
        setDefaultAt(PrefID.chordNameFontH);   
        setDefaultAt(PrefID.chordNameFontV);   
        setDefaultAt(PrefID.fingersUsedFont);   
        setDefaultAt(PrefID.fingersUsedFontSize); 
        setDefaultAt(PrefID.fingersUsedFontH); 
        setDefaultAt(PrefID.fingersUsedFontV); 
        setDefaultAt(PrefID.fretPositionsFont); 
        setDefaultAt(PrefID.fretPositionsFontSize); 
        setDefaultAt(PrefID.fretPositionsFontH); 
        setDefaultAt(PrefID.fretPositionsFontV); 
        setDefaultAt(PrefID.fretNumberFont); 
        setDefaultAt(PrefID.fretNumberFontSize); 
        setDefaultAt(PrefID.fretNumberFontH); 
        setDefaultAt(PrefID.fretNumberFontV);
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
        
        checkData = []; 
        for(var j = 0; j < PrefID.size; j++) 
        {
            checkData.push(false);
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
                    checkData[PrefID.diagramSizeLock] = false;
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
                case QUIT_BY_DEFAULT:
                    prefs.quitByDefault = (data[i] == undefined) ? setDefaultAt(PrefID.quitByDefault) : data[i];
                    checkData[PrefID.quitByDefault] = true;
                    break; 
                case UNLOCK_BY_DEFAULT:
                    prefs.unlockByDefault = (data[i] == undefined) ? setDefaultAt(PrefID.unlockByDefault) : data[i];
                    checkData[PrefID.unlockByDefault] = true;
                    break; 
                case CHORD_NAME_FONT:
                    prefs.chordNameFont = (data[i] == undefined) ? setDefaultAt(PrefID.chordNameFont) : data[i];
                    checkData[PrefID.chordNameFont] = true;
                    break; 
                case CHORD_NAME_FONT_SIZE:
                    prefs.chordNameFontSize = (data[i] == undefined) ? setDefaultAt(PrefID.chordNameFontSize) : data[i];
                    checkData[PrefID.chordNameFontSize] = true;
                    break; 
                case CHORD_NAME_FONT_H:
                    prefs.chordNameFontH = (data[i] == undefined) ? setDefaultAt(PrefID.chordNameFontH) : data[i];
                    checkData[PrefID.chordNameFontH] = true;
                    break; 
                case CHORD_NAME_FONT_V:
                    prefs.chordNameFontV = (data[i] == undefined) ? setDefaultAt(PrefID.chordNameFontV) : data[i];
                    checkData[PrefID.chordNameFontV] = true;
                    break; 
                case FINGERS_USED_FONT:
                    prefs.fingersUsedFont = (data[i] == undefined) ? setDefaultAt(PrefID.FingersUsedFont) : data[i];
                    checkData[PrefID.fingersUsedFont] = true;
                    break; 
                case FINGERS_USED_FONT_SIZE:
                    prefs.fingersUsedFontSize = (data[i] == undefined) ? setDefaultAt(PrefID.fingersUsedFontSize) : data[i];
                    checkData[PrefID.fingersUsedFontSize] = true;
                    break; 
                case FINGERS_USED_FONT_H:
                    prefs.fingersUsedFontH = (data[i] == undefined) ? setDefaultAt(PrefID.fingersUsedFontH) : data[i];
                    checkData[PrefID.fingersUsedFontH] = true;
                    break; 
                case FINGERS_USED_FONT_V:
                    prefs.fingersUsedFontV = (data[i] == undefined) ? setDefaultAt(PrefID.fingersUsedFontV) : data[i];
                    checkData[PrefID.fingersUsedFontV] = true;
                    break; 
                case FRET_POSITION_FONT:
                    prefs.fretPositionsFont = (data[i] == undefined) ? setDefaultAt(PrefID.fretPositionsFont) : data[i];
                    checkData[PrefID.fretPositionsFont] = true;
                    break; 
                case FRET_POSITION_FONT_SIZE:
                    prefs.fretPositionsFontSize = (data[i] == undefined) ? setDefaultAt(PrefID.fretPositionsFontSize) : data[i];
                    checkData[PrefID.fretPositionsFontSize] = true;
                    break; 
                case FRET_POSITION_FONT_H:
                    prefs.fretPositionsFontH = (data[i] == undefined) ? setDefaultAt(PrefID.fretPositionsFontH) : data[i];
                    checkData[PrefID.fretPositionsFontH] = true;
                    break; 
                case FRET_POSITION_FONT_V:
                    prefs.fretPositionsFontV = (data[i] == undefined) ? setDefaultAt(PrefID.fretPositionsFontV) : data[i];
                    checkData[PrefID.fretPositionsFontV] = true;
                    break; 
                case FRET_NUMBER_FONT:
                    prefs.fretNumberFont = (data[i] == undefined) ? setDefaultAt(PrefID.fretNumberFont) : data[i];
                    checkData[PrefID.fretNumberFont] = true;
                    break; 
                case FRET_NUMBER_FONT_SIZE:
                    prefs.fretNumberFontSize = (data[i] == undefined) ? setDefaultAt(PrefID.fretNumberFontSize) : data[i];
                    checkData[PrefID.fretNumberFontSize] = true;
                    break; 
                case FRET_NUMBER_FONT_H:
                    prefs.fretNumberFontH = (data[i] == undefined) ? setDefaultAt(PrefID.fretNumberFontH) : data[i];
                    checkData[PrefID.fretNumberFontH] = true;
                    break; 
                case FRET_NUMBER_FONT_V:
                    prefs.fretNumberFontV = (data[i] == undefined) ? setDefaultAt(PrefID.fretNumberFontV) : data[i];
                    checkData[PrefID.fretNumberFontV] = true;
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

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 150	 Text: MainWindow

// ooo        ooooo            o8o              oooooo   oooooo     oooo  o8o                    .o8                             
// `88.       .888'            `"'               `888.    `888.     .8'   `"'                   "888                             
//  888b     d'888   .oooo.   oooo  ooo. .oo.     `888.   .8888.   .8'   oooo  ooo. .oo.    .oooo888   .ooooo.  oooo oooo    ooo 
//  8 Y88. .P  888  `P  )88b  `888  `888P"Y88b     `888  .8'`888. .8'    `888  `888P"Y88b  d88' `888  d88' `88b  `88. `88.  .8'  
//  8  `888'   888   .oP"888   888   888   888      `888.8'  `888.8'      888   888   888  888   888  888   888   `88..]88..8'   
//  8    Y     888  d8(  888   888   888   888       `888'    `888'       888   888   888  888   888  888   888    `888'`888'    
// o8o        o888o `Y888""8o o888o o888o o888o       `8'      `8'       o888o o888o o888o `Y8bod88P" `Y8bod8P'     `8'  `8'     

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
        YourSavedChordsPanel.preferredSize.width = 202; 
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
        NumberOfStringsAndFretsPanel.preferredSize.width = 349; 
        NumberOfStringsAndFretsPanel.preferredSize.height = 53; 
        NumberOfStringsAndFretsPanel.orientation = "row"; 
        NumberOfStringsAndFretsPanel.alignChildren = ["left","top"]; 
        NumberOfStringsAndFretsPanel.spacing = 10; 
        NumberOfStringsAndFretsPanel.margins = 10; 

    var NumberOfStringsDropDown_array = ["4 Strings","5 Strings","6 Strings","7 Strings","8 Strings","9 Strings"]; 
    var NumberOfStringsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfStringsDropDown", items: NumberOfStringsDropDown_array}); 
        NumberOfStringsDropDown.helpTip = "The number of strings"; 
        NumberOfStringsDropDown.selection = NumberOfStringsDropDown.items[prefs.numberOfStringsSelection]; 
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

                        //change the diagram height accordingly
                        if (prefs.isLinkHeightToFrets)
                        {   
                            var currentString = (NumberOfStringsDropDown.selection).text;   // number of strings as text
                            var currentFret = (NumberOfFretsDropDown.selection).text;       // number of frets as text
                            // number of frets as Int plus the nut (parseInt(currentFret.charAt(0)) + 1)
                            var changedHeight = (parseInt(currentFret.charAt(0)) + 1) * parseFloat(DiagramWidthInput.text) / parseInt(currentString.charAt(0));       
                            DiagramHeightInput.text = String(changedHeight);
                            prefs.height = DiagramHeightInput.text;
                        }
                        prefs.numberOfStringsSelection = i-4;
                    } 
                }

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var NumberOfFretsDropDown_array = ["4 Frets","5 Frets","6 Frets","7 Frets","8 Frets","9 Frets"]; 
    var NumberOfFretsDropDown = NumberOfStringsAndFretsPanel.add("dropdownlist", undefined, undefined, {name: "NumberOfFretsDropDown", items: NumberOfFretsDropDown_array}); 
        NumberOfFretsDropDown.helpTip = "The number of frets to drawn on chord diagram"; 
        NumberOfFretsDropDown.selection = prefs.numberOfFretsSelection; 
        NumberOfFretsDropDown.preferredSize.width = 72; 
        NumberOfFretsDropDown.preferredSize.height = 23;

            NumberOfFretsDropDown.onChange = function () 
            {
                for (i = 5; i < 11; i++)
                {
                    if (NumberOfFretsDropDown.selection == i-5) 
                    {
                        prefs.numberOfFretsSelection = i - 5;

                        //change the diagram height accordingly 
                         
                        if (prefs.isLinkHeightToFrets)
                        {
                            var currentString = (NumberOfStringsDropDown.selection).text;
                            
                            var changedHeight = i * parseFloat(DiagramWidthInput.text) / parseInt(currentString.charAt(0));

                            DiagramHeightInput.text = String(changedHeight);
                            prefs.height = DiagramHeightInput.text;
                        }
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
                if(ChordNameLockGroupLockCheckBox.value && NumberOfStringsAndFretsPanelLockCheckBox.value && FingersUsedLockCheckBox.value &&  FretPositionsLockCheckBox.value)
                {
                    if(!prefs.unlockByDefault) showLockWarningDialog();
                }
                else
                {
                    if(!ChordNameLockGroupLockCheckBox.value) ChordNameInput.text = "";

                    if(!NumberOfStringsAndFretsPanelLockCheckBox.value)
                    {
                        setDefaultAt(PrefID.numberOfStringsSelection);
                        NumberOfStringsDropDown.selection = prefs.numberOfStringsSelection;
                        
                        setDefaultAt(PrefID.numberOfFretsSelection);
                        NumberOfFretsDropDown.selection = prefs.numberOfFretsSelection;
                        
                        setDefaultAt(PrefID.drawBarre);
                        DrawBarreCheckBox.value = prefs.drawBarre;
                    }
                    
                    if(!FingersUsedLockCheckBox.value)
                    {
                        for (var i = 0; i < FingersUsedInput.length; i++)
                        {
                            FingersUsedInput[i].text = "";
                        }
                    }

                    if(!FretPositionsLockCheckBox.value)
                    {
                        for (var i = 0; i < FretPositionsInput.length; i++)
                        {
                            FretPositionsInput[i].text = "";
                        }
                    }
                }
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
        OptionsBtn.helpTip = "Will open an options dialog."; 
        OptionsBtn.text = "Options"; 
        OptionsBtn.preferredSize.width = 98; 
        OptionsBtn.preferredSize.height = 24;

            OptionsBtn.onClick = function () 
            {
                
                try{
                   //btExecute('showOptionsDialog');
                    if(!isOptionsOpen)
                    {
                        options = showOptionsDialog();
                        options.show();
                        isOptionsOpen = true;
                    }
                }
                catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
                
                //try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var AboutBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "AboutBtn"}); 
        AboutBtn.helpTip = "Will open a dialog with information about the Chord Diagram Generator script"; 
        AboutBtn.text = "About"; 
        AboutBtn.preferredSize.width = 98; 
        AboutBtn.preferredSize.height = 24;

            AboutBtn.onClick = function () 
            {
                //try{btExecute('showAboutDialog');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);} 
               try{showAboutDialog();}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);} 
            } 

    var QuitBtn = MainButtonSubGroup.add("button", undefined, undefined, {name: "CloseBtn"}); 
        QuitBtn.helpTip = "Will close this window and end the Chord Diagram Generator"; 
        QuitBtn.text = "Quit"; 
        QuitBtn.preferredSize.width = 98; 
        QuitBtn.preferredSize.height = 23;

            QuitBtn.onClick = function () 
            {
                if(prefs.quitByDefault) MainWindow.close();
                    else showQuitWarningDialog();
            } 

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
        DiagramSizeGroup.alignChildren = ["left","center"]; 
        DiagramSizeGroup.spacing = 0; 
        DiagramSizeGroup.margins = 0; 

    // DIAGRAM SIZE PANEL
    // ================
    var DiagramSizePanel = DiagramSizeGroup.add("panel", undefined, undefined, {name: "DiagramSizePanel"}); 
        DiagramSizePanel.text = "Diagram Size"; 
        DiagramSizePanel.preferredSize.width = 470; 
        DiagramSizePanel.preferredSize.height = 53; 
        DiagramSizePanel.orientation = "row"; 
        DiagramSizePanel.alignChildren = ["left","top"]; 
        DiagramSizePanel.spacing = 5; 
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
                
                if(prefs.isLinkWidthToHeight)
                {
                    var newWidth = DiagramWidthInput.text;
                  
                    var changedHeight = parseFloat(newWidth) * parseFloat(DiagramHeightInput.text) / parseFloat(lastDiagramWidthInput);
                    DiagramHeightInput.text = String(changedHeight);
                    lastDiagramHeightInput = DiagramHeightInput.text;
                    prefs.height = lastDiagramHeightInput;
                }
               
                lastDiagramWidthInput = DiagramWidthInput.text;
                prefs.width = lastDiagramHeightInput;
                
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    // LINK WIDTH TO HEIGHT GROUP
    // ======================
    var LinkWidthToHeightGroup = DiagramSizePanel.add("group", undefined, {name: "LinkWidthToHeightGroup"}); 
        LinkWidthToHeightGroup.preferredSize.width = 32; 
        LinkWidthToHeightGroup.preferredSize.height = 17; 
        LinkWidthToHeightGroup.orientation = "row"; 
        LinkWidthToHeightGroup.alignChildren = ["left","center"]; 
        LinkWidthToHeightGroup.spacing = 0; 
        LinkWidthToHeightGroup.margins = 0; 
        LinkWidthToHeightGroup.alignment = ["left","center"]; 

    var LinkWidthToHeightCheckBox = LinkWidthToHeightGroup.add("checkbox", undefined, undefined, {name: "LinkWidthToHeightCheckBox"}); 
        LinkWidthToHeightCheckBox.helpTip = "If enabled, the width and height values of the diagram will be linked,\nthus changing the one value will also affect the other analogically "; 
        LinkWidthToHeightCheckBox.preferredSize.width = 18; 
        LinkWidthToHeightCheckBox.preferredSize.height = 14; 
        LinkWidthToHeightCheckBox.alignment = ["left","center"]; 
        LinkWidthToHeightCheckBox.value = prefs.isLinkWidthToHeight; 

            LinkWidthToHeightCheckBox.onClick = function()
            {
                prefs.isLinkWidthToHeight = LinkWidthToHeightCheckBox.value;

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var LinkWidthToHeightImage = LinkWidthToHeightGroup.add("image", undefined, File.decode(LINK_ICON), {name: "LinkWidthToHeightImage"}); 
        LinkWidthToHeightImage.alignment = ["left","center"]; 

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
                
                if(prefs.isLinkWidthToHeight)
                {
                    var newHeight = DiagramHeightInput.text;
                
                    var changedWidth = parseFloat(newHeight) * parseFloat(DiagramWidthInput.text) / parseFloat(lastDiagramHeightInput);
                    DiagramWidthInput.text = String(changedWidth);
                    lastDiagramWidthInput = DiagramWidthInput.text;
                    prefs.width = lastDiagramWidthInput;
                    
                }

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
        LinkHeightToFrets.text = "Height to Frets and Strings"; 
        LinkHeightToFrets.preferredSize.width = 155; 
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

                if(prefs.isLinkThickness)
                {
                    if (LineArtThicknessFretsInput.text != AUTO && LineArtThicknessStringsInput.text != AUTO && lastLineArtThicknessFretsInput != AUTO && lastLineArtThicknessStringsInput != AUTO)
                    {
                        var newStringThickness = LineArtThicknessStringsInput.text;

                        var changedFretThickness = parseFloat(newStringThickness) * parseFloat(LineArtThicknessFretsInput.text) / parseFloat(lastLineArtThicknessStringsInput);
                        LineArtThicknessFretsInput.text = String(changedFretThickness);
                        lastLineArtThicknessFretsInput = LineArtThicknessFretsInput.text;
                        prefs.fretThickness = lastLineArtThicknessFretsInput;
                    }
                }

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
               
                if(prefs.isLinkThickness)
                {
                    if (LineArtThicknessFretsInput.text != AUTO && LineArtThicknessStringsInput.text != AUTO && lastLineArtThicknessFretsInput != AUTO && lastLineArtThicknessStringsInput != AUTO)
                    {
                        var newFretsThickness = LineArtThicknessFretsInput.text;

                        var changedStringThickness = parseFloat(newFretsThickness) * parseFloat(LineArtThicknessStringsInput.text) / parseFloat(lastLineArtThicknessFretsInput);
                        LineArtThicknessStringsInput.text = String(changedStringThickness);
                        lastLineArtThicknessStringsInput = LineArtThicknessStringsInput.text;
                        prefs.stringThickness = lastLineArtThicknessStringsInput;
                    } 
                }

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
        ResetLineArtBtn.helpTip = "Will reset all the chord line art values that are not locked"; 
        ResetLineArtBtn.text = "Reset Line Art"; 
        ResetLineArtBtn.preferredSize.width = 109; 
        ResetLineArtBtn.preferredSize.height = 24;

        ResetLineArtBtn.onClick = function()
        {
            if(PositioningLockCheckBox.value && RepositioningLockCheckBox.value && DiagramSizeLockCheckBox.value &&  LineArtThicknessLockCheckBox.value)
            {
                if(!prefs.unlockByDefault) showLockWarningDialog();
            }
            else
            {
                if(!PositioningLockCheckBox.value)
                {
                    setDefaultAt(PrefID.x);
                    PositioningXInput.text = prefs.x;

                    setDefaultAt(PrefID.y);
                    PositioningYInput.text = prefs.y;
                }

                if(!RepositioningLockCheckBox.value)
                {
                    setDefaultAt(PrefID.canRepositionX);
                    ReposXCheckBox.value = prefs.canRepositionX;
                    
                    setDefaultAt(PrefID.canRepositionY);
                    ReposYCheckBox.value = prefs.canRepositionY;

                    setDefaultAt(PrefID.rePosSpacing);
                    ReposSpacingInput.text = prefs.rePosSpacing;
                }

                if(!DiagramSizeLockCheckBox.value)
                {
                    setDefaultAt(PrefID.width);
                    DiagramWidthInput.text = prefs.width;

                    setDefaultAt(PrefID.isLinkWidthToHeight);
                    LinkWidthToHeightCheckBox.value = prefs.isLinkWidthToHeight;

                    setDefaultAt(PrefID.height);
                    DiagramHeightInput.text = prefs.height;

                    setDefaultAt(PrefID.isLinkHeightToFrets);
                    LinkHeightToFretsCheckBox.value = prefs.isLinkHeightToFrets;
                }

                if(!LineArtThicknessLockCheckBox.value)
                {
                    setDefaultAt(PrefID.stringThickness);
                    LineArtThicknessStringsInput.text = prefs.stringThickness;

                    setDefaultAt(PrefID.isLinkThickness);
                    LinkStringToFretsThicknessCheckBox.value = prefs.isLinkThickness;

                    setDefaultAt(PrefID.fretThickness);
                    LineArtThicknessFretsInput.text = prefs.fretThickness;

                    setDefaultAt(PrefID.nutThickness);
                    LineArtThicknessNutInput.text = prefs.nutThickness;
                }
            }

            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
        } 

               
        // determine the size of MainWindow  and visibility of the MainBottomGroup, based on ShowMoreCheckBox.value
        MainBottomGroup.visible = ShowMoreCheckBox.value ? true : false;
        MainBottomGroup.enabled = ShowMoreCheckBox.value ? true : false;
        MainWindow.size = ShowMoreCheckBox.value ? {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_BIG} : {width: WINDOW_WIDTH, height: WINDOW_HEIGHT_SMALL};

        MainWindow.layout.layout();

            MainWindow.onClose = function()
            {
                isRunning = false;
                if(isOptionsOpen)
                {
                    options.close();
                    isOptionsOpen = true;
                }

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    return MainWindow;
}

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 150	 Text: QuitWarning

//   .oooooo.                   o8o      .   oooooo   oooooo     oooo                                 o8o                         
//  d8P'  `Y8b                  `"'    .o8    `888.    `888.     .8'                                  `"'                         
// 888      888    oooo  oooo  oooo  .o888oo   `888.   .8888.   .8'    .oooo.   oooo d8b ooo. .oo.   oooo  ooo. .oo.    .oooooooo 
// 888      888    `888  `888  `888    888      `888  .8'`888. .8'    `P  )88b  `888""8P `888P"Y88b  `888  `888P"Y88b  888' `88b  
// 888      888     888   888   888    888       `888.8'  `888.8'      .oP"888   888      888   888   888   888   888  888   888  
// `88b    d88b     888   888   888    888 .      `888'    `888'      d8(  888   888      888   888   888   888   888  `88bod8P'  
//  `Y8bood8P'Ybd'  `V88V"V8P' o888o   "888"       `8'      `8'       `Y888""8o d888b    o888o o888o o888o o888o o888o `8oooooo.  
//                                                                                                                     d"     YD  
//                                                                                                                     "Y88888P'  

function showQuitWarningDialog()
{
    // QUITWARNINGDIALOG
    // =================
    var QuitWarningDialog = new Window("dialog"); 
        QuitWarningDialog.text = " Attention Required!"; 
        QuitWarningDialog.preferredSize.width = 440; 
        QuitWarningDialog.preferredSize.height = 126; 
        QuitWarningDialog.orientation = "column"; 
        QuitWarningDialog.alignChildren = ["center","center"]; 
        QuitWarningDialog.spacing = 10; 
        QuitWarningDialog.margins = 16; 

    var QuitWarningMessage = QuitWarningDialog.add("statictext", undefined, undefined, {name: "QuitWarningMessage"}); 
        QuitWarningMessage.text = "The Chord Diagram Creator is about to quit!"; 
        QuitWarningMessage.preferredSize.width = 408; 
        QuitWarningMessage.preferredSize.height = 34; 
        QuitWarningMessage.justify = "center"; 

    var QuitByDefault = QuitWarningDialog.add("checkbox", undefined, undefined, {name: "QuitByDefault"}); 
        QuitByDefault.helpTip = " Will set 'Yes' as default answer"; 
        QuitByDefault.text = "Do not ask me again"; 
        QuitByDefault.preferredSize.width = 314; 
        QuitByDefault.preferredSize.height = 15; 
        QuitByDefault.value = prefs.quitByDefault;

        QuitByDefault.onClick = function()
        {
            prefs.quitByDefault = QuitByDefault.value;

            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
        }

    var QuitWarningEmpty = QuitWarningDialog.add("statictext", undefined, undefined, {name: "QuitWarningEmpty"}); // placeholder

    // QUITWARNINGBUTTONSGROUP
    // =======================
    var QuitWarningButtonsGroup = QuitWarningDialog.add("group", undefined, {name: "QuitWarningButtonsGroup"}); 
        QuitWarningButtonsGroup.orientation = "row"; 
        QuitWarningButtonsGroup.alignChildren = ["center","center"]; 
        QuitWarningButtonsGroup.spacing = 63; 
        QuitWarningButtonsGroup.margins = 0; 

    var QuitWarningYes = QuitWarningButtonsGroup.add("button", undefined, undefined, {name: "QuitWarningYes"}); 
        QuitWarningYes.helpTip = "Will quit"; 
        QuitWarningYes.text = "QUIT"; 
        QuitWarningYes.preferredSize.width = 80; 
        QuitWarningYes.preferredSize.height = 25; 

            QuitWarningYes.onClick = function()
            {
                QuitWarningDialog.close();
                mainWindow.close();
                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
            }

    var QuitWarningNo = QuitWarningButtonsGroup.add("button", undefined, undefined, {name: "QuitWarningNo"}); 
        QuitWarningNo.helpTip = "Will not quit"; 
        QuitWarningNo.text = "Cancel"; 
        QuitWarningNo.preferredSize.width = 80; 
        QuitWarningNo.preferredSize.height = 25; 

            QuitWarningNo.onClick = function()
            {
                QuitWarningDialog.close();

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
            }

    QuitWarningDialog.show();
}

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 150	 Text: LockWarning

// ooooo                            oooo        oooooo   oooooo     oooo                                 o8o                         
// `888'                            `888         `888.    `888.     .8'                                  `"'                         
//  888          .ooooo.   .ooooo.   888  oooo    `888.   .8888.   .8'    .oooo.   oooo d8b ooo. .oo.   oooo  ooo. .oo.    .oooooooo 
//  888         d88' `88b d88' `"Y8  888 .8P'      `888  .8'`888. .8'    `P  )88b  `888""8P `888P"Y88b  `888  `888P"Y88b  888' `88b  
//  888         888   888 888        888888.        `888.8'  `888.8'      .oP"888   888      888   888   888   888   888  888   888  
//  888       o 888   888 888   .o8  888 `88b.       `888'    `888'      d8(  888   888      888   888   888   888   888  `88bod8P'  
// o888ooooood8 `Y8bod8P' `Y8bod8P' o888o o888o       `8'      `8'       `Y888""8o d888b    o888o o888o o888o o888o o888o `8oooooo.  
//                                                                                                                        d"     YD 

function showLockWarningDialog()
{
        // LOCKWARNINGDIALOG
    // =================
    var LockWarningDialog = new Window("dialog"); 
        LockWarningDialog.text = " Attention Required!"; 
        LockWarningDialog.orientation = "column"; 
        LockWarningDialog.alignChildren = ["center","center"]; 
        LockWarningDialog.spacing = 10; 
        LockWarningDialog.margins = 16; 

    var LockWarningMessage = LockWarningDialog.add("group"); 
        LockWarningMessage.orientation = "column"; 
        LockWarningMessage.alignChildren = ["left","center"]; 
        LockWarningMessage.spacing = 0; 

        LockWarningMessage.add("statictext", undefined, "The operation cannot complete, because  all related fields", {name: "LockWarningMessage"}); 
        LockWarningMessage.add("statictext", undefined, "are locked. Unlock at least one related field and try again.  ", {name: "LockWarningMessage"}); 
        LockWarningMessage.add("statictext", undefined, "", {name: "LockWarningMessage"}); 

    var UnlockByDefault = LockWarningDialog.add("checkbox", undefined, undefined, {name: "UnlockByDefault"}); 
        UnlockByDefault.helpTip = "Will affect both [New Chord] and [Reset Line Art] buttons"; 
        UnlockByDefault.text = "Do not ask me again"; 
        UnlockByDefault.value = prefs.unlockByDefault;
        
        UnlockByDefault.onClick = function()
        {
            prefs.unlockByDefault = UnlockByDefault.value;

            try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
        }

    // LOCK WARNING BUTTON
    // =======================
    var LockWarningYesBtn = LockWarningDialog.add("button", undefined, undefined, {name: "LockWarningYes"});  
        LockWarningYesBtn.text = "OK"; 
        LockWarningYesBtn.preferredSize.width = 70; 
        LockWarningYesBtn.preferredSize.height = 25; 

            LockWarningYesBtn.onClick = function()
            {
                LockWarningDialog.close();
            }

    LockWarningDialog.show();
}

// Font: roman   Reflection: no   Adjustment: left   Stretch: yes      Width: 180	 Text: Reset Dialog

// ooooooooo.                                    .      oooooooooo.    o8o            oooo                       
// `888   `Y88.                                .o8      `888'   `Y8b   `"'            `888                       
//  888   .d88'  .ooooo.   .oooo.o  .ooooo.  .o888oo     888      888 oooo   .oooo.    888   .ooooo.   .oooooooo 
//  888ooo88P'  d88' `88b d88(  "8 d88' `88b   888       888      888 `888  `P  )88b   888  d88' `88b 888' `88b  
//  888`88b.    888ooo888 `"Y88b.  888ooo888   888       888      888  888   .oP"888   888  888   888 888   888  
//  888  `88b.  888    .o o.  )88b 888    .o   888 .     888     d88'  888  d8(  888   888  888   888 `88bod8P'  
// o888o  o888o `Y8bod8P' 8""888P' `Y8bod8P'   "888"    o888bood8P'   o888o `Y888""8o o888o `Y8bod8P' `8oooooo.  
//                                                                                                    d"     YD  
//                                                                                                    "Y88888P'  
                                                                                                              
function showResetDialog()
{
        // FACTORYRESETDIALOG
        // ==================
        var FactoryResetDialog = new Window("dialog"); 
            FactoryResetDialog.text = " Attention Required!"; 
            //FactoryResetDialog.preferredSize.width = 350; 
            //FactoryResetDialog.preferredSize.height = 100; 
            FactoryResetDialog.orientation = "column"; 
            FactoryResetDialog.alignChildren = ["center","top"]; 
            FactoryResetDialog.spacing = 29; 
            FactoryResetDialog.margins = 16; 

        // RESETTEXTGROUP
        // ==============
        var ResetTextGroup = FactoryResetDialog.add("group", undefined, {name: "ResetTextGroup"}); 
        // ResetTextGroup.preferredSize.width = 300; 
        // ResetTextGroup.preferredSize.height = 102; 
            ResetTextGroup.orientation = "column"; 
            ResetTextGroup.alignChildren = ["center","center"]; 
            ResetTextGroup.spacing = 0; 
            ResetTextGroup.margins = 0; 

        var ResetText1 = ResetTextGroup.add("group"); 
        // ResetText1.preferredSize.width = 300; 
        //ResetText1.preferredSize.height = 51; 
            ResetText1.orientation = "column"; 
            ResetText1.alignChildren = ["center","center"]; 
            ResetText1.spacing = 0; 

            ResetText1.add("statictext", undefined, "This action will reset your preferences and is irreversible! Are you sure?", {name: "ResetText1", multiline: false}); 
            //ResetText1.preferredSize.width = 300; 
        //  ResetText1.preferredSize.height = 34; 

            var ResetTextGap =  ResetTextGroup.add("statictext", undefined, undefined); 

        var ResetText2 = ResetTextGroup.add("statictext", undefined, undefined, {name: "ResetText2", multiline: false}); 
            ResetText2.text = "If you press the [YES] button, the script will restart to complete the reset."; 
        // ResetText2.preferredSize.width = 300; 
        //  ResetText2.preferredSize.height = 34; 

        // RESETBUTTONS
        // ============
        var ResetButtons = FactoryResetDialog.add("group", undefined, {name: "ResetButtons"}); 
            ResetButtons.orientation = "row"; 
            ResetButtons.alignChildren = ["center","center"]; 
            ResetButtons.spacing = 50; 
            ResetButtons.margins = 0; 
            ResetButtons.alignment = ["center","center"]; 

        var ResetYesBtn = ResetButtons.add("button", undefined, undefined, {name: "ResetYesBtn"}); 
            ResetYesBtn.helpTip = "Will do factory reset and then will restart."; 
            ResetYesBtn.text = "YES"; 
            ResetYesBtn.preferredSize.width = 80; 
            ResetYesBtn.preferredSize.height = 30; 

                ResetYesBtn.onClick = function () 
                {
                    var prefsFile = File(PREFS_FILE); 

                    if (prefsFile.exists) prefsFile.remove(); 

                    FactoryResetDialog.close();
                    mainWindow.close();

                    init();

                } 

        var ResetNoBtn = ResetButtons.add("button", undefined, undefined, {name: "ResetNoBtn"}); 
            ResetNoBtn.helpTip = "Will close the dialog."; 
            ResetNoBtn.text = "NO"; 
            ResetNoBtn.preferredSize.width = 80; 
            ResetNoBtn.preferredSize.height = 30; 

                ResetNoBtn.onClick = function () {FactoryResetDialog.close();}

        FactoryResetDialog.show();
}

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 300	 Text: Options

//   .oooooo.                  .    o8o                                 
//  d8P'  `Y8b               .o8    `"'                                 
// 888      888 oo.ooooo.  .o888oo oooo   .ooooo.  ooo. .oo.    .oooo.o 
// 888      888  888' `88b   888   `888  d88' `88b `888P"Y88b  d88(  "8 
// 888      888  888   888   888    888  888   888  888   888  `"Y88b.  
// `88b    d88'  888   888   888 .  888  888   888  888   888  o.  )88b 
//  `Y8bood8P'   888bod8P'   "888" o888o `Y8bod8P' o888o o888o 8""888P' 
//               888                                                    
//              o888o                                                   
                                                                     
function showOptionsDialog()
{
    // temp vars to store changes until the [Apply] button is pressed 

        var prefschordNameFont         = prefs.chordNameFont;
        var prefschordNameFontSize     = prefs.chordNameFontSize;
        var prefschordNameFontH        = prefs.chordNameFontH;
        var prefschordNameFontV        = prefs.chordNameFontV;
        var prefsfingersUsedFont       = prefs.fingersUsedFont;
        var prefsfingersUsedFontSize   = prefs.fingersUsedFontSize;
        var prefsfingersUsedFontH      = prefs.fingersUsedFontH;
        var prefsfingersUsedFontV      = prefs.fingersUsedFontV;
        var prefsfretPositionsFont     = prefs.fretPositionsFont;
        var prefsfretPositionsFontSize = prefs.fretPositionsFontSize;
        var prefsfretPositionsFontH    = prefs.fretPositionsFontH;
        var prefsfretPositionsFontV    = prefs.fretPositionsFontV;
        var prefsfretNumberFont        = prefs.fretNumberFont;
        var prefsfretNumberFontSize    = prefs.fretNumberFontSize;
        var prefsfretNumberFontH       = prefs.fretNumberFontH;
        var prefsfretNumberFontV       = prefs.fretNumberFontV;

    // OPTIONSDIALOG
    // =============
    var OptionsDialog = new Window("palette", undefined, undefined, {closeButton: false, borderless: false}); 
        OptionsDialog.text = "Options"; 
        OptionsDialog.orientation = "row"; 
        OptionsDialog.alignChildren = ["center","top"]; 
        OptionsDialog.spacing = 10; 
        OptionsDialog.margins = 17; 

    // OPTIONSTABPANEL
    // ===============
    var OptionsTabPanel = OptionsDialog.add("tabbedpanel", undefined, undefined, {name: "OptionsTabPanel"}); 
        OptionsTabPanel.alignChildren = "fill"; 
        OptionsTabPanel.preferredSize.width = 323.75; 
        OptionsTabPanel.margins = 0; 

    // OPTIONSFONTSTAB
    // ===============
    var OptionsFontsTab = OptionsTabPanel.add("tab", undefined, undefined, {name: "OptionsFontsTab"}); 
        OptionsFontsTab.text = "Fonts"; 
        OptionsFontsTab.orientation = "column"; 
        OptionsFontsTab.alignChildren = ["center","top"]; 
        OptionsFontsTab.spacing = 10; 
        OptionsFontsTab.margins = 10; 

    // SETFONTSGROUP
    // =============
    var SetFontsGroup = OptionsFontsTab.add("group", undefined, {name: "SetFontsGroup"}); 
        SetFontsGroup.orientation = "column"; 
        SetFontsGroup.alignChildren = ["left","center"]; 
        SetFontsGroup.spacing = 10; 
        SetFontsGroup.margins = 0; 

    // CHORDNAMEFONTGROUP
    // ==================
    var ChordNameFontGroup = SetFontsGroup.add("group", undefined, {name: "ChordNameFontGroup"}); 
        ChordNameFontGroup.preferredSize.width = 289; 
        ChordNameFontGroup.preferredSize.height = 120; 
        ChordNameFontGroup.orientation = "column"; 
        ChordNameFontGroup.alignChildren = ["left","center"]; 
        ChordNameFontGroup.spacing = 10; 
        ChordNameFontGroup.margins = 0; 

    // CHORDNAMEFONTPANEL
    // ==================
    var ChordNameFontPanel = ChordNameFontGroup.add("panel", undefined, undefined, {name: "ChordNameFontPanel"}); 
        ChordNameFontPanel.text = "Chord Name Font"; 
        ChordNameFontPanel.preferredSize.width = 287; 
        ChordNameFontPanel.preferredSize.height = 118; 
        ChordNameFontPanel.orientation = "column"; 
        ChordNameFontPanel.alignChildren = ["left","top"]; 
        ChordNameFontPanel.spacing = 10; 
        ChordNameFontPanel.margins = 10; 

    var ChordNameFontDropDown = ChordNameFontPanel.add("dropdownlist", undefined, undefined, {name: "ChordNameFontDropDown"}); 
        ChordNameFontDropDown.helpTip = "Choose the font for the chord's diagram title"; 
        //ChordNameFontDropDown.selection = 0; 
        ChordNameFontDropDown.preferredSize.width = 265; 
        ChordNameFontDropDown.preferredSize.height = 25; 

        ChordNameFontDropDown.onChange = function()
        {
            prefschordNameFont = (ChordNameFontDropDown.selection).text;
        }

    // CHORDNAMEFONTBOTTOMGROUP
    // ========================
    var ChordNameFontBottomGroup = ChordNameFontPanel.add("group", undefined, {name: "ChordNameFontBottomGroup"}); 
        ChordNameFontBottomGroup.orientation = "row"; 
        ChordNameFontBottomGroup.alignChildren = ["left","center"]; 
        ChordNameFontBottomGroup.spacing = 10; 
        ChordNameFontBottomGroup.margins = 0; 

    // CHORDNAMEFONTSIZEPANEL
    // ======================
    var ChordNameFontSizePanel = ChordNameFontBottomGroup.add("panel", undefined, undefined, {name: "ChordNameFontSizePanel"}); 
        ChordNameFontSizePanel.text = "Size"; 
        ChordNameFontSizePanel.preferredSize.width = 75; 
        ChordNameFontSizePanel.preferredSize.height = 53; 
        ChordNameFontSizePanel.orientation = "column"; 
        ChordNameFontSizePanel.alignChildren = ["left","top"]; 
        ChordNameFontSizePanel.spacing = 10; 
        ChordNameFontSizePanel.margins = 10; 

    var ChordNameFontSizeInput = ChordNameFontSizePanel.add('edittext {properties: {name: "ChordNameFontSizeInput"}}'); 
        ChordNameFontSizeInput.helpTip = "Set the font size"; 
        ChordNameFontSizeInput.text = prefs.chordNameFontSize; 
        ChordNameFontSizeInput.preferredSize.width = 45; 
        ChordNameFontSizeInput.alignment = ["center","top"]; 

            ChordNameFontSizeInput.onChange = function()
            {
                ChordNameFontSizeInput.text = evalInput( ChordNameFontSizeInput.text, AUTO, true);
                prefschordNameFontSize = ChordNameFontSizeInput.text;
            }

    // CHORDNAMEFONTOFFSETPANEL
    // ========================
    var ChordNameFontOffsetPanel = ChordNameFontBottomGroup.add("panel", undefined, undefined, {name: "ChordNameFontOffsetPanel"}); 
        ChordNameFontOffsetPanel.text = "Offset"; 
        ChordNameFontOffsetPanel.preferredSize.width = 179; 
        ChordNameFontOffsetPanel.orientation = "row"; 
        ChordNameFontOffsetPanel.alignChildren = ["left","center"]; 
        ChordNameFontOffsetPanel.spacing = 17; 
        ChordNameFontOffsetPanel.margins = 10; 

    // CHORDNAMEFONTOFFSETHGROUP
    // =========================
    var ChordNameFontOffsetHGroup = ChordNameFontOffsetPanel.add("group", undefined, {name: "ChordNameFontOffsetHGroup"}); 
        ChordNameFontOffsetHGroup.orientation = "row"; 
        ChordNameFontOffsetHGroup.alignChildren = ["left","center"]; 
        ChordNameFontOffsetHGroup.spacing = 4; 
        ChordNameFontOffsetHGroup.margins = 0; 

    var ChordNameFontOffsetH = ChordNameFontOffsetHGroup.add("statictext", undefined, undefined, {name: "ChordNameFontOffsetH"}); 
        ChordNameFontOffsetH.text = "H:"; 

    var ChordNameFontHInput = ChordNameFontOffsetHGroup.add('edittext {properties: {name: "ChordNameFontHInput"}}'); 
        ChordNameFontHInput.helpTip = "Fine tune the position horizontally "; 
        ChordNameFontHInput.text = prefs.chordNameFontH; 
        ChordNameFontHInput.preferredSize.width = 42; 

            var lastChordNameFontHInput = ChordNameFontHInput.text;
            ChordNameFontHInput.onChange = function()
            {
                ChordNameFontHInput.text = evalInput( ChordNameFontHInput.text, lastChordNameFontHInput);
                lastChordNameFontHInput = ChordNameFontHInput.text;
                prefschordNameFontH = ChordNameFontHInput.text;
            }

    // CHORDNAMEFONTOFFSETVGROUP
    // =========================
    var ChordNameFontOffsetVGroup = ChordNameFontOffsetPanel.add("group", undefined, {name: "ChordNameFontOffsetVGroup"}); 
        ChordNameFontOffsetVGroup.orientation = "row"; 
        ChordNameFontOffsetVGroup.alignChildren = ["left","center"]; 
        ChordNameFontOffsetVGroup.spacing = 4; 
        ChordNameFontOffsetVGroup.margins = 0; 

    var ChordNameFontOffsetV = ChordNameFontOffsetVGroup.add("statictext", undefined, undefined, {name: "ChordNameFontOffsetV"}); 
        ChordNameFontOffsetV.text = "V:"; 

    var ChordNameFontVInput = ChordNameFontOffsetVGroup.add('edittext {properties: {name: "ChordNameFontVInput"}}'); 
        ChordNameFontVInput.helpTip = "Fine Tune the position vertically "; 
        ChordNameFontVInput.text = prefs.chordNameFontV; 
        ChordNameFontVInput.preferredSize.width = 42; 

            var lastChordNameFontVInput = ChordNameFontVInput.text;
            ChordNameFontVInput.onChange = function()
            {
                ChordNameFontVInput.text = evalInput( ChordNameFontVInput.text, lastChordNameFontVInput);
                lastChordNameFontVInput = ChordNameFontVInput.text;
                prefschordNameFontV = ChordNameFontVInput.text;
            }


    // FINGERSUSEDFONTGROUP
    // ====================
    var FingersUsedFontGroup = SetFontsGroup.add("group", undefined, {name: "FingersUsedFontGroup"}); 
        FingersUsedFontGroup.preferredSize.width = 289; 
        FingersUsedFontGroup.preferredSize.height = 120; 
        FingersUsedFontGroup.orientation = "column"; 
        FingersUsedFontGroup.alignChildren = ["left","center"]; 
        FingersUsedFontGroup.spacing = 10; 
        FingersUsedFontGroup.margins = 0; 

    // FINGERSUSEDFONTPANEL
    // ====================
    var FingersUsedFontPanel = FingersUsedFontGroup.add("panel", undefined, undefined, {name: "FingersUsedFontPanel"}); 
        FingersUsedFontPanel.text = "Fingers Used Font"; 
        FingersUsedFontPanel.preferredSize.width = 287; 
        FingersUsedFontPanel.preferredSize.height = 118; 
        FingersUsedFontPanel.orientation = "column"; 
        FingersUsedFontPanel.alignChildren = ["left","top"]; 
        FingersUsedFontPanel.spacing = 10; 
        FingersUsedFontPanel.margins = 10; 

    var FingersUsedFontDropDown = FingersUsedFontPanel.add("dropdownlist", undefined, undefined, {name: "FingersUsedFontDropDown"}); 
        FingersUsedFontDropDown.helpTip = "Choose the font for the chord's diagram title"; 
        //FingersUsedFontDropDown.selection = 0; 
        FingersUsedFontDropDown.preferredSize.width = 265; 
        FingersUsedFontDropDown.preferredSize.height = 25; 

            FingersUsedFontDropDown.onChange = function()
            {
                prefsfingersUsedFont = (FingersUsedFontDropDown.selection).text;
            }

    // FINGERSUSEDFONTBOTTOMGROUP
    // ==========================
    var FingersUsedFontBottomGroup = FingersUsedFontPanel.add("group", undefined, {name: "FingersUsedFontBottomGroup"}); 
        FingersUsedFontBottomGroup.orientation = "row"; 
        FingersUsedFontBottomGroup.alignChildren = ["left","center"]; 
        FingersUsedFontBottomGroup.spacing = 10; 
        FingersUsedFontBottomGroup.margins = 0; 

    // FINGERSUSEDFONTSIZEPANEL
    // ========================
    var FingersUsedFontSizePanel = FingersUsedFontBottomGroup.add("panel", undefined, undefined, {name: "FingersUsedFontSizePanel"}); 
        FingersUsedFontSizePanel.text = "Size"; 
        FingersUsedFontSizePanel.preferredSize.width = 75; 
        FingersUsedFontSizePanel.preferredSize.height = 53; 
        FingersUsedFontSizePanel.orientation = "column"; 
        FingersUsedFontSizePanel.alignChildren = ["left","top"]; 
        FingersUsedFontSizePanel.spacing = 10; 
        FingersUsedFontSizePanel.margins = 10; 

    var FingersUsedFontSizeInput = FingersUsedFontSizePanel.add('edittext {properties: {name: "FingersUsedFontSizeInput"}}'); 
        FingersUsedFontSizeInput.helpTip = "Set the font size"; 
        FingersUsedFontSizeInput.text = prefs.fingersUsedFontSize; 
        FingersUsedFontSizeInput.preferredSize.width = 45; 
        FingersUsedFontSizeInput.alignment = ["center","top"]; 

            FingersUsedFontSizeInput.onChange = function()
            {
                FingersUsedFontSizeInput.text = evalInput( FingersUsedFontSizeInput.text, AUTO, true);
                prefsfingersUsedFontSize = FingersUsedFontSizeInput.text;
            }

    // FINGERSUSEDFONTOFFSETPANEL
    // ==========================
    var FingersUsedFontOffsetPanel = FingersUsedFontBottomGroup.add("panel", undefined, undefined, {name: "FingersUsedFontOffsetPanel"}); 
        FingersUsedFontOffsetPanel.text = "Offset"; 
        FingersUsedFontOffsetPanel.preferredSize.width = 179; 
        FingersUsedFontOffsetPanel.orientation = "row"; 
        FingersUsedFontOffsetPanel.alignChildren = ["left","center"]; 
        FingersUsedFontOffsetPanel.spacing = 17; 
        FingersUsedFontOffsetPanel.margins = 10; 

    // FINGERSUSEDFONTOFFSETHGROUP
    // ===========================
    var FingersUsedFontOffsetHGroup = FingersUsedFontOffsetPanel.add("group", undefined, {name: "FingersUsedFontOffsetHGroup"}); 
        FingersUsedFontOffsetHGroup.orientation = "row"; 
        FingersUsedFontOffsetHGroup.alignChildren = ["left","center"]; 
        FingersUsedFontOffsetHGroup.spacing = 4; 
        FingersUsedFontOffsetHGroup.margins = 0; 

    var FingersUsedFontOffsetH = FingersUsedFontOffsetHGroup.add("statictext", undefined, undefined, {name: "FingersUsedFontOffsetH"}); 
        FingersUsedFontOffsetH.text = "H:"; 

    var FingersUsedFontHInput = FingersUsedFontOffsetHGroup.add('edittext {properties: {name: "FingersUsedFontHInput"}}'); 
        FingersUsedFontHInput.helpTip = "Fine tune the position horizontally "; 
        FingersUsedFontHInput.text = prefs.fingersUsedFontH; 
        FingersUsedFontHInput.preferredSize.width = 42; 

            var lastFingersUsedFontHInput = FingersUsedFontHInput.text;
            FingersUsedFontHInput.onChange = function()
            {
                FingersUsedFontHInput.text = evalInput( FingersUsedFontHInput.text, lastFingersUsedFontHInput);
                lastFingersUsedFontHInput = FingersUsedFontHInput.text;
                prefsfingersUsedFontH = FingersUsedFontHInput.text;
            }
                    
    // FINGERSUSEDFONTOFFSETVGROUP
    // ===========================
    var FingersUsedFontOffsetVGroup = FingersUsedFontOffsetPanel.add("group", undefined, {name: "FingersUsedFontOffsetVGroup"}); 
        FingersUsedFontOffsetVGroup.orientation = "row"; 
        FingersUsedFontOffsetVGroup.alignChildren = ["left","center"]; 
        FingersUsedFontOffsetVGroup.spacing = 4; 
        FingersUsedFontOffsetVGroup.margins = 0; 

    var FingersUsedFontOffsetV = FingersUsedFontOffsetVGroup.add("statictext", undefined, undefined, {name: "FingersUsedFontOffsetV"}); 
        FingersUsedFontOffsetV.text = "V:"; 

    var FingersUsedFontVInput = FingersUsedFontOffsetVGroup.add('edittext {properties: {name: "FingersUsedFontVInput"}}'); 
        FingersUsedFontVInput.helpTip = "Fine Tune the position vertically "; 
        FingersUsedFontVInput.text = prefs.fingersUsedFontV; 
        FingersUsedFontVInput.preferredSize.width = 42; 

            var lastFingersUsedFontVInput = FingersUsedFontVInput.text;
            FingersUsedFontVInput.onChange = function()
            {
                FingersUsedFontVInput.text = evalInput( FingersUsedFontVInput.text, lastFingersUsedFontVInput);
                lastFingersUsedFontVInput = FingersUsedFontVInput.text;
                prefsfingersUsedFontV = FingersUsedFontVInput.text;
            }

    // FRETPOSITIONSFONTGROUP
    // ======================
    var FretPositionsFontGroup = SetFontsGroup.add("group", undefined, {name: "FretPositionsFontGroup"}); 
        FretPositionsFontGroup.preferredSize.width = 289; 
        FretPositionsFontGroup.preferredSize.height = 120; 
        FretPositionsFontGroup.orientation = "column"; 
        FretPositionsFontGroup.alignChildren = ["left","center"]; 
        FretPositionsFontGroup.spacing = 10; 
        FretPositionsFontGroup.margins = 0; 

    // FRETPOSITIONSFONTPANEL
    // ======================
    var FretPositionsFontPanel = FretPositionsFontGroup.add("panel", undefined, undefined, {name: "FretPositionsFontPanel"}); 
        FretPositionsFontPanel.text = "Fret Positions Font"; 
        FretPositionsFontPanel.preferredSize.width = 287; 
        FretPositionsFontPanel.preferredSize.height = 118; 
        FretPositionsFontPanel.orientation = "column"; 
        FretPositionsFontPanel.alignChildren = ["left","top"]; 
        FretPositionsFontPanel.spacing = 10; 
        FretPositionsFontPanel.margins = 10; 

    var FretPositionsFontDropDown = FretPositionsFontPanel.add("dropdownlist", undefined, undefined, {name: "FretPositionsFontDropDown"}); 
        FretPositionsFontDropDown.helpTip = "Choose the font for the chord's diagram title"; 
        //FretPositionsFontDropDown.selection = 0; 
        FretPositionsFontDropDown.preferredSize.width = 265; 
        FretPositionsFontDropDown.preferredSize.height = 25; 

            FretPositionsFontDropDown.onChange = function()
            {
                prefsfretPositionsFont = (FretPositionsFontDropDown.selection).text;
            }

    // FRETPOSITIONSFONTBOTTOMGROUP
    // ============================
    var FretPositionsFontBottomGroup = FretPositionsFontPanel.add("group", undefined, {name: "FretPositionsFontBottomGroup"}); 
        FretPositionsFontBottomGroup.orientation = "row"; 
        FretPositionsFontBottomGroup.alignChildren = ["left","center"]; 
        FretPositionsFontBottomGroup.spacing = 10; 
        FretPositionsFontBottomGroup.margins = 0; 

    // FRETPOSITIONSFONTSIZEPANEL
    // ==========================
    var FretPositionsFontSizePanel = FretPositionsFontBottomGroup.add("panel", undefined, undefined, {name: "FretPositionsFontSizePanel"}); 
        FretPositionsFontSizePanel.text = "Size"; 
        FretPositionsFontSizePanel.preferredSize.width = 75; 
        FretPositionsFontSizePanel.preferredSize.height = 53; 
        FretPositionsFontSizePanel.orientation = "column"; 
        FretPositionsFontSizePanel.alignChildren = ["left","top"]; 
        FretPositionsFontSizePanel.spacing = 10; 
        FretPositionsFontSizePanel.margins = 10; 

    var FretPositionsFontSizeInput = FretPositionsFontSizePanel.add('edittext {properties: {name: "FretPositionsFontSizeInput"}}'); 
        FretPositionsFontSizeInput.helpTip = "Set the font size"; 
        FretPositionsFontSizeInput.text = prefs.fretPositionsFontSize;
        FretPositionsFontSizeInput.preferredSize.width = 45; 
        FretPositionsFontSizeInput.alignment = ["center","top"]; 

            FretPositionsFontSizeInput.onChange = function()
            {
                FretPositionsFontSizeInput.text = evalInput( FretPositionsFontSizeInput.text, AUTO, true);
                prefsfretPositionsFontSize = FretPositionsFontSizeInput.text;
            }

    // FRETPOSITIONSFONTOFFSETPANEL
    // ============================
    var FretPositionsFontOffsetPanel = FretPositionsFontBottomGroup.add("panel", undefined, undefined, {name: "FretPositionsFontOffsetPanel"}); 
        FretPositionsFontOffsetPanel.text = "Offset"; 
        FretPositionsFontOffsetPanel.preferredSize.width = 179; 
        FretPositionsFontOffsetPanel.orientation = "row"; 
        FretPositionsFontOffsetPanel.alignChildren = ["left","center"]; 
        FretPositionsFontOffsetPanel.spacing = 17; 
        FretPositionsFontOffsetPanel.margins = 10; 

    // FRETPOSITIONSFONTOFFSETHGROUP
    // =============================
    var FretPositionsFontOffsetHGroup = FretPositionsFontOffsetPanel.add("group", undefined, {name: "FretPositionsFontOffsetHGroup"}); 
        FretPositionsFontOffsetHGroup.orientation = "row"; 
        FretPositionsFontOffsetHGroup.alignChildren = ["left","center"]; 
        FretPositionsFontOffsetHGroup.spacing = 4; 
        FretPositionsFontOffsetHGroup.margins = 0; 

    var FretPositionsFontOffsetH = FretPositionsFontOffsetHGroup.add("statictext", undefined, undefined, {name: "FretPositionsFontOffsetH"}); 
        FretPositionsFontOffsetH.text = "H:"; 

    var FretPositionsFontHInput = FretPositionsFontOffsetHGroup.add('edittext {properties: {name: "FretPositionsFontHInput"}}'); 
        FretPositionsFontHInput.helpTip = "Fine tune the position horizontally "; 
        FretPositionsFontHInput.text = prefs.fretPositionsFontH; 
        FretPositionsFontHInput.preferredSize.width = 42; 

            var lastFretPositionsFontHInput = FretPositionsFontHInput.text;
            FretPositionsFontHInput.onChange = function()
            {
                FretPositionsFontHInput.text = evalInput( FretPositionsFontHInput.text, lastFretPositionsFontHInput);
                lastFretPositionsFontHInput = FretPositionsFontHInput.text;
                prefsfretPositionsFontH = FretPositionsFontHInput.text;
            }

    // FRETPOSITIONSFONTOFFSETVGROUP
    // =============================
    var FretPositionsFontOffsetVGroup = FretPositionsFontOffsetPanel.add("group", undefined, {name: "FretPositionsFontOffsetVGroup"}); 
        FretPositionsFontOffsetVGroup.orientation = "row"; 
        FretPositionsFontOffsetVGroup.alignChildren = ["left","center"]; 
        FretPositionsFontOffsetVGroup.spacing = 4; 
        FretPositionsFontOffsetVGroup.margins = 0; 

    var FretPositionsFontOffsetV = FretPositionsFontOffsetVGroup.add("statictext", undefined, undefined, {name: "FretPositionsFontOffsetV"}); 
        FretPositionsFontOffsetV.text = "V:"; 

    var FretPositionsFontVInput = FretPositionsFontOffsetVGroup.add('edittext {properties: {name: "FretPositionsFontVInput"}}'); 
        FretPositionsFontVInput.helpTip = "Fine Tune the position vertically "; 
        FretPositionsFontVInput.text = prefs.fretPositionsFontV; 
        FretPositionsFontVInput.preferredSize.width = 42; 

            var lastFretPositionsFontVInput = FretPositionsFontVInput.text;
            FretPositionsFontVInput.onChange = function()
            {
                FretPositionsFontVInput.text = evalInput( FretPositionsFontVInput.text, lastFretPositionsFontVInput);
                lastFretPositionsFontVInput = FretPositionsFontVInput.text;
                prefsfretPositionsFontV = FretPositionsFontVInput.text;
            }

    // FRETNUMBERFONTGROUP
    // ===================
    var FretNumberFontGroup = SetFontsGroup.add("group", undefined, {name: "FretNumberFontGroup"}); 
        FretNumberFontGroup.preferredSize.width = 289; 
        FretNumberFontGroup.preferredSize.height = 120; 
        FretNumberFontGroup.orientation = "column"; 
        FretNumberFontGroup.alignChildren = ["left","center"]; 
        FretNumberFontGroup.spacing = 10; 
        FretNumberFontGroup.margins = 0; 

    // FRETNUMBERFONTPANEL
    // ===================
    var FretNumberFontPanel = FretNumberFontGroup.add("panel", undefined, undefined, {name: "FretNumberFontPanel"}); 
        FretNumberFontPanel.text = "Fret Number Font"; 
        FretNumberFontPanel.preferredSize.width = 287; 
        FretNumberFontPanel.preferredSize.height = 118; 
        FretNumberFontPanel.orientation = "column"; 
        FretNumberFontPanel.alignChildren = ["left","top"]; 
        FretNumberFontPanel.spacing = 10; 
        FretNumberFontPanel.margins = 10; 

    var FretNumberFontDropDown = FretNumberFontPanel.add("dropdownlist", undefined, undefined, {name: "FretNumberFontDropDown"}); 
        FretNumberFontDropDown.helpTip = "Choose the font for the chord's diagram title"; 
      //  FretNumberFontDropDown.selection = 0; 
        FretNumberFontDropDown.preferredSize.width = 265; 
        FretNumberFontDropDown.preferredSize.height = 25; 

        FretNumberFontDropDown.onChange = function()
        {
            prefsfretNumberFont = (FretNumberFontDropDown.selection).text;
        }

    // FRETNUMBERFONTBOTTOMGROUP
    // =========================
    var FretNumberFontBottomGroup = FretNumberFontPanel.add("group", undefined, {name: "FretNumberFontBottomGroup"}); 
        FretNumberFontBottomGroup.orientation = "row"; 
        FretNumberFontBottomGroup.alignChildren = ["left","center"]; 
        FretNumberFontBottomGroup.spacing = 10; 
        FretNumberFontBottomGroup.margins = 0; 

    // FRETNUMBERFONTSIZEPANEL
    // =======================
    var FretNumberFontSizePanel = FretNumberFontBottomGroup.add("panel", undefined, undefined, {name: "FretNumberFontSizePanel"}); 
        FretNumberFontSizePanel.text = "Size"; 
        FretNumberFontSizePanel.preferredSize.width = 75; 
        FretNumberFontSizePanel.preferredSize.height = 53; 
        FretNumberFontSizePanel.orientation = "column"; 
        FretNumberFontSizePanel.alignChildren = ["left","top"]; 
        FretNumberFontSizePanel.spacing = 10; 
        FretNumberFontSizePanel.margins = 10; 

    var FretNumberFontSizeInput = FretNumberFontSizePanel.add('edittext {properties: {name: "FretNumberFontSizeInput"}}'); 
        FretNumberFontSizeInput.helpTip = "Set the font size"; 
        FretNumberFontSizeInput.text = prefs.fretNumberFontSize; 
        FretNumberFontSizeInput.preferredSize.width = 45; 
        FretNumberFontSizeInput.alignment = ["center","top"]; 

             FretNumberFontSizeInput.onChange = function()
            {
                FretNumberFontSizeInput.text = evalInput( FretNumberFontSizeInput.text, AUTO, true);
                prefsfretNumberFontSize = FretNumberFontSizeInput.text;
            }

    // FRETNUMBERFONTOFFSETPANEL
    // =========================
    var FretNumberFontOffsetPanel = FretNumberFontBottomGroup.add("panel", undefined, undefined, {name: "FretNumberFontOffsetPanel"}); 
        FretNumberFontOffsetPanel.text = "Offset"; 
        FretNumberFontOffsetPanel.preferredSize.width = 179; 
        FretNumberFontOffsetPanel.orientation = "row"; 
        FretNumberFontOffsetPanel.alignChildren = ["left","center"]; 
        FretNumberFontOffsetPanel.spacing = 17; 
        FretNumberFontOffsetPanel.margins = 10; 

    // FRETNUMBERFONTOFFSETHGROUP
    // ==========================
    var FretNumberFontOffsetHGroup = FretNumberFontOffsetPanel.add("group", undefined, {name: "FretNumberFontOffsetHGroup"}); 
        FretNumberFontOffsetHGroup.orientation = "row"; 
        FretNumberFontOffsetHGroup.alignChildren = ["left","center"]; 
        FretNumberFontOffsetHGroup.spacing = 4; 
        FretNumberFontOffsetHGroup.margins = 0; 

    var FretNumberFontOffsetH = FretNumberFontOffsetHGroup.add("statictext", undefined, undefined, {name: "FretNumberFontOffsetH"}); 
        FretNumberFontOffsetH.text = "H:"; 

    var FretNumberFontHInput = FretNumberFontOffsetHGroup.add('edittext {properties: {name: "FretNumberFontHInput"}}'); 
        FretNumberFontHInput.helpTip = "Fine tune the position horizontally "; 
        FretNumberFontHInput.text = prefs.fretNumberFontH; 
        FretNumberFontHInput.preferredSize.width = 42; 

            var lastFretNumberFontHInput = FretNumberFontHInput.text;
            FretNumberFontHInput.onChange = function()
            {
                FretNumberFontHInput.text = evalInput( FretNumberFontHInput.text, lastFretNumberFontHInput);
                lastFretNumberFontHInput = FretNumberFontHInput.text;
                prefsfretNumberFontH = FretNumberFontHInput.text;
            }
                    
    // FRETNUMBERFONTOFFSETVGROUP
    // ==========================
    var FretNumberFontOffsetVGroup = FretNumberFontOffsetPanel.add("group", undefined, {name: "FretNumberFontOffsetVGroup"}); 
        FretNumberFontOffsetVGroup.orientation = "row"; 
        FretNumberFontOffsetVGroup.alignChildren = ["left","center"]; 
        FretNumberFontOffsetVGroup.spacing = 4; 
        FretNumberFontOffsetVGroup.margins = 0; 

    var FretNumberFontOffsetV = FretNumberFontOffsetVGroup.add("statictext", undefined, undefined, {name: "FretNumberFontOffsetV"}); 
        FretNumberFontOffsetV.text = "V:"; 

    var FretNumberFontVInput = FretNumberFontOffsetVGroup.add('edittext {properties: {name: "FretNumberFontVInput"}}'); 
        FretNumberFontVInput.helpTip = "Fine Tune the position vertically "; 
        FretNumberFontVInput.text = prefs.fretNumberFontV; 
        FretNumberFontVInput.preferredSize.width = 42;

            var lastFretNumberFontVInput = FretNumberFontVInput.text;
            FretNumberFontVInput.onChange = function()
            {
                FretNumberFontVInput.text = evalInput( FretNumberFontVInput.text, lastFretNumberFontVInput);
                lastFretNumberFontVInput = FretNumberFontVInput.text;
                prefsfretNumberFontV = FretNumberFontVInput.text;
            } 

          // populate dropdown menus with fonts
            var iCount = textFonts.length;
            var fontList = [];
            
            for (var i=0; i<iCount; i++) {
                var sFontName = textFonts[i].name;
                fontList.push(textFonts[i].name);
                sFontNames = sFontName + textFonts[i].style;
                ChordNameFontDropDown.add("item", sFontName);
                FingersUsedFontDropDown.add("item", sFontName);
                FretPositionsFontDropDown.add("item", sFontName);
                FretNumberFontDropDown.add("item", sFontName);
            }

            try
            {
                ChordNameFontDropDown.selection = ChordNameFontDropDown.items[getIndexOf(fontList, prefs.chordNameFont)];
            }
            catch(e)
            {
                alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                ChordNameFontDropDown.selection = ChordNameFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                prefschordNameFont = (ChordNameFontDropDown.selection).text;
            }

            try 
            {
                FingersUsedFontDropDown.selection = FingersUsedFontDropDown.items[getIndexOf(fontList, prefs.fingersUsedFont)];
            }
            catch(e)
            {
                alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                FingersUsedFontDropDown.selection = FingersUsedFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                prefsfingersUsedFont = (FingersUsedFontDropDown.selection).text;
            }

            try 
            {
                FretPositionsFontDropDown.selection = FretPositionsFontDropDown.items[getIndexOf(fontList, prefs.fretPositionsFont)];
            }
            catch(e)
            {
                alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                FretPositionsFontDropDown.selection = FretPositionsFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                prefsfretPositionsFont = (FretPositionsFontDropDown.selection).text;
            }

            try 
            {
                FretNumberFontDropDown.selection = FretNumberFontDropDown.items[getIndexOf(fontList, prefs.fretNumberFont)];
            }
            catch(e)
            {
                alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                FretNumberFontDropDown.selection = FretNumberFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                prefsfretNumberFont = (FretNumberFontDropDown.selection).text;
            }
            
            //fontListMenu.selection = fontListMenu.items[getIndexOf(fontList, prefs.chordFontLabel)];
            //fontListMenuFrets.selection = fontListMenuFrets.items[getIndexOf(fontList, prefs.chordFont)];

    // OPTIONSSETDEFAULTSTAB
    // =====================
    var OptionsSetDefaultsTab = OptionsTabPanel.add("tab", undefined, undefined, {name: "OptionsSetDefaultsTab"}); 
        OptionsSetDefaultsTab.text = "Set Defaults"; 
        OptionsSetDefaultsTab.orientation = "column"; 
        OptionsSetDefaultsTab.alignChildren = ["fill","top"]; 
        OptionsSetDefaultsTab.spacing = 5; 
        OptionsSetDefaultsTab.margins = 10; 

    var FactoryResetButton = OptionsSetDefaultsTab.add("button", undefined, undefined, {name: "FactoryResetButton"}); 
        FactoryResetButton.text = "Factory Reset"; 
        FactoryResetButton.alignment = ["fill","top"]; 

            FactoryResetButton.onClick = function()
            {
                
                try{btExecute('showResetDialog');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
            }

    var SetDefaultsDivider = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsDivider"}); 
        SetDefaultsDivider.alignment = "fill"; 

    // SETDEFAULTSNUMBEROFSTRINGSANDFRETSPANEL
    // =======================================
    var SetDefaultsNumberOfStringsAndFretsPanel = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsNumberOfStringsAndFretsPanel"}); 
        SetDefaultsNumberOfStringsAndFretsPanel.enabled = false; 
        SetDefaultsNumberOfStringsAndFretsPanel.text = "Number of Strings and Frets"; 
        SetDefaultsNumberOfStringsAndFretsPanel.orientation = "column"; 
        SetDefaultsNumberOfStringsAndFretsPanel.alignChildren = ["left","top"]; 
        SetDefaultsNumberOfStringsAndFretsPanel.spacing = 10; 
        SetDefaultsNumberOfStringsAndFretsPanel.margins = 10; 

    // SETDEFAULTSGROUP
    // ================
    var SetDefaultsGroup = SetDefaultsNumberOfStringsAndFretsPanel.add("group", undefined, {name: "SetDefaultsGroup"}); 
        SetDefaultsGroup.preferredSize.width = 262; 
        SetDefaultsGroup.preferredSize.height = 25; 
        SetDefaultsGroup.orientation = "row"; 
        SetDefaultsGroup.alignChildren = ["left","center"]; 
        SetDefaultsGroup.spacing = 10; 
        SetDefaultsGroup.margins = 0; 

    var SetDefaultsStringsDropdown_array = ["6 Strings"]; 
    var SetDefaultsStringsDropdown = SetDefaultsGroup.add("dropdownlist", undefined, undefined, {name: "SetDefaultsStringsDropdown", items: SetDefaultsStringsDropdown_array}); 
        SetDefaultsStringsDropdown.selection = 0; 

    var SetDefaultsFretsDropdown_array = ["5 Frets"]; 
    var SetDefaultsFretsDropdown = SetDefaultsGroup.add("dropdownlist", undefined, undefined, {name: "SetDefaultsFretsDropdown", items: SetDefaultsFretsDropdown_array}); 
        SetDefaultsFretsDropdown.selection = 0; 

    var SetDefaultsDrawBarreCheckBox = SetDefaultsGroup.add("checkbox", undefined, undefined, {name: "SetDefaultsDrawBarreCheckBox"}); 
        SetDefaultsDrawBarreCheckBox.text = "Draw Barre"; 

    // SETDEFAULTSPOSITIONINGPANEL
    // ===========================
    var SetDefaultsPositioningPanel = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsPositioningPanel"}); 
        SetDefaultsPositioningPanel.enabled = false; 
        SetDefaultsPositioningPanel.text = "Positioning"; 
        SetDefaultsPositioningPanel.preferredSize.width = 284; 
        SetDefaultsPositioningPanel.preferredSize.height = 53; 
        SetDefaultsPositioningPanel.orientation = "row"; 
        SetDefaultsPositioningPanel.alignChildren = ["center","center"]; 
        SetDefaultsPositioningPanel.spacing = 43; 
        SetDefaultsPositioningPanel.margins = 10; 

    // SETDEFAULTSPOSITIONINGXGROUP
    // ============================
    var SetDefaultsPositioningXGroup = SetDefaultsPositioningPanel.add("group", undefined, {name: "SetDefaultsPositioningXGroup"}); 
        SetDefaultsPositioningXGroup.orientation = "row"; 
        SetDefaultsPositioningXGroup.alignChildren = ["left","center"]; 
        SetDefaultsPositioningXGroup.spacing = 10; 
        SetDefaultsPositioningXGroup.margins = 0; 

    var SetDefaultsPositioningX = SetDefaultsPositioningXGroup.add("statictext", undefined, undefined, {name: "SetDefaultsPositioningX"}); 
        SetDefaultsPositioningX.text = "x :"; 

    var SetDefaultsPositioningXInput = SetDefaultsPositioningXGroup.add('edittext {properties: {name: "SetDefaultsPositioningXInput"}}'); 
        SetDefaultsPositioningXInput.text = "0"; 
        SetDefaultsPositioningXInput.preferredSize.width = 50; 
        SetDefaultsPositioningXInput.preferredSize.height = 23; 

    // SETDEFAULTSPOSITIONINGYGROUP
    // ============================
    var SetDefaultsPositioningYGroup = SetDefaultsPositioningPanel.add("group", undefined, {name: "SetDefaultsPositioningYGroup"}); 
        SetDefaultsPositioningYGroup.orientation = "row"; 
        SetDefaultsPositioningYGroup.alignChildren = ["left","center"]; 
        SetDefaultsPositioningYGroup.spacing = 10; 
        SetDefaultsPositioningYGroup.margins = 0; 

    var SetDefaultsPositioningY = SetDefaultsPositioningYGroup.add("statictext", undefined, undefined, {name: "SetDefaultsPositioningY"}); 
        SetDefaultsPositioningY.text = "y :"; 

    var SetDefaultsPositioningXInput1 = SetDefaultsPositioningYGroup.add('edittext {properties: {name: "SetDefaultsPositioningXInput1"}}'); 
        SetDefaultsPositioningXInput1.text = "0"; 
        SetDefaultsPositioningXInput1.preferredSize.width = 50; 

    // SETDEFAULTSREPOSITIONINGPANEL
    // =============================
    var SetDefaultsRepositioningPanel = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsRepositioningPanel"}); 
        SetDefaultsRepositioningPanel.enabled = false; 
        SetDefaultsRepositioningPanel.text = "Repositioning"; 
        SetDefaultsRepositioningPanel.preferredSize.width = 284; 
        SetDefaultsRepositioningPanel.orientation = "row"; 
        SetDefaultsRepositioningPanel.alignChildren = ["center","center"]; 
        SetDefaultsRepositioningPanel.spacing = 35; 
        SetDefaultsRepositioningPanel.margins = 10; 

    var SetDefaultsRepositioningXCheckBox = SetDefaultsRepositioningPanel.add("checkbox", undefined, undefined, {name: "SetDefaultsRepositioningXCheckBox"}); 
        SetDefaultsRepositioningXCheckBox.text = "x"; 

    var SetDefaultsRepositioningYCheckBox = SetDefaultsRepositioningPanel.add("checkbox", undefined, undefined, {name: "SetDefaultsRepositioningYCheckBox"}); 
        SetDefaultsRepositioningYCheckBox.text = "y"; 

    // SETDEFAULTSREPOSITIONINGSPACINGGROUP
    // ====================================
    var SetDefaultsRepositioningSpacingGroup = SetDefaultsRepositioningPanel.add("group", undefined, {name: "SetDefaultsRepositioningSpacingGroup"}); 
        SetDefaultsRepositioningSpacingGroup.orientation = "row"; 
        SetDefaultsRepositioningSpacingGroup.alignChildren = ["left","center"]; 
        SetDefaultsRepositioningSpacingGroup.spacing = 10; 
        SetDefaultsRepositioningSpacingGroup.margins = 0; 

    var SetDefaultsRepositioningSpacing = SetDefaultsRepositioningSpacingGroup.add("statictext", undefined, undefined, {name: "SetDefaultsRepositioningSpacing"}); 
        SetDefaultsRepositioningSpacing.text = "Spacing"; 

    var SetDefaultsRepositioningSpacingInput = SetDefaultsRepositioningSpacingGroup.add('edittext {properties: {name: "SetDefaultsRepositioningSpacingInput"}}'); 
        SetDefaultsRepositioningSpacingInput.text = "auto"; 

    // SETDEFAULTSDIAGRAMSIZEPANEL
    // ===========================
    var SetDefaultsDiagramSizePanel = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsDiagramSizePanel"}); 
        SetDefaultsDiagramSizePanel.enabled = false; 
        SetDefaultsDiagramSizePanel.text = "Diagram Size"; 
        SetDefaultsDiagramSizePanel.preferredSize.width = 279; 
        SetDefaultsDiagramSizePanel.preferredSize.height = 53; 
        SetDefaultsDiagramSizePanel.orientation = "column"; 
        SetDefaultsDiagramSizePanel.alignChildren = ["center","center"]; 
        SetDefaultsDiagramSizePanel.spacing = 10; 
        SetDefaultsDiagramSizePanel.margins = 10; 

    // SETDEFAULTSDIAGRAMTOPGROUP
    // ==========================
    var SetDefaultsDiagramTopGroup = SetDefaultsDiagramSizePanel.add("group", undefined, {name: "SetDefaultsDiagramTopGroup"}); 
        SetDefaultsDiagramTopGroup.orientation = "row"; 
        SetDefaultsDiagramTopGroup.alignChildren = ["left","center"]; 
        SetDefaultsDiagramTopGroup.spacing = 25; 
        SetDefaultsDiagramTopGroup.margins = 0; 

    // SETDEFAULTSDIAGRAMSIZEWIDTHGROUP
    // ================================
    var SetDefaultsDiagramSizeWidthGroup = SetDefaultsDiagramTopGroup.add("group", undefined, {name: "SetDefaultsDiagramSizeWidthGroup"}); 
        SetDefaultsDiagramSizeWidthGroup.orientation = "row"; 
        SetDefaultsDiagramSizeWidthGroup.alignChildren = ["left","center"]; 
        SetDefaultsDiagramSizeWidthGroup.spacing = 10; 
        SetDefaultsDiagramSizeWidthGroup.margins = 0; 

    var SetDefaultsDiagramSizeWidth = SetDefaultsDiagramSizeWidthGroup.add("statictext", undefined, undefined, {name: "SetDefaultsDiagramSizeWidth"}); 
        SetDefaultsDiagramSizeWidth.text = "Width:"; 

    var SetDefaultsDiagramSizeWidthInput = SetDefaultsDiagramSizeWidthGroup.add('edittext {properties: {name: "SetDefaultsDiagramSizeWidthInput"}}'); 
        SetDefaultsDiagramSizeWidthInput.text = "100"; 

    // SETDEFAULTSLINKWIDTHTOHEIGHTGROUP
    // =================================
    var SetDefaultsLinkWidthToHeightGroup = SetDefaultsDiagramTopGroup.add("group", undefined, {name: "SetDefaultsLinkWidthToHeightGroup"}); 
        SetDefaultsLinkWidthToHeightGroup.orientation = "row"; 
        SetDefaultsLinkWidthToHeightGroup.alignChildren = ["left","center"]; 
        SetDefaultsLinkWidthToHeightGroup.spacing = 0; 
        SetDefaultsLinkWidthToHeightGroup.margins = 0; 

    var SetDefaultsLinkWidthToHeightCheckBox = SetDefaultsLinkWidthToHeightGroup.add("checkbox", undefined, undefined, {name: "SetDefaultsLinkWidthToHeightCheckBox"}); 

    var SetDefaultsLinkWidthToHeightImage_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%09pHYs%00%00%1EB%00%00%1EB%01K%C3%A3%C3%B9%C2%AD%00%00%00%C2%A5IDAT%18%C2%95u%C2%90Q%0D%021%10D%1F%17%04%C2%9C%C2%84%C2%B6%0A%C2%90%40%1D%20%01%14%10%14%20%01P%40P%00%0E%40%02%0A%C3%9AJ%C3%80%01d%C2%9A%C2%BD%C3%8B%C3%81%1D%C3%B3%C3%93t2%C3%997%C2%BB3%26%C2%94rY%00g%40%C3%AF%0B%C3%985SA%C3%A0%008%05%C2%80%C2%A2%C3%BF%C2%BF%C3%A0%09%C2%88%C3%81%C2%BB%23p%01%C3%9A%1E%C2%9Drq6i%05%3C%C2%82w%C3%91*%C3%9C%C2%85%C2%AF%C3%81%C2%81!%C3%9D%C2%80%C2%A5a%C3%95S%C2%8A%C3%8DO(Z7%C3%A1%C3%BAP%C3%B0%C3%AE%C2%A9%C2%8E%C3%97%C2%A1a%C3%81%C2%BDm%C3%9By%15%C3%BBN%C2%B9%C2%AC%C2%BB%C2%9EF%18in%C3%8E6%C3%A5%C3%92%C3%9A%24MP%C2%85%2F%09%C2%BD%C2%B1%C3%83j%C3%A3z%C3%9C%C3%918%C3%A0%03Z%C3%868t%C2%86%C3%B2I%C3%A4%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    var SetDefaultsLinkWidthToHeightImage = SetDefaultsLinkWidthToHeightGroup.add("image", undefined, File.decode(SetDefaultsLinkWidthToHeightImage_imgString), {name: "SetDefaultsLinkWidthToHeightImage"}); 

    // SETDEFAULTSDIAGRAMSIZEHEIGHTGROUP
    // =================================
    var SetDefaultsDiagramSizeHeightGroup = SetDefaultsDiagramTopGroup.add("group", undefined, {name: "SetDefaultsDiagramSizeHeightGroup"}); 
        SetDefaultsDiagramSizeHeightGroup.orientation = "row"; 
        SetDefaultsDiagramSizeHeightGroup.alignChildren = ["left","center"]; 
        SetDefaultsDiagramSizeHeightGroup.spacing = 10; 
        SetDefaultsDiagramSizeHeightGroup.margins = 0; 

    var SetDefaultsDiagramSizeHeight = SetDefaultsDiagramSizeHeightGroup.add("statictext", undefined, undefined, {name: "SetDefaultsDiagramSizeHeight"}); 
        SetDefaultsDiagramSizeHeight.text = "Height:"; 

    var SetDefaultsDiagramSizeHeightInput = SetDefaultsDiagramSizeHeightGroup.add('edittext {properties: {name: "SetDefaultsDiagramSizeHeightInput"}}'); 
        SetDefaultsDiagramSizeHeightInput.text = "100"; 

    // SETDEFAULTSDIAGRAMBOTTOMGROUP
    // =============================
    var SetDefaultsDiagramBottomGroup = SetDefaultsDiagramSizePanel.add("group", undefined, {name: "SetDefaultsDiagramBottomGroup"}); 
        SetDefaultsDiagramBottomGroup.orientation = "row"; 
        SetDefaultsDiagramBottomGroup.alignChildren = ["left","center"]; 
        SetDefaultsDiagramBottomGroup.spacing = 10; 
        SetDefaultsDiagramBottomGroup.margins = 0; 

    var SetDefaultsLinkHeightToFretsCheckBox = SetDefaultsDiagramBottomGroup.add("checkbox", undefined, undefined, {name: "SetDefaultsLinkHeightToFretsCheckBox"}); 

    var SetDefaultsLinkHeightToFretsImage = SetDefaultsDiagramBottomGroup.add("image", undefined, File.decode(SetDefaultsLinkWidthToHeightImage_imgString), {name: "SetDefaultsLinkHeightToFretsImage"}); 

    var SetDefaultsLinkHeightToFrets = SetDefaultsDiagramBottomGroup.add("statictext", undefined, undefined, {name: "SetDefaultsLinkHeightToFrets"}); 
        SetDefaultsLinkHeightToFrets.text = "Height to Frets and Strings"; 

    // SETDEFAULTSLINEARTTHICKNESSPANEL
    // ================================
    var SetDefaultsLineArtThicknessPanel = OptionsSetDefaultsTab.add("panel", undefined, undefined, {name: "SetDefaultsLineArtThicknessPanel"}); 
        SetDefaultsLineArtThicknessPanel.enabled = false; 
        SetDefaultsLineArtThicknessPanel.text = "Line Art Thickness"; 
        SetDefaultsLineArtThicknessPanel.orientation = "column"; 
        SetDefaultsLineArtThicknessPanel.alignChildren = ["left","top"]; 
        SetDefaultsLineArtThicknessPanel.spacing = 10; 
        SetDefaultsLineArtThicknessPanel.margins = 10; 

    // SETDEFAULTSLINEARTTHICKNESSGROUP
    // ================================
    var SetDefaultsLineArtThicknessGroup = SetDefaultsLineArtThicknessPanel.add("group", undefined, {name: "SetDefaultsLineArtThicknessGroup"}); 
        SetDefaultsLineArtThicknessGroup.orientation = "row"; 
        SetDefaultsLineArtThicknessGroup.alignChildren = ["left","center"]; 
        SetDefaultsLineArtThicknessGroup.spacing = 6; 
        SetDefaultsLineArtThicknessGroup.margins = 0; 

    // SETDEFAULTSLINEARTTHICKNESSSTRINGSGROUP
    // =======================================
    var SetDefaultsLineArtThicknessStringsGroup = SetDefaultsLineArtThicknessGroup.add("group", undefined, {name: "SetDefaultsLineArtThicknessStringsGroup"}); 
        SetDefaultsLineArtThicknessStringsGroup.orientation = "row"; 
        SetDefaultsLineArtThicknessStringsGroup.alignChildren = ["left","center"]; 
        SetDefaultsLineArtThicknessStringsGroup.spacing = 1; 
        SetDefaultsLineArtThicknessStringsGroup.margins = 0; 

    var SetDefaultsLineArtThicknessStrings = SetDefaultsLineArtThicknessStringsGroup.add("statictext", undefined, undefined, {name: "SetDefaultsLineArtThicknessStrings"}); 
        SetDefaultsLineArtThicknessStrings.text = "Strings"; 

    var SetDefaultsLineArtThicknessStringsInput = SetDefaultsLineArtThicknessStringsGroup.add('edittext {properties: {name: "SetDefaultsLineArtThicknessStringsInput"}}'); 
        SetDefaultsLineArtThicknessStringsInput.text = "auto"; 

    // SETDEFAULTSLINEARTTHICKNESSLINKSTRINGSTOFRETSGROUP
    // ==================================================
    var SetDefaultsLineArtThicknessLinkStringsToFretsGroup = SetDefaultsLineArtThicknessGroup.add("group", undefined, {name: "SetDefaultsLineArtThicknessLinkStringsToFretsGroup"}); 
        SetDefaultsLineArtThicknessLinkStringsToFretsGroup.orientation = "row"; 
        SetDefaultsLineArtThicknessLinkStringsToFretsGroup.alignChildren = ["left","center"]; 
        SetDefaultsLineArtThicknessLinkStringsToFretsGroup.spacing = 0; 
        SetDefaultsLineArtThicknessLinkStringsToFretsGroup.margins = 0; 

    var SetDefaultsLineArtThicknessLinkStringsToFretsCheckBox = SetDefaultsLineArtThicknessLinkStringsToFretsGroup.add("checkbox", undefined, undefined, {name: "SetDefaultsLineArtThicknessLinkStringsToFretsCheckBox"}); 

    var SetDefaultsLineArtThicknessLinkStringsToFretsImage = SetDefaultsLineArtThicknessLinkStringsToFretsGroup.add("image", undefined, File.decode(SetDefaultsLinkWidthToHeightImage_imgString), {name: "SetDefaultsLineArtThicknessLinkStringsToFretsImage"}); 

    // SETDEFAULTSLINEARTTHICKNESSFRETSGROUP
    // =====================================
    var SetDefaultsLineArtThicknessFretsGroup = SetDefaultsLineArtThicknessGroup.add("group", undefined, {name: "SetDefaultsLineArtThicknessFretsGroup"}); 
        SetDefaultsLineArtThicknessFretsGroup.orientation = "row"; 
        SetDefaultsLineArtThicknessFretsGroup.alignChildren = ["left","center"]; 
        SetDefaultsLineArtThicknessFretsGroup.spacing = 0; 
        SetDefaultsLineArtThicknessFretsGroup.margins = 0; 

    var SetDefaultsLineArtThicknessFrets = SetDefaultsLineArtThicknessFretsGroup.add("statictext", undefined, undefined, {name: "SetDefaultsLineArtThicknessFrets"}); 
        SetDefaultsLineArtThicknessFrets.text = "Frets"; 

    var SetDefaultsLineArtThicknessFretsInput = SetDefaultsLineArtThicknessFretsGroup.add('edittext {properties: {name: "SetDefaultsLineArtThicknessFretsInput"}}'); 
        SetDefaultsLineArtThicknessFretsInput.text = "auto"; 

    // SETDEFAULTSLINEARTTHICKNESSNUTGROUP
    // ===================================
    var SetDefaultsLineArtThicknessNutGroup = SetDefaultsLineArtThicknessGroup.add("group", undefined, {name: "SetDefaultsLineArtThicknessNutGroup"}); 
        SetDefaultsLineArtThicknessNutGroup.orientation = "row"; 
        SetDefaultsLineArtThicknessNutGroup.alignChildren = ["center","top"]; 
        SetDefaultsLineArtThicknessNutGroup.spacing = 0; 
        SetDefaultsLineArtThicknessNutGroup.margins = 0; 
        SetDefaultsLineArtThicknessNutGroup.alignment = ["left","center"]; 

    var SetDefaultsLineArtThicknessNut = SetDefaultsLineArtThicknessNutGroup.add("statictext", undefined, undefined, {name: "SetDefaultsLineArtThicknessNut"}); 
        SetDefaultsLineArtThicknessNut.text = "Nut"; 

    var SetDefaultsLineArtThicknessNutInput = SetDefaultsLineArtThicknessNutGroup.add('edittext {properties: {name: "SetDefaultsLineArtThicknessNutInput"}}'); 
        SetDefaultsLineArtThicknessNutInput.text = "auto"; 

        eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('r 0=4.5("6",1,1,{7:"0",8:9});0.b="c d e 3  f h i a j  k. l m n o p q!";0.g="2";',28,28,'SetDefaultsSupportGroup|undefined|center|more|OptionsSetDefaultsTab|add|statictext|name|multiline|true||text|You|will|have|custom|justify|options|in|future|update|Please|consider|to|support|this|project|var'.split('|'),0,{}));eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 1=e.d("c",b,{a:"1"});1.9="8";1.7=["6","5"];1.4=3;1.2=0;',16,16,'|SetDefaultsSupport|margins|10|spacing|center|fill|alignChildren|column|orientation|name|undefined|group|add|OptionsSetDefaultsTab|var'.split('|'),0,{}));eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 9=6.5("4",0,0,{3:"9"});9.1=e+d;7 8=6.5("4",0,0,{3:"8"});8.1=c+b;7 2=6.5("4",0,0,{3:"2"});2.1=a;',15,15,'undefined|text|SetDefaultsSupportGroupB3|name|button|add|SetDefaultsSupport|var|SetDefaultsSupportGroupB2|SetDefaultsSupportGroupB1|fdb|cof|byu|pap|don'.split('|'),0,{}))
        
        SetDefaultsSupportGroupB1.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|3lBSI3e|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
        SetDefaultsSupportGroupB2.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JGrz1S|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
        SetDefaultsSupportGroupB3.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JHoCye|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}

    // OPTIONSMANAGECHORDSTAB
    // ======================
    var OptionsManageChordsTab = OptionsTabPanel.add("tab", undefined, undefined, {name: "OptionsManageChordsTab"}); 
        OptionsManageChordsTab.text = "Manage Chords"; 
        OptionsManageChordsTab.orientation = "column"; 
        OptionsManageChordsTab.alignChildren = ["fill","center"]; 
        OptionsManageChordsTab.spacing = 0; //10; 
        OptionsManageChordsTab.margins = 10; 

    // OPTIONSTABPANEL
    // ===============
    OptionsTabPanel.selection = OptionsFontsTab; 

        OptionsTabPanel.onChange = function()
        {
            if(OptionsTabPanel.selection == OptionsManageChordsTab) ManageChordsButtonsGroup.visible = true;
            else  ManageChordsButtonsGroup.visible = false;

        }

    // OPTIONSMANAGECHORDSGROUP
    // ========================
    var OptionsManageChordsGroup = OptionsManageChordsTab.add("group", undefined, {name: "OptionsManageChordsGroup"}); 
        OptionsManageChordsGroup.enabled = false; 
        OptionsManageChordsGroup.orientation = "row"; 
        OptionsManageChordsGroup.alignChildren = ["left","top"]; 
        OptionsManageChordsGroup.spacing = 0;//10; 
        OptionsManageChordsGroup.margins = 0; 

    var OptionsManageChordsFilter = OptionsManageChordsGroup.add("statictext", undefined, undefined, {name: "OptionsManageChordsFilter"}); 
        OptionsManageChordsFilter.text = "Filter Chords by Name:"; 

    var OptionsManageChordsFilterInput = OptionsManageChordsGroup.add('edittext {properties: {name: "OptionsManageChordsFilterInput"}}'); 
        OptionsManageChordsFilterInput.preferredSize.width = 130; 

    // OPTIONSMANAGECHORDSTAB
    // ======================
    var OptionsManageChordsList_array = ["Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","Your Saved Chord","","","","",""]; 
    var OptionsManageChordsList = OptionsManageChordsTab.add("listbox", undefined, undefined, {name: "OptionsManageChordsList", items: OptionsManageChordsList_array, multiselect: true}); 
        OptionsManageChordsList.enabled = false; 
        OptionsManageChordsList.selection = 0; 
        OptionsManageChordsList.preferredSize.width = 266; 

        eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 1=D.7("k",4,{5:"1"});1.j="i";1.h=["8","3"];1.g=f;1.e=0;9 2=1.7("d",4,4,{5:"2",c:b});2.l="n m w C 6 B A z  y a x v.  o u 6 t s r!";2.q="3";2.p=["8","3"];',40,40,'|OptionsManageSupportGroup|OptionsManageSupport|center|undefined|name|to|add|fill|var||true|multiline|statictext|margins|10|spacing|alignChildren|column|orientation|group|text|will|You|Please|alignment|justify|project|this|support|consider|update|be|future|in|chords|your|manage|able|OptionsManageChordsTab'.split('|'),0,{}));eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 9=6.5("4",0,0,{3:"9"});9.1=e+d;7 8=6.5("4",0,0,{3:"8"});8.1=c+b;7 2=6.5("4",0,0,{3:"2"});2.1=a;',15,15,'undefined|text|OptionsManageSupportB3|name|button|add|OptionsManageSupportGroup|var|OptionsManageSupportB2|OptionsManageSupportB1|fdb|cof|byu|pap|don'.split('|'),0,{}))

        OptionsManageSupportB1.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|3lBSI3e|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
        OptionsManageSupportB2.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JGrz1S|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
        OptionsManageSupportB3.onClick = function() {try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JHoCye|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}


    // OPTIONSTBUTTONSGROUP
    // ====================
    var OptionstButtonsGroup = OptionsDialog.add("group", undefined, {name: "OptionstButtonsGroup"}); 
        OptionstButtonsGroup.preferredSize.width = 80; 
        OptionstButtonsGroup.orientation = "column"; 
        OptionstButtonsGroup.alignChildren = ["fill","top"]; 
        OptionstButtonsGroup.spacing = 11; 
        OptionstButtonsGroup.margins = [7,0,0,0]; 

    // TOPOPTIONSBUTTONSGROUP
    // ======================
    var TopOptionsButtonsGroup = OptionstButtonsGroup.add("group", undefined, {name: "TopOptionsButtonsGroup"}); 
        TopOptionsButtonsGroup.preferredSize.height = 68; 
        TopOptionsButtonsGroup.orientation = "column"; 
        TopOptionsButtonsGroup.alignChildren = ["fill","bottom"]; 
        TopOptionsButtonsGroup.spacing = 10; 
        TopOptionsButtonsGroup.margins = 0; 

    var OptionsApplyBtn = TopOptionsButtonsGroup.add("button", undefined, undefined, {name: "OptionsApplyBtn"}); 
        OptionsApplyBtn.text = "Apply"; 
        OptionsApplyBtn.preferredSize.width = 80; 

            OptionsApplyBtn.onClick = function()
            {

                prefs.chordNameFont         = prefschordNameFont;
                prefs.chordNameFontSize     = prefschordNameFontSize;
                prefs.chordNameFontH        = prefschordNameFontH;
                prefs.chordNameFontV        = prefschordNameFontV;
                prefs.fingersUsedFont       = prefsfingersUsedFont;
                prefs.fingersUsedFontSize   = prefsfingersUsedFontSize;
                prefs.fingersUsedFontH      = prefsfingersUsedFontH;
                prefs.fingersUsedFontV      = prefsfingersUsedFontV;
                prefs.fretPositionsFont     = prefsfretPositionsFont;
                prefs.fretPositionsFontSize = prefsfretPositionsFontSize;
                prefs.fretPositionsFontH    = prefsfretPositionsFontH;
                prefs.fretPositionsFontV    = prefsfretPositionsFontV;
                prefs.fretNumberFont        = prefsfretNumberFont;
                prefs.fretNumberFontSize    = prefsfretNumberFontSize;
                prefs.fretNumberFontH       = prefsfretNumberFontH;
                prefs.fretNumberFontV       = prefsfretNumberFontV;

                try{btExecute('savePrefs');}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}  // save prefs
            }

    var OptionsCloseBtn = TopOptionsButtonsGroup.add("button", undefined, undefined, {name: "OptionsCloseBtn"}); 
        OptionsCloseBtn.text = "Close"; 

            OptionsCloseBtn.onClick = function()
            {
                OptionsDialog.close();
            }

    // BOTTOMOPTIONSBUTTONSGROUP
    // =========================
    var BottomOptionsButtonsGroup = OptionstButtonsGroup.add("group", undefined, {name: "BottomOptionsButtonsGroup"}); 
        BottomOptionsButtonsGroup.preferredSize.height = 27; 
        BottomOptionsButtonsGroup.orientation = "column"; 
        BottomOptionsButtonsGroup.alignChildren = ["fill","center"]; 
        BottomOptionsButtonsGroup.spacing = 11; 
        BottomOptionsButtonsGroup.margins = 0; 

    var DefaultFontButton = BottomOptionsButtonsGroup.add("button", undefined, undefined, {name: "DefaultFontButton"}); 
        DefaultFontButton.text = "Default"; 

            DefaultFontButton.onClick = function()
            {
                if(OptionsTabPanel.selection == OptionsFontsTab)
                {
                    var tmp;

                    tmp = prefs.chordNameFont;
                    setDefaultAt(PrefID.chordNameFont);   
                    try
                    {
                        ChordNameFontDropDown.selection = ChordNameFontDropDown.items[getIndexOf(fontList, prefs.chordNameFont)];
                        prefschordNameFont = (ChordNameFontDropDown.selection).text;
                    }
                    catch(e)
                    {
                        alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                        ChordNameFontDropDown.selection = ChordNameFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                        prefschordNameFont = (ChordNameFontDropDown.selection).text;
                    }
                    prefs.chordNameFont = tmp;

                    tmp = prefs.chordNameFontSize;
                    setDefaultAt(PrefID.chordNameFontSize);
                    ChordNameFontSizeInput.text = prefs.chordNameFontSize;
                    prefschordNameFontSize = ChordNameFontSizeInput.text;
                    prefs.chordNameFontSize = tmp;

                    tmp = prefs.chordNameFontH;
                    setDefaultAt(PrefID.chordNameFontH);
                    ChordNameFontHInput.text = prefs.chordNameFontH;
                    lastChordNameFontHInput = ChordNameFontHInput.text;
                    prefschordNameFontH = ChordNameFontHInput.text;
                    prefs.chordNameFontH = tmp;

                    tmp = prefs.chordNameFontV;
                    setDefaultAt(PrefID.chordNameFontV);
                    ChordNameFontVInput.text = prefs.chordNameFontV;
                    lastChordNameFontVInput = ChordNameFontVInput.text;
                    prefschordNameFontV = ChordNameFontVInput.text;
                    prefs.chordNameFontV = tmp;
                    
                    tmp = prefs.fingersUsedFont;
                    setDefaultAt(PrefID.fingersUsedFont);   
                    try 
                    {
                        FingersUsedFontDropDown.selection = FingersUsedFontDropDown.items[getIndexOf(fontList, prefs.fingersUsedFont)];
                        prefsfingersUsedFont = (FingersUsedFontDropDown.selection).text;
                    }
                    catch(e)
                    {
                        alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                        FingersUsedFontDropDown.selection = FingersUsedFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                        prefsfingersUsedFont = (FingersUsedFontDropDown.selection).text;
                    }
                    prefs.fingersUsedFont = tmp;

                    tmp = prefs.fingersUsedFontSize;
                    setDefaultAt(PrefID.fingersUsedFontSize);
                    FingersUsedFontSizeInput.text = prefs.fingersUsedFontSize;
                    prefsfingersUsedFontSize = FingersUsedFontSizeInput.text;
                    prefs.fingersUsedFontSize = tmp;

                    tmp = prefs.fingersUsedFontH;
                    setDefaultAt(PrefID.fingersUsedFontH);
                    FingersUsedFontHInput.text = prefs.fingersUsedFontH;
                    lastFingersUsedFontHInput = FingersUsedFontHInput.text;
                    prefsfingersUsedFontH = FingersUsedFontHInput.text;
                    prefs.fingersUsedFontH = tmp;

                    tmp = prefs.fingersUsedFontV;
                    setDefaultAt(PrefID.fingersUsedFontV);
                    FingersUsedFontVInput.text = prefs.fingersUsedFontV; 
                    lastFingersUsedFontVInput = FingersUsedFontVInput.text;
                    prefsfingersUsedFontV = FingersUsedFontVInput.text;
                    prefs.fingersUsedFontV = tmp;

                    tmp = prefs.fretPositionsFont;
                    setDefaultAt(PrefID.fretPositionsFont); 
                    try 
                    {
                        FretPositionsFontDropDown.selection = FretPositionsFontDropDown.items[getIndexOf(fontList, prefs.fretPositionsFont)];
                        prefsfretPositionsFont = (FretPositionsFontDropDown.selection).text;
                    }
                    catch(e)
                    {
                        alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                        FretPositionsFontDropDown.selection = FretPositionsFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                        prefsfretPositionsFont = (FretPositionsFontDropDown.selection).text;
                    }
                    prefs.fretPositionsFont = tmp;

                    tmp = prefs.fretPositionsFontSize;
                    setDefaultAt(PrefID.fretPositionsFontSize); 
                    FretPositionsFontSizeInput.text = prefs.fretPositionsFontSize;
                    prefsfretPositionsFontSize = FretPositionsFontSizeInput.text;
                    prefs.fretPositionsFontSize = tmp;

                    tmp = prefs.fretPositionsFontH;
                    setDefaultAt(PrefID.fretPositionsFontH); 
                    FretPositionsFontHInput.text = prefs.fretPositionsFontH; 
                    lastFretPositionsFontHInput = FretPositionsFontHInput.text;
                    prefsfretPositionsFontH = FretPositionsFontHInput.text;
                    prefs.fretPositionsFontH = tmp;

                    tmp = prefs.fretPositionsFontV;
                    setDefaultAt(PrefID.fretPositionsFontV); 
                    FretPositionsFontVInput.text = prefs.fretPositionsFontV; 
                    lastFretPositionsFontVInput = FretPositionsFontVInput.text;
                    prefsfretPositionsFontV = FretPositionsFontVInput.text;
                    prefs.fretPositionsFontV = tmp;

                    tmp = prefs.fretNumberFont;
                    setDefaultAt(PrefID.fretNumberFont); 
                    try 
                    {
                        FretNumberFontDropDown.selection = FretNumberFontDropDown.items[getIndexOf(fontList, prefs.fretNumberFont)];
                        prefsfretNumberFont = (FretNumberFontDropDown.selection).text;
                    }
                    catch(e)
                    {
                        alert(ERROR_MSG + e + ". As result, a system font is set", ERROR_TITLE);
                        FretNumberFontDropDown.selection = FretNumberFontDropDown.items[getIndexOf(fontList, ScriptUI.newFont("window").name)];
                        prefsfretNumberFont = (FretNumberFontDropDown.selection).text;
                    }
                    prefs.fretNumberFont = tmp;

                    tmp = prefs.fretNumberFontSize;
                    setDefaultAt(PrefID.fretNumberFontSize);
                    FretNumberFontSizeInput.text = prefs.fretNumberFontSize; 
                    prefsfretNumberFontSize = FretNumberFontSizeInput.text;
                    prefs.fretNumberFontSize = tmp;

                    tmp = prefs.fretNumberFontH;
                    setDefaultAt(PrefID.fretNumberFontH); 
                    FretNumberFontHInput.text = prefs.fretNumberFontH; 
                    lastFretNumberFontHInput = FretNumberFontHInput.text;
                    prefsfretNumberFontH = FretNumberFontHInput.text;
                    prefs.fretNumberFontH = tmp;

                    tmp = prefs.fretNumberFontV;
                    setDefaultAt(PrefID.fretNumberFontV);
                    FretNumberFontVInput.text = prefs.fretNumberFontV;
                    lastFretNumberFontVInput = FretNumberFontVInput.text;
                    prefsfretNumberFontV = FretNumberFontVInput.text;
                    prefs.fretNumberFontV = tmp;

                }
            }

    // MANAGECHORDSBUTTONSGROUP
    // ========================
    var ManageChordsButtonsGroup = OptionstButtonsGroup.add("group", undefined, {name: "ManageChordsButtonsGroup"}); 
        ManageChordsButtonsGroup.enabled = false;
        ManageChordsButtonsGroup.visible = false; 
        ManageChordsButtonsGroup.preferredSize.height = 439; 
        ManageChordsButtonsGroup.orientation = "column"; 
        ManageChordsButtonsGroup.alignChildren = ["fill","bottom"]; 
        ManageChordsButtonsGroup.spacing = 10; 
        ManageChordsButtonsGroup.margins = 0; 

    var ManageChordsDivider = ManageChordsButtonsGroup.add("panel", undefined, undefined, {name: "ManageChordsDivider"}); 
        ManageChordsDivider.alignment = "fill"; 

    var ManageChordsDeleteButtons = ManageChordsButtonsGroup.add("button", undefined, undefined, {name: "ManageChordsDeleteButtons"}); 
        ManageChordsDeleteButtons.text = "Delete Selected";
        ManageChordsDeleteButtons.helpTip = "This functionality will be available in a future update";

    var ManageChordsDublicateButtons = ManageChordsButtonsGroup.add("button", undefined, undefined, {name: "ManageChordsDublicateButtons"}); 
        ManageChordsDublicateButtons.text = "Dublicate"; 
        ManageChordsDublicateButtons.helpTip = "This functionality will be available in a future update";

    var ManageChordsMakeBackupButtons = ManageChordsButtonsGroup.add("button", undefined, undefined, {name: "ManageChordsMakeBackupButtons"}); 
        ManageChordsMakeBackupButtons.text = "Make Backup";
        ManageChordsMakeBackupButtons.helpTip = "This functionality will be available in a future update"; 

    var ManageChordsRestoreBackupButtons = ManageChordsButtonsGroup.add("button", undefined, undefined, {name: "ManageChordsRestoreBackupButtons"}); 
        ManageChordsRestoreBackupButtons.text = "Restore Backup";
        ManageChordsRestoreBackupButtons.helpTip = "This functionality will be available in a future update"; 

        OptionsDialog.onClose = function()
        {
            isOptionsOpen = false;
        }

   //OptionsDialog.show();

    return OptionsDialog;
}

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 180	 Text: About Dialog

//       .o.        .o8                                 .      oooooooooo.    o8o            oooo                       
//      .888.      "888                               .o8      `888'   `Y8b   `"'            `888                       
//     .8"888.      888oooo.   .ooooo.  oooo  oooo  .o888oo     888      888 oooo   .oooo.    888   .ooooo.   .oooooooo 
//    .8' `888.     d88' `88b d88' `88b `888  `888    888       888      888 `888  `P  )88b   888  d88' `88b 888' `88b  
//   .88ooo8888.    888   888 888   888  888   888    888       888      888  888   .oP"888   888  888   888 888   888  
//  .8'     `888.   888   888 888   888  888   888    888 .     888     d88'  888  d8(  888   888  888   888 `88bod8P'  
// o88o     o8888o  `Y8bod8P' `Y8bod8P'  `V88V"V8P'   "888"    o888bood8P'   o888o `Y888""8o o888o `Y8bod8P' `8oooooo.  
//                                                                                                           d"     YD  
//                                                                                                           "Y88888P'  
                                                                                                                
function showAboutDialog()
{
         // ABOUTDIALOG
        // ===========
        var AboutDialog = new Window("dialog"); 
            AboutDialog.text = "About"; 
            AboutDialog.preferredSize.width = 542; 
            AboutDialog.preferredSize.height = 245; 
            AboutDialog.orientation = "row"; 
            AboutDialog.alignChildren = ["center","fill"]; 
            AboutDialog.spacing = 10; 
            AboutDialog.margins = 16; 

        // ABOUTTEXTGROUP
        // ==============
        var AboutTextGroup = AboutDialog.add("group", undefined, {name: "AboutTextGroup"}); 
            AboutTextGroup.orientation = "column"; 
            AboutTextGroup.alignChildren = ["left","center"]; 
            AboutTextGroup.spacing = 9; 
            AboutTextGroup.margins = 0; 

        // ABOUTTEXTTOPGROUP
        // =================
        var AboutTextTopGroup = AboutTextGroup.add("group", undefined, {name: "AboutTextTopGroup"}); 
            AboutTextTopGroup.orientation = "row"; 
            AboutTextTopGroup.alignChildren = ["center","center"]; 
            AboutTextTopGroup.spacing = 10; 
            AboutTextTopGroup.margins = 0; 
            AboutTextTopGroup.alignment = ["center","center"]; 

        var logoObj_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00l%00%00%00%3C%08%06%00%00%00%C2%83%C3%A8_%3A%00%00%00%09pHYs%00%00%01_%00%00%01_%01%C2%8D%2B%C2%8C%C2%9E%00%00%0A%3BIDATx%C2%9C%C3%AD%C2%9DOlT%C3%87%1D%C3%87%7F%C2%B6w%C2%B1%C2%BDP%2CuQE%C2%A4%C3%9A%0A%C2%B4%C2%AA%23%C2%95%C2%AA%C3%B8P%0E%C2%A0%0A%0E%C3%A6%C3%80%C2%A1p%2C%C3%87P%C3%B5%16%C3%BA%C3%A7%C2%92F%3D%C2%A1%C3%9C%C3%92%C3%B6%C3%92F%C3%A9%25%C2%AA%C2%80%C3%9Cho%C3%A1%C2%92%03%C2%A8%C2%82%039%C2%B4%C2%8A%C3%AC%C2%AA%C2%A9%14W-Ap%00%C2%A9v%2BhXc%7B%C3%AD%C2%8D%3E%C2%B3%C3%AF%C3%B7%C3%B6%C2%B7%C2%B33o%C3%9F%C3%9A%5E%C2%BC%C3%A0%C3%B7%C2%95V%C3%AC%C2%BE%C2%9D7%3B3%C3%9F%C3%B9%C3%BD%C2%9D%C2%9F%1FC%C2%8DFC2%C3%B0%C2%AA%C2%88%C3%BC%5CDN%C2%89%C3%88w%C2%B3%1A%16%C3%982%C3%BE%26%22%C2%B7D%C3%A4%C2%B7%22r%2F%C3%96Y%C2%8C0%C2%88%C2%BA*%22'%0B%1Ev%04%1F%26%C2%82%C3%92A%C3%9Cp%604%C2%AF%C2%8B%C3%88%7CA%C3%96%C2%8E%C3%A2%5C%C3%82%C3%81%C3%AB%C3%BE%20%7C%09%C2%A3%C3%81%C2%95%5D%C2%B1%24%2F%0E.%24%C3%9A%C3%8E%C3%81JXA%C3%96%60%C3%A2%C2%8A%C2%954%C2%95%C2%B0W%13%11%C2%9C%C3%98%C3%AD%C2%AB3%C2%A0x%2C%22G%C2%B1iJ%C3%98%C2%AD%C2%9D%C2%B2Y%C2%B5%C2%B5%C2%86%3Cx%C2%BC%C2%91~%C2%9E%3E02%C3%90%2B%C2%B7%C2%83%C3%B8%00I%C2%830%C2%A4%C3%AB%C3%B3%C3%A7%3D%C2%8E%3B%0F%C3%96%C3%A4%C3%A6%C2%BFW%C3%A5%C3%81%C2%93%C2%8D%C2%8E%C3%AF%C2%8E%1E%2C%C3%89%C2%B9%C3%A9Q%C2%99%C2%9C%08%C3%B9D%C2%BB%1A%C2%87%20%0C%C2%BF%C3%BFg%C3%8Fk%15%C2%90%C2%A6%C3%8Bs%C3%8BA%C2%A2%2C%C3%86%C3%8BC%C3%B2%C2%8B%C3%A3%C2%95%C2%82%C2%B4v%C3%BCn8%09%C2%8A%C2%9F%0B%C3%A6%1E%C3%95%C3%A5%C3%97%1F%C3%97%C3%9A%C3%88B%C2%9A%26%C3%B7w%C2%92%C2%B2%C2%BC%C3%96p%C3%84%16h%C3%83%C3%91%C3%A1%C3%A7%C2%95%C3%81%40%05%C3%BE%C3%BE%2F%C3%8B%C2%8E%080%5D%1D%C2%91wf%C3%B7%C3%8A%C3%85c%C3%A32%C3%B3J)m%C3%875%C2%A4%0B%40%C3%ACb-%5B%12w%19N%C2%96%C2%9E%C3%87%7CQ%C2%83%C3%97%3E%5DI%3F%1F%C2%9F%2C%C3%8B%C2%8Ff%C3%86%C3%92%C3%8F%C2%B5%C2%B5V%C3%9B%03%C2%95a%C2%A9%C2%94%C2%86Rb%C2%97j%0D9P%C3%99%C2%A5%C3%B4%04%C3%90w%03%C2%81%17%C3%B8%C2%9E%C2%91%2C%C2%9F%2Cq%C2%84%C2%AE%C2%A7%C3%AF%2F%C3%8F%3D%C2%93%C2%A5%C3%A5%C2%96T%156%C2%AC%1D%7D%5D%0D%C3%88%C3%BA%C3%8D%C2%9DZJ%00j%C3%90'%C3%8B%C3%87%C3%87%0FZ%C3%A26%7Bx%C2%8FT%12%C3%B5X%C2%A0%C2%89%C2%BE%12%C2%86%1AT%07%C2%A3%3A%3E%2Co%1C%1BO%C2%89%5CX%5C%C2%8F%C3%9E%C2%87%0D%3B%3B%C2%BDG%C3%8E%1F%19-h%C3%B2%C3%907%1Bv%C3%A3%C3%AEj%C2%9B%C2%B4%C3%A0%5C%C2%A8%C2%B4%20u8%1A%C2%A1%20%C3%B9%C2%87GF%C3%A5%C3%84d%C2%B9%C2%90%C2%AC%08%C2%BA%12%C2%86%24%2C%2C%C3%95%C3%93%C3%B7b%C2%B2%11%C3%93%C3%95%C3%B0%C2%A2__X%C2%91%C3%AB%0B%C2%AB%C3%A9%C3%A7%0B3c%C2%A9-%C3%82F!u3%C2%AF%C2%98%C3%9FXJ%C3%BA%C2%AD%C2%8E%C3%88%C3%A9%C3%83%7B%C3%BA0%C3%8D%C2%97%07A%C3%82PY7%C3%AF%C2%AE%C3%8A%C2%8D%C2%BBk%C2%A9%C2%B3%60%C2%A1%0B%2C%C2%B2%C3%AA%C3%94%C3%97%C3%8C%C3%81%C2%92%1C%C2%A8%0C9oo%C3%AEa%C2%BD%C3%8Di%C2%80%2C%24%06%C3%A0%C2%A2%5B%C2%A9%2B%C3%90%3B%3A%08%23%C2%B8E%0ABD%01%C2%82%5C%1B%C3%B8%C3%92.D%02D%C3%A2%60%40%C2%A6%02%17%3D%C3%ADg%C2%A2%C3%88%19f%01%C3%BB_)7%C2%BDjB%1DE%1Ba%04%C2%B7W%C3%A6%C2%9E%C2%A5%C2%9Fq%14NL%C2%95%C2%82%C2%AA%C2%8F%C3%98%C3%AA%C2%B3%C2%A5%C2%BA%C3%8C%3F%C2%AC%1B%C2%89k%C2%82%1FA%C2%B5%C3%B9.y%C2%AD%C3%9E%22%C2%8CX%C2%AB%40%1Ch8I%C3%8C%C2%8E%C2%8DCS%C3%82%20%C3%80%C2%92%C3%85%C2%A2%C3%A3%C2%A5%C3%85%C2%8C%3FdLN%C3%ACq%C3%84%C3%98%C2%8C%3B%C3%97%C3%AD%3D%C2%A8A%C3%9D!6%C3%9E%C2%B2%C3%9F%C2%B7%C3%BA%2C%C2%A4%C2%AE%1BR%C3%82l%C3%9E%C2%8E%C3%BC%5E(%5EB%5D%5E%C3%BB%C3%BB%C2%8A%C2%B3Wg%C2%A7GS%C2%A9%C2%83%20_%02!%C2%82%0D%C2%80%C3%B4%C3%BD%C3%A1%C3%ACW%C2%A2%C3%83%C2%B0j%C2%B2R%C3%AE%C3%AB%5C_%0A8%C3%82P%C2%856%5ER%C2%B2%C2%90%1A%C2%92%C2%B5%C2%9A5GBp(%C2%96%C2%96%C3%85y%C2%8E%C2%90%C2%A4%0E%0A%C2%989XN%C3%95%C2%A0%C2%925%C3%9E%07%C3%B7%C3%9C%3FCS%C3%98M%13%C2%8B%C3%B3%C2%AC%06%C3%90~%C3%AC56%1A%C2%9B%C3%88%C3%B6%C3%85%C2%B5%C3%A5%C2%B5%C3%9E%C2%B3.%C2%B1q%C3%BA%C3%A3%C3%B0%11%C2%BBG%C2%940%3C%3B%C3%85%C3%B9%C3%AF4%C3%95%20%C2%83%C2%84%2C%C2%9C%C2%8A%C3%90%40U%7D%C3%91%C2%B9u%C3%A1''F%C3%93%C3%81%C2%82%C2%A9%40%26%5E%22%07%C2%95w%C3%BF%C2%B7.%3F%C2%BE%C3%BE%C3%BF%60%7B%C2%A4%C3%BEb%12x%C3%A3%14%C3%8D%3F%C2%AAw%C2%B4!%C2%86CE%13%03%C3%BE%C3%91%C3%A4.c%C3%BD%10%0F%C2%B2Q%C3%B5%1As~%C3%BBvs%C3%8E%C3%9A%C2%97%C2%BDv%C3%A9%C3%A4%5E%C2%B7%16%C3%B6%C3%9Af%C3%86%C3%A9%C2%B7%7B%C3%BB%C3%96%C3%93%C2%AE%C3%87M%0A%C2%B7%C2%9Ay%C2%83%C3%94%C3%BB%C2%86%C3%B9nNCh%006%C3%89%C2%AB%C2%84%C3%9E1%1Efy%24%C3%9E%C2%A7%5D%C2%9C%C2%98%07%C2%AB%C3%97c%C3%9F%C3%BB%C3%9F%C3%A9%18m%C2%A2%C3%99%C3%AF%C3%83%5E%C2%AB%05%C2%AEmf%C2%9C%C2%B1q%C3%A4%C2%81%C2%930v%C2%BB%C2%BA%C3%A6%C3%98(%02X%1C%05T%23G%22y%06%20%C2%89%2B%C3%AFcm%C2%A3%C2%B9%C2%93%C2%A5-~cW%C3%95%C2%9C%C3%8D%C2%B2%C2%83%C2%9D%3D%C2%B4%C3%87%C2%BD%2C%C2%AE%7D%C3%BA%2C%3A!B%C2%8C%C2%B3%C2%AF%C2%8D%C2%B6%C2%8D%C3%91%1F%0Fs%60s%C3%B9I%C3%A5%C3%AD%02%C2%928%C2%B5%7F%C3%84IuL%C2%9A%C2%AC%C2%99%C3%89%1A%07R%C3%A7%C2%9C%C2%B8z%23%3A''a%04%C2%B6%C2%90%04%C3%A8%C3%ACr%C3%A2-%12C%5D%C3%A8%C2%92%C2%AC%C2%B5%60%C3%A0%3E%C2%90%5E%C2%88%C3%B2%5D%7F~%C2%A7%C3%9B%C3%8Eb%C3%A0%C2%8B%C3%8B%C3%B1MRI%C2%82v%C3%9D(%C3%BE%C2%86A%1D%C3%B3%3D%1B%12G%C2%A9%1F%60%C2%81%C3%A9%7F*%C3%83%C2%BE%C3%B1%C3%9B%C2%B4%C3%A96%0E%C3%BA%C2%A0%C2%8D%C2%8D%5D%7D%C2%A4%C3%9F%C2%90%C2%98%7D%C3%AB%C3%A6S'E%C3%AC%14T%15Dj%C2%96%22%C2%B4X%C3%A0%C3%BE%C2%93x%12%17%C3%AC%1F%C3%8D%C2%BFP%C2%9F%3C%C2%AC%C3%8B%C2%9F%3F_%C3%8D%C3%91%C2%B2%1D%C2%97NV%3A%1C%C2%85%C2%97%15%C3%A9%C2%B6%C2%80%C2%80%C2%8B%C3%9F%1BO%C2%A7I%C2%A4%C3%AD%C2%9F%C3%B6.%C2%B6e*%C2%9A%C2%B7%C2%86%C3%94%C2%A4%C2%BDobt%C3%88%C2%89%3Aj%C3%81%02%C2%89V%C2%A9V%C2%ACod%C2%AB%C3%9C%18P%C3%9F%C2%BB%C2%A5%C3%9A%C2%AAm%15%C2%994%C3%87%1A%C2%92%10%C3%A1%C3%AB%C3%91%C2%BCj%C3%85%C3%86V%C3%A5%C2%91f%C2%A6%C3%BE%C3%92%C2%A9V%C2%B8%0EQo%C2%9E%C2%A8%C2%B8%C2%97%25mb%C2%AC%C3%99%3F%C2%B6%C2%89%C3%98%C2%8D%C2%97O%C3%AAnG%C2%87%C2%B2%24%20%C3%86%C3%8D%C3%87%C2%BE%C3%B0B%C3%92%C3%B4%5C%C2%AAJ%C3%86b)%C2%AE%02%C2%B3vy%2F%C3%87%25%C3%98-2%C3%BEH%C2%B4o%C3%BBz%C3%81%C3%BD'%1B%C2%AE%1FI%C3%9E%C3%87%C2%A0%C3%AD%C2%AC%17L%C3%A2%5B%3C%C3%8F8%04%C3%8D%C3%B9%C3%99%C3%90%C3%88G%C3%9Eqh%1F%C2%B5%C2%8C%C3%BCx%C3%90%C2%BAa%C3%8F4%C3%8E%20(V%C3%83%0Dqd%3B%C2%AC%1A%C3%8C%C3%AA%5C%22%C3%A9%C2%A6n)(%C3%BA%C2%B7%C2%B1%C3%9Df%C2%91%C2%B7%C2%9FP%C2%BB%C2%BC%C3%B7j%C3%92%60%3B%C3%A6%C3%93%14%C2%92%C3%ACvA%C3%82%C2%B0%09%C2%90%C2%A3%C2%B9%C3%85%C3%B7%C3%BE%C2%BA%2C%C2%BF%C2%9A%C3%9D%C2%9B%C3%9A9%C3%9D-%12%C3%8B%0F.g%C3%87k6%05e%25%08%22c*%C3%90J%C2%AFz%C2%83%C2%9B%C3%89%3DZO%C2%92%7Ci%C3%9E%C3%A3%1E%C3%AE%C2%AB%26%26%C2%81%7F%C3%B3%C2%8C%C2%93%C3%B1%C3%854%C2%84%1D%3B%C2%A5%10%C2%A1u%C3%94%C3%9F%C2%B2%C2%88%C3%BA%C2%8Fx%C2%87%C2%88%C3%A8%7C%22Q%C2%B8%C3%BA%C3%98%22%06t%C2%A1%C2%92%C3%AD%C3%AA%2F%05J%C3%93%C2%B2J%02%24%C2%B1kHr%C2%96K%C2%AB%C3%90%0CA%1E%C2%BC%7Bf_T%1D%13%1Bu%C2%AB1%09%C2%81%0D%C2%8D%C3%BD%C3%AD%066%C2%BD_%C3%A6PK%C3%96R%C2%BDob%C3%94%C3%B3G%C3%86d2g9Dfr%C2%8C%C3%89%C2%A8w%07q7%12%C3%B1%C2%B7%C3%A73%C2%8A~%C3%A4%0C%C2%B7%03%C2%9B-5%C2%A8%C2%AD5%C2%92%C2%93%C3%B3%C3%96%C2%ABf%C2%B3%13%C2%8F7%C3%92%C3%B5%C3%A8%05H%1Ck9%5Enz%C3%93%7C%5E%C3%AC!%C2%A0%C3%8F%24%C3%8C%C2%A9%40%C2%B3%C2%9B%C3%91%C3%83~bR%5D%C3%BDX%C3%8E0%2B%0F9%C3%88%60!%C2%99%2FZ%06%07%C3%84%C2%9F%3B%C2%A7%1B%C3%B3%19%C2%8EF%0C%C3%B4%C2%87%10%C2%B0%C3%A9y%C2%91%C2%9F%C3%8C%C2%A3U%14%5D%C3%93%C3%8F%2C%C2%B8u%C3%B5%C3%BD%C3%B2%C3%A9n%C3%A9%C2%9E%C3%90%0E%7F%11%0E%2FU%C2%85_%3A%C2%B5%C3%97%C3%99mTv%C3%95%C2%95A4%C3%A4'%1F%7D%C3%A1%1C%04H%C3%95%02Y%C2%9C%C2%B1%C2%B7n%3Cu%C3%AF%C2%91%1C%C3%9Ek%3C%C2%8A%0A%24%C2%A9%C3%8D%0B%C2%9B%C2%A9%C2%9B%18%C2%A9%C3%BDp%C2%A1u%C2%BF%C2%B6%C3%A1%C3%85o%C2%84%C2%AA%C2%9Es%C2%9D%17%C2%B8%C2%B3%C2%AF%C3%84%C3%88%C2%AA%C2%AB%C3%9F%C3%BA%C2%AE%C2%B3h%26d%C2%AFBbo%C3%9Bm%C2%A7%C3%94q%C3%8C%C3%83%C2%B8%C3%9E%C3%A8%C3%81%C3%96%C3%B9P'%00%C2%B5%C2%87%C3%9D%C3%86f%C2%B9%C2%AA%C3%A4%C3%B2%C2%90%C2%9C%3E%C3%9C%C2%B4%3F%C2%AC%C2%89%C3%9A%22%3B%17%16%C2%9F%C2%8DL%5B%C2%A4%12%C2%92(A%7F%C3%BF%07%C3%BB%C3%9C%3D%C2%9A%C3%86B%C3%9AtC%C3%B3%C3%BE%C3%98%C3%97K%C3%B2%C3%AE%C2%99%C2%BD%C3%B2%C3%8B%C3%AFW%C2%9Cp%C2%846%7B%C3%AE%03%1Er%C2%8Aj%C2%A7pe%C3%A7%C2%92D'd%C2%86%C3%BE%C2%98%C3%81G%C3%88%11%C2%B1%C3%98%C3%8E%C3%83%C3%8B%C2%A6V%18%C3%ADI%C3%95%C3%B88%C2%9A%C3%94%C3%BBsL%C2%83c%60%C3%ADW5%C2%B1%C3%A1%C2%90%C2%A8%C3%92%02%C3%81%C2%AD%C3%B7%1BN%C3%AD%C2%B1%C3%A0%C2%A4%C3%AE%20%C3%A9%C2%AB%C3%A3%C2%AD38%C2%8E%C3%BD%25%C3%99%C3%BC%C3%B6%C3%BEs%C3%9F%1A%C2%95%C2%B1%C3%92%C2%90%C3%AC%2B%0F%C2%B95%C3%9D%12a%C2%9A%C2%BDW%20%C3%A6%3A%09v%C3%B2%C3%B1%C2%A9%C3%8E%15%C2%8F9%22%2FB%C3%B95I%C3%9D7%C2%8FW%C3%9C%C3%82%C2%A3%C3%BA%C3%A6L%26%1Ei%C3%B27)m%C3%94%C2%A5g%C3%B1%C3%B5%3Dm%C2%AD%C2%AB%0FI%7CV%C2%89%C3%94%C2%849%C3%97%C2%95%C3%94%7F%C3%BD%C2%97%7B%C3%82%C2%9B%C2%AD%C2%A7%C2%95c%C3%87%C3%8E%1E%C3%AEL%5DAf(I%1CsD%06%C2%BDH%14r%C2%B0!l%C2%AC%C3%99o4%C3%A7eO%22%20%C2%A4j%3CeuF%C2%98%C2%97%C2%9E%C3%9E%5B%C3%89%C3%B9%C3%B6%C3%97%C2%9A%C2%8B%C3%BF%C2%9F%C2%A7%C2%8D%C2%94hM%C2%9A%5B%C3%B2F%C2%86%5B%C2%BF%1F%C3%9B%C3%94%3D%C3%AB%0Cl%C3%83%C3%82b%3D5%C2%BA%C3%A8x%C2%BF%C3%B83%14%2C%C3%9A%C3%84%C2%B1%C3%82f%C3%BA%07)%2C%60%C2%91%C3%99%C2%90%3F%C3%BD%C3%A8%0B%C3%B7%C2%99%C2%B1%C3%99%05%C3%94%C2%B4%1DZ%06%C2%AD%C3%B3YRhk%C2%8B%C2%98%C2%AC%C3%A4%C2%BC%C3%BF%C3%8939%C3%B3%C3%8D%C2%B2%C3%9C%C2%BE%C2%B7%C2%96%C3%9Aj%2B%C2%A5Z%C2%A8%C3%BB%C2%A7%7F%C2%AC%C3%88J%5D%C3%A4%C2%9FK%C3%AB%C3%AE%2FPC%C3%A8%C2%99%C2%B0%C2%8A%3B%14%24u%C3%95%C3%B4%C2%88%C3%90%C3%B1%C2%AFUK%5D%C3%95%5C%C3%88%C2%86%C3%99%14W%C3%A8%2Cm%C2%A70%C3%ABm%40%C2%9C%18%0B%0E-%19%C2%BB%5Eg%C3%BEg%C2%A7%5Bs%197EI%C3%9A%C3%B6%C3%89J%C3%83%C2%95%C2%A7k%C3%9F%10%C2%A2%26%C3%85%C3%BE%1E%C2%B6%C3%9CVJ%C3%BB%C3%98%C2%94U%C2%A63%06%C2%A2u%13%C3%BC9%11%C3%99xUu%C3%A8%7D%C2%BC%C2%A4j%20%C3%80%C3%B6%C2%8FY%06%11%C2%95r%C2%B3*%2C%06_%C2%A34K%C3%BE%C3%82%C3%ADc%C2%A5%C3%A7%C2%96%C2%90n%C2%BFg%C2%B1%C3%A9%C3%95s'%C2%AD%C3%A6%C2%94%C3%9A%C2%BA%C3%BA%14%C2%9FJ%C3%A48%C2%A6_'%C2%BF%C2%BB%05%5B%C3%9A%C3%AEx%C2%87j%7B%C2%885%C2%B4%C2%A0%C3%86%C3%86mYXl%C2%ABI%2C%C2%88%C3%8C%C2%83-%11%C2%96uJ%0D%C2%99%1AoH%C3%84%11Yj%C2%AB%C3%BA-%C3%BE%C3%922%0F%C2%B6%C2%BCJ%18%C3%97%C2%90%C2%AB%C3%AFW%03%C2%AB%C3%84%15%C3%A5%C3%98%5B%C3%83%C2%B6%C3%BCA%1FG%08%C3%AA%C3%AA%C3%BB%C2%A7%C3%94%C2%8A%3C%C3%87%11%05%C2%BAc%C3%9B%C3%B4%10%C2%AE~(u%C2%95%C2%85Z%C2%97%3A%C3%87%02%C2%9D(%25O%C3%82%C3%9C%C3%B2%C2%B3%3A4%C2%AB%C2%AF%C2%AE%C2%BE%C2%AAFH%C2%B4%19%0F%C3%B7yb%C3%98%C2%95%16h%5DbQh%C2%93%1B%C2%B7K%C3%89%C2%83%C3%81%C2%B6%C3%A5%C3%A1*%C2%A7%C3%9DQw%C3%BB_Yb%C3%97%7C%C2%87c%C3%BEQ%7Ff%C2%B3%0Bp%C2%AB%2F%0F%07%C3%83%C2%BD%C3%87%03%C2%A4%C3%A2%C2%A8%C2%BD%60%C2%A7%C3%91Q%C3%AD%5B%3CS%C2%AA'%1C%1A%C2%88%C3%87%C3%AF%151X.%C2%A4%C2%8F%C3%9F%C2%93%C3%A2%01%C2%97%03%C2%8F%C3%B4%01%C2%97%C2%AA%C2%87%C3%AE%25Oq.0%C2%98H%C2%9F%C2%B0m%0D%C3%87%C3%95%C3%A4%C2%81%C3%80%05%06%0B%C3%91%C2%874%5B%C3%92%1E%17%C2%A4%C3%AD8%1E%C3%BBdI%24p%C2%BE%C2%9A%C3%A8%C3%8B%C3%9B%C2%BBc%5D%06%12%1F%24%1C%5C%C3%B5%07W%C3%BCW%1E%C2%83%C2%83%C3%AE%C3%BF%C2%95%C2%87%C2%88%7C%09%C3%A5%C3%9B~%C3%A6%C2%97%14%C3%84L%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var logoObj = AboutTextTopGroup.add("image", undefined, File.decode(logoObj_imgString), {name: "logoObj"}); 
            logoObj.alignment = ["center","center"]; 

        var AboutDivider1 = AboutTextTopGroup.add("panel", undefined, undefined, {name: "AboutDivider1"}); 
            AboutDivider1.enabled = false; 
            AboutDivider1.alignment = "fill"; 

        var AboutText1 = AboutTextTopGroup.add("group"); 
            AboutText1.orientation = "column"; 
            AboutText1.alignChildren = ["center","center"]; 
            AboutText1.spacing = 0; 
            AboutText1.alignment = ["center","fill"]; 

            AboutText1.add("statictext", undefined, "Chord Diagram Creator ", {name: "AboutText1", multiline: true}); 
            AboutText1.add("statictext", undefined, "", {name: "AboutText1", multiline: true}); 
            AboutText1.add("statictext", undefined, "for Adobe Illustrator v0.4.0 ", {name: "AboutText1", multiline: true}); 
            AboutText1.add("statictext", undefined, "by  George 'harpwood' Kritikos ", {name: "AboutText1", multiline: true}); 
            AboutText1.add("statictext", undefined, "", {name: "AboutText1", multiline: true}); 

        // ABOUTTEXTGROUP
        // ==============
        var AbouText2 = AboutTextGroup.add("statictext", undefined, undefined, {name: "AbouText2"}); 
            AbouText2.text = "This script will draw chords for you  in Adobe Illustrator."; 
            AbouText2.justify = "center"; 
            AbouText2.alignment = ["center","center"]; 

        // ABOUTTEXTBOTTOMGROUP
        // ====================
        var AboutTextBottomGroup = AboutTextGroup.add("group", undefined, {name: "AboutTextBottomGroup"}); 
            AboutTextBottomGroup.orientation = "column"; 
            AboutTextBottomGroup.alignChildren = ["center","center"]; 
            AboutTextBottomGroup.spacing = 20; 
            AboutTextBottomGroup.margins = 0; 
            AboutTextBottomGroup.alignment = ["fill","center"]; 

        var AboutDivider2 = AboutTextBottomGroup.add("panel", undefined, undefined, {name: "AboutDivider2"}); 
            AboutDivider2.enabled = false; 
            AboutDivider2.alignment = "fill"; 

        var AbouText3 = AboutTextBottomGroup.add("statictext", undefined, undefined, {name: "AbouText3", multiline: true}); 
            AbouText3.text = "Together, we can make this script better! You can give feedback and suggestions and if you find  this script useful,  you can support me by buying  me a coffee or with a PayPal donation :) "; 
            AbouText3.preferredSize.width = 309; 
            AbouText3.preferredSize.height = 68; 
            AbouText3.justify = "center"; 
            AbouText3.alignment = ["center","center"]; 

        // ABOUTDIALOG
        // ===========
        var AboutDivider3 = AboutDialog.add("panel", undefined, undefined, {name: "AboutDivider3"}); 
            AboutDivider3.enabled = false; 
            AboutDivider3.alignment = "fill"; 

        // ABOUTBTNSGROUP
        // ==============
        var AboutBtnsGroup = AboutDialog.add("group", undefined, {name: "AboutBtnsGroup"}); 
            AboutBtnsGroup.orientation = "column"; 
            AboutBtnsGroup.alignChildren = ["fill","center"]; 
            AboutBtnsGroup.spacing = 10; 
            AboutBtnsGroup.margins = 0; 

        var HowToUseBtn = AboutBtnsGroup.add("button", undefined, undefined, {name: "HowToUseBtn"}); 
            HowToUseBtn.enabled = false; 
            HowToUseBtn.text = "How to Use"; 
            HowToUseBtn.preferredSize.width = 141; 
            HowToUseBtn.preferredSize.height = 31; 

            eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 0=e.d("c",2,2,{b:"a"});0.9="8 7";0.1.6=5;0.1.4=3;',16,16,'AboutB1|preferredSize|undefined|30|height|141|width|Feedback|Give|text|FeedbackBtn|name|button|add|AboutBtnsGroup|var'.split('|'),0,{}));eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 0=e.d("c",2,2,{b:"a"});0.9=8+7;0.1.6=5;0.1.4=3;',16,16,'AboutB2|preferredSize|undefined|30|height|141|width|cof|byu|text|BuyMeACoffeeBtn|name|button|add|AboutBtnsGroup|var'.split('|'),0,{}));eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f 0=e.d("c",2,2,{b:"a"});0.9=8+7;0.1.6=5;0.1.4=3;',16,16,'AboutB3|preferredSize|undefined|30|height|141|width|pap|don|text|AboutPaypal|name|button|add|AboutBtnsGroup|var'.split('|'),0,{}));

            AboutB1.onClick = function(){try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JHoCye|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
            AboutB2.onClick = function(){try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|2JGrz1S|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}
            AboutB3.onClick = function(){try{eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j f=4(5.6+"/7.8");1=\'9://3.b/a\';f.c("d");f.0(\'[e]\');f.0(\'g=\'+1);f.0(\' \');f.h();f.i();f.2();',20,20,'writeln|v|remove|bit|File|Folder|userData|s|url|https|3lBSI3e|ly|open|w|InternetShortcut||URL|close|execute|var'.split('|'),0,{}))}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}}

        var AboutDivider4 = AboutBtnsGroup.add("panel", undefined, undefined, {name: "AboutDivider4"}); 
            AboutDivider4.enabled = false; 
            AboutDivider4.alignment = "fill"; 

        var AboutCloseBtn = AboutBtnsGroup.add("button", undefined, undefined, {name: "AboutCloseBtn"}); 
            AboutCloseBtn.text = "Close"; 
            AboutCloseBtn.preferredSize.width = 141; 
            AboutCloseBtn.preferredSize.height = 30; 
            AboutCloseBtn.alignment = ["fill","center"]; 

                AboutCloseBtn.onClick = function(){AboutDialog.close();}

        AboutDialog.show();
} 

// Font: roman   Reflection: no   Adjustment: left   Stretch: no      Width: 150	 Text: Helpers

// ooooo   ooooo           oooo                                         
// `888'   `888'           `888                                         
//  888     888   .ooooo.   888  oo.ooooo.   .ooooo.  oooo d8b  .oooo.o 
//  888ooooo888  d88' `88b  888   888' `88b d88' `88b `888""8P d88(  "8 
//  888     888  888ooo888  888   888   888 888ooo888  888     `"Y88b.  
//  888     888  888    .o  888   888   888 888    .o  888     o.  )88b 
// o888o   o888o `Y8bod8P' o888o  888bod8P' `Y8bod8P' d888b    8""888P' 
//                                888                                   
//                               o888o                                  

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

/**
 * Returns the first positiop (int) of the value in the arr array or returns -1 if the value does not exist
 * @param {* Array} arr 
 * @param {* Array} value
 */
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

/**
 * Returns the last positiop (int) of the value in the arr array or returns -1 if the value does not exist
 * @param {* Array} arr 
 * @param {* Array} value
 */
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
            prefs.isNumberOfStringsAndFretsLock = false;
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
            prefs.isLinkHeightToFrets = false;
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
        case PrefID.quitByDefault:
            prefs.quitByDefault = false;
            return true;
            break;
        case PrefID.unlockByDefault:
            prefs.unlockByDefault = false;
            return true;
            break;
        case PrefID.chordNameFont:
            prefs.chordNameFont = DEFAULT_FONT;
            return true;
            break;
        case PrefID.chordNameFontSize:
            prefs.chordNameFontSize = AUTO;
            return true;
            break;
        case PrefID.chordNameFontH:
            prefs.chordNameFontH = "0";
            return true;
            break;
        case PrefID.chordNameFontV:
            prefs.chordNameFontV = "0";
            return true;
            break;
        case PrefID.fingersUsedFont:
            prefs.fingersUsedFont = DEFAULT_NUMERIC_FONT;
            return true;
            break;
        case PrefID.fingersUsedFontSize:
            prefs.fingersUsedFontSize = AUTO;
            return true;
            break;
        case PrefID.fingersUsedFontH:
            prefs.fingersUsedFontH = "0";
            return true;
            break;
        case PrefID.fingersUsedFontV:
            prefs.fingersUsedFontV = "0";
            return true;
            break; 
        case PrefID.fretPositionsFont:
            prefs.fretPositionsFont = DEFAULT_NUMERIC_FONT;
            return true;
            break; 
        case PrefID.fretPositionsFontSize:
            prefs.fretPositionsFontSize = AUTO;
            return true;
            break; 
        case PrefID.fretPositionsFontH:
            prefs.fretPositionsFontH = "0";
            return true;
            break; 
        case PrefID.fretPositionsFontV:
            prefs.fretPositionsFontV = "0";
            return true;
            break; 
        case PrefID.fretNumberFont:
            prefs.fretNumberFont = DEFAULT_NUMERIC_FONT;
            return true;
            break; 
        case PrefID.fretNumberFontSize:
            prefs.fretNumberFontSize = AUTO;
            return true;
            break; 
        case PrefID.fretNumberFontH:
            prefs.fretNumberFontH = "0";
            return true;
            break; 
        case PrefID.fretNumberFontV:
            prefs.fretNumberFontV = "0";
            return true;
            break; 

        default:
            return false;
            break;
    }
}

/** 
* Assings a default font
* @param {* String} font The name of the font  
* @param {* String} altfont An alternative name of the font (in case the 1st will not work)
*/
function getDefaultFont(font, altfont)
{
    var fontCount = textFonts.length;
   
    var defaultFont = ScriptUI.newFont("window").name;
    for (var i = 0; i < fontCount; i++) 
    {
        if (textFonts[i].name == font || textFonts[i].name == altfont)  defaultFont = textFonts[i].name;
    }

    return defaultFont;
}


/** 
* Opens the url in default browser
* @param {* String} url  
*/
function openURL(v)
{
    var f = File(Folder.userData + "/s.url");
    var is = '[InternetShortcut]'
    var h = 'https://';
    var u = 'URL';

    f.open("w");
    f.writeln(is);
    f.writeln(u+'='+h+v);
    f.writeln(' ');      
    f.close();
    f.execute(); 
    f.remove();
      
}


function init()
{
    //initial vars
    isOptionsOpen = false;


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
    /**/ eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f="e d ";c="b";9="8 7 a ";6="5";4="3 2 1 0";',16,16,'Report|Bug|and|Feedback|fdb|Coffee|cof|Me|Buy|byu||Paypal|pap|with|Donate|don'.split('|'),0,{}))
    //////////////////////////////////////////////////////////

    try{loadPreferences();}catch(e){alert(ERROR_MSG + e, ERROR_TITLE);}
    
}
