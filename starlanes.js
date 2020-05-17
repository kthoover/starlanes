
/////////////////////////            Define Parameters                    ///////////////////////////////////////

// https://codepen.io/joshbader/pen/EjXgqr
let hidelist = true;
let numsys = 20;
let cp_icons =["images/controlpannelicon.jpg", "images/sunicon.png","images/shipicon.png", "images/portalicon.png", "images/mapicon.png"];
let star_names = ["Absolutno", "Achernar", "Achird", "Acrab", "Acrux", "Acubens", "Adhafera", "Adhara", "Adhil", "Ain", "Ainalrami", "Aladfar", "Alamak", "Alasia", "Alathfar", "Albaldah", "Albali", "Albireo", "Alchiba", "Alcor", "Alcyone", "Aldebaran", "Alderamin", "Aldhanab", "Aldhibah", "Aldulfin", "Alfirk", "Algedi", "Algenib", "Algieba", "Algol", "Algorab", "Alhena", "Alioth", "Aljanah", "Alkaid", "Al Kalb al Rai", "Alkalurops", "Alkaphrah", "Alkarab", "Alkes", "Almaaz", "Almach", "Al Minliar al Asad", "Alnair", "Alnasl", "Alnilam", "Alnitak", "Alniyat", "Alphard", "Alphecca", "Alpheratz", "Alpherg", "Alrakis", "Alrescha", "Alruba", "Alsafi", "Alsciaukat", "Alsephina", "Alshain", "Alshat", "Altair", "Altais", "Alterf", "Aludra", "Alula Australis", "Alula Borealis", "Alya", "Alzirr", "Amadioha", "Amansinaya", "Anadolu", "Ancha", "Angetenar", "Aniara", "Ankaa", "Anser", "Antares", "Arcalis", "Arcturus", "Arkab Posterior", "Arkab Prior", "Arneb", "Ascella", "Asellus Australis", "Asellus Borealis", "Ashlesha", "Asellus Primus", "Asellus Secundus", "Asellus Tertius", "Aspidiske", "Asterope", "Atakoraka", "Athebyne", "Atik", "Atlas", "Atria", "Avior", "Axolotl", "Ayeyarwady", "Azelfafage", "Azha", "Azmidi", "Baekdu", "Barnard's Star", "Baten Kaitos", "Beemim", "Beid", "Belel", "Belenos", "Bellatrix", "Berehinya", "Betelgeuse", "Bharani", "Bibha", "Biham", "Bosona", "Botein", "Brachium", "Bubup", "Buna", "Bunda", "Canopus", "Capella", "Caph", "Castor", "Castula", "Cebalrai", "Ceibo", "Celaeno", "Cervantes", "Chalawan", "Chamukuy", "Chaophraya", "Chara", "Chason", "Chechia", "Chertan", "Citadelle", "Citala", "Cocibolca", "Copernicus", "Cor Caroli", "Cujam", "Cursa", "Dabih", "Dalim", "Deneb", "Deneb Algedi", "Denebola", "Diadem", "Dingolay", "Diphda", "Diwo", "Diya", "Dofida", "Dombay", "Dschubba", "Dubhe", "Dziban", "Ebla", "Edasich", "Electra", "Elgafar", "Elkurud", "Elnath", "Eltanin", "Emiw", "Enif", "Errai", "Fafnir", "Fang", "Fawaris", "Felis", "Felixvarela", "Flegetonte", "Fomalhaut", "Formosa", "Franz", "Fulu", "Funi", "Fumalsamakah", "Furud", "Fuyue", "Gacrux", "Gakyid", "Garnet Star", "Giausar", "Gienah", "Ginan", "Gloas", "Gomeisa", "Graffias", "Grumium", "Gudja", "Gumala", "Guniibuu", "Hadar", "Haedus", "Hamal", "Hassaleh", "Hatysa", "Helvetios", "Heze", "Hoggar", "Homam", "Horna", "Hunahpu", "Hunor", "Iklil", "Illyrian", "Imai", "Intercrus", "Inquill", "Intan", "Irena", "Itonda", "Izar", "Jabbah", "Jishui", "Kaffaljidhma", "Kakkab", "Kalausi", "Kamui", "Kang", "Karaka", "Kaus Australis", "Kaus Borealis", "Kaus Media", "Kaveh", "Kekouan", "Keid", "Khambalia", "Kitalpha", "Kochab", "Koeia", "Koit", "Kornephoros", "Kraz", "Kuma", "Kurhah", "La Superba", "Larawag", "Lerna", "Lesath", "Libertas", "Lich", "Liesma", "Lilii Borea", "Lionrock", "Lucilinburhuc", "Lusitania", "Maasym", "Macondo", "Mago", "Mahasim", "Mahsati", "Maia", "Malmok", "Marfark", "Marfik", "Markab", "Markeb", "Marohu", "Marsic", "Matar", "Mebsuta", "Megrez", "Meissa", "Mekbuda", "Meleph", "Menkalinan", "Menkar", "Menkent", "Menkib", "Merak", "Merga", "Meridiana", "Merope", "Mesarthim", "Miaplacidus", "Mimosa", "Minchir", "Minelauva", "Mintaka", "Mira", "Mirach", "Miram", "Mirfak", "Mirzam", "Misam", "Mizar", "Moldoveanu", "Monch", "Montuno", "Morava", "Moriah", "Mothallah", "Mouhoun", "Mpingo", "Muliphein", "Muphrid", "Muscida", "Musica", "Muspelheim", "Nahn", "Naledi", "Naos", "Nash", "Nashira", "Nasti", "Natasha", "Navi", "Nekkar", "Nembus", "Nenque", "Nervia", "Nihal", "Nikawiy", "Nosaxa", "Nunki", "Nusakan", "Nushagak", "Nyamien", "Ogma", "Okab", "Paikauhale", "Parumleo", "Peacock", "Petra", "Phact", "Phecda", "Pherkad", "Phoenicia", "Piautos", "Pincoya", "Pipoltr", "Pipirima", "Pleione", "Poerava", "Polaris", "Polaris Australis", "Polis", "Pollux", "Porrima", "Praecipua", "Prima Hyadum", "Procyon", "Propus", "Proxima Centauri", "Ran", "Rapeto", "Rasalas", "Rasalgethi", "Rasalhague", "Rastaban", "Regor", "Regulus", "Revati", "Rigel", "Rigil Kentaurus", "Rosaliadecastro", "Rotanev", "Ruchbah", "Rukbat", "Sabik", "Saclateni", "Sadachbia", "Sadalbari", "Sadalmelik", "Sadalsuud", "Sadr", "Sagarmatha", "Saiph", "Salm", "Samaya", "Sansuna", "Sargas", "Sarin", "Sarir", "Sceptrum", "Scheat", "Schedar", "Secunda Hyadum", "Segin", "Seginus", "Sham", "Shama", "Sharjah", "Shaula", "Sheliak", "Sheratan", "Sika", "Sirius", "Situla", "Skat", "Solaris", "Spica", "Sterrennacht", "Stribor", "Sualocin", "Subra", "Suhail", "Sulafat", "Syrma", "Tabit", "Taika", "Taiyangshou", "Taiyi", "Talitha", "Tangra", "Tania Australis", "Tania Borealis", "Tapecue", "Tarazed", "Tarf", "Taygeta", "Tegmine", "Tejat", "Terebellum", "Tevel", "Thabit", "Theemin", "Thuban", "Tiaki", "Tianguan", "Tianyi", "Timir", "Tislit", "Titawin", "Tojil", "Toliman", "Tonatiuh", "Torcular", "Tuiren", "Tupa", "Tupi", "Tureis", "Ukdah", "Uklun", "Unukalhai", "Unurgunite", "Uruk", "Vega", "Veritate", "Vindemiatrix", "Wasat", "Wazn", "Wezen", "Wurren", "Xamidimura", "Xihe", "Xuange", "Yed Posterior", "Yed Prior", "Yildun", "Zaniah", "Zaurak", "Zavijava", "Zhang", "Zibal", "Zosma", "Zubenelgenubi", "Zubenelhakrabi", "Zubeneschamali"];
let numextraportals = Math.floor(numsys * .3);
let numstarsinsys = [1, 1, 1, 2, 2, 3, 3, 4, 5, 6];
let numplanetsinsys = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11];
let greekLetters = ["\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396"];
let starColors = ["white", "blue", "green", "yellow", "orange", "red", "yellowgreen", "lightblue", "orangered"];
let planetTypes = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
let boxshadowprefix = "inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2), inset -70px 0px 50px 0px black, -5px 0px 15px -4px "
let solarcoronaprefix = "0px 0px 50px 0px ";
// box-shadow: 0px 0px 10px 0px var(--sun-color), 0px 0px 1000px -2px var(--sun-color);
// https://codepen.io/YusukeNakaya/pen/XaeMvq    code pen for solar flares
// ultiamately build a completely different shadow box for stars
let solsyscolors = ["#999999", "#e8cda2", "#b3caff", "#c07158", "#c9b5a4", "#f0e2c4", "#b8d8e1", "#5e73bb", "#c3b6aa", "#cc9f4c"];
let planet_info_list = ["tilt", "day", "year", "life", "inhabited", "tech"];
let planet_info_list_suffix = ["°", " hours", " days", "life", "inhabited", "tech"];
let star_info_list = ["tilt", "day", "year", "color", "color", "name"];
let star_info_list_suffix = ["°", " hours", " days", "", "", ""];
let planet_visit_info_list = ["buy", "sell", "mine", "ally", "attack", "puzzle", "culture"];
let planet_visit_info_list_suffix = ["kronar", "kronar", "ergs", "points", "points", "answers", "stuff"];
let portal_info_list = ["entrance", "exit", "distance", "fees", "monsters", "special"];
let portal_info_list_suffix = ["", "", " light-years", " kronars", "", ""];
let planet_numbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

let testbag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5,5,6,6,6,7,7,8,8,9];
let testarray = [1,2,3,4,5,6,7,8,9, {"dog": "sammy"}];
let newtestarray = [];

let hyperDriveLayout = [["div", "scene", "main", "scene"], ["div", "wrap", "scene", "wrap1"], ["div", "wrap", "scene", "wrap2"], ["div", "wall wall-right", "wrap1", null], ["div", "wall wall-left", "wrap1", null], ["div", "wall wall-top", "wrap1", null], ["div", "wall wall-bottom", "wrap1", null], ["div", "wall wall-back", "wrap1", null],["div", "wall wall-right", "wrap2", null], ["div", "wall wall-left", "wrap2", null], ["div", "wall wall-top", "wrap2", null], ["div", "wall wall-bottom", "wrap2", null], ["div", "wall wall-back", "wrap2", null]];
let hyperDriveEngaged = false;

let sol_planet_list = [{"name":"mercury", "tilt":"0.034", "day": "1407", "year":"88"},{"name":"venus", "tilt":"177.3", "day": "5832", "year":"224.7"},{"name":"earth", "tilt":"23.26", "day": "23.9", "year":"365.2"},{"name":"mars", "tilt":"25.2", "day": "24.6", "year":"687"},{"name":"jupiter", "tilt":"3.1", "day": "9.9", "year":"4,331"},{"name":"saturn", "tilt":"26.7", "day": "10.7", "year":"10,747"},{"name":"uranus", "tilt":"97.8", "day": "17.2", "year":"30,589"},{"name":"neptune", "tilt":"28.3", "day": "16.1", "year":"59,800"},{"name":"pluto", "tilt":"122.5", "day": "153.3", "year":"90,560"}, {"name":"sun", "tilt":"0", "day": "600", "year":"0"}];

let planet_DOM = [["article", "card card", "main", "slot"],
                  ["div", "card__planet", "slot", "d1-slot"],
                  ["div", "planet__atmosphere", "d1-slot", "d2-slot"],
                  ["div", "planet__surface", "d2-slot", "d3-slot"]];



let info_DOM = [["div", "card__info", "slot", "d4-slot"],             // card definition
                ["h2", "info__title", "d4-slot", "h2-slot"],          // name
                ["div", "info__form", "d4-slot", "d5-slot"]];         // form div


let info_detail_DOM = [["div", "info__item", "d5-slot", "block*-slot"],        // div #1 -- div #6
                       ["label", "info_label", "block*-slot", "l*-slot"],
                       ["span", "info__line", "block*-slot", "sp*-slot"],
                       ["span", "info__detail", "block*-slot", "id*-slot"]];

// the following resource types and their parameters are made up for development and testing purposes
const resource_types = {"Compound1" : [false, "solid", 100, 1, 2, "", "none", "none", "blank"],
                        "Compound2" : [false, "solida", 10, 1, 2, "", "none", "none", "blank"],
                        "Compound3" : [false, "solidb", 20, 1, 60, "", "none", "none", "blank"],
                        "Compound4" : [false, "solid", 30, 1, 60, "", "none", "none", "blank"],
                        "Compound5" : [false, "solida", 90, 1, 40, "", "none", "none", "blank"],
                        "Compound6" : [false, "solidb", 5, 1, 40, "", "none", "none", "blank"],
                        "Compound7" : [false, "solid", 1000, 1, 40, "", "none", "none", "blank"],
                        "Compound8" : [false, "solida", 2000, 1, 20, "", "none", "none", "blank"],
                        "Compound9" : [false, "solid", 10, 1, 20, "", "none", "none", "blank"],
                        "Art1" : [true, "solid", 10, 1, 10, "", "none", "none", "blank"],
                        "Art2" : [true, "solid", 10, 2, 10, "", "none", "none", "blank"],
                        "Art3" : [true, "solid", 10, 3, 10, "", "none", "none", "blank"],
                        "Art4" : [true, "solid", 10, 4, 10, "", "none", "none", "blank"],
                        "Art5" : [true, "solid", 10, 5, 10, "", "none", "none", "blank"],
                        "Treasure Map1" : [true, "solid", 10, 1, 1, "", "none", "none", "blank"],                      
                        "Treasure Map2" : [true, "solid", 10, 1, 2, "", "none", "none", "blank"],  
                        "Treasure Map3" : [true, "solid", 10, 1, 3, "", "none", "none", "blank"],  
                        "Treasure Map4" : [true, "solid", 10, 1, 4, "", "none", "none", "blank"],  
                        "Treasure Map5" : [true, "solid", 10, 1, 5, "", "none", "none", "blank"],  
                        "Treasure Map6" : [true, "solid", 10, 1, 6, "", "none", "none", "blank"],  
                        "Treasure Map7" : [true, "solid", 10, 1, 7, "", "none", "none", "blank"]};
const resource_parameters = ["unitary", "state", "mass", "volume", "cost", "units", "special", "history", "extra"];
const buytable = ["Resource", "Amount", "Available", "Constraints", "Cost", "Transfer Amount", "In Cargo"];
const interactionModalHTML = '<div id="interactionModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h1 id="interactionModalHeader">Trading Screen</h1></div><div class="modal-body">';


 
 function resourcePlanets() {
   systems.forEach(a_system => {
     a_system.planets.forEach(a_planet => {
      //  console.log(a_planet.name);
      let temp_resource_list = Object.keys(resource_types);
      shuffle(temp_resource_list);
      temp_num_resources = Math.floor(Math.random() * (8));
      for (let index = 0; index < temp_num_resources; index++) {
        let temp_resource = new Resource(temp_resource_list.pop(), 1000);
        console.log(temp_resource);
        a_planet.resources.push(temp_resource);
      }
     });
   });
 }
 
 function Resource(name, amount) {
     this.name = name;
     this.amount = amount;
     this.unitary = true;                     // [unitary (true), divisible (false)]   
     this.state = "solid";                         // [solid, liquid, gas, plasma]
     this.mass = "2";                          // mass per unit
     this.volume = "";                       // volume per unit
     this.cost = "";                         // cost per unit
     this.units = "";                         // (may not need this)
     this.specialrequirements = "none";                         // special requirements for hauling (may not need this)
     this.history = "none";                         // history of the article (may not need this)
     this.extra = "blank";                         //  (may not need this)
     this.interactiontype = "buy";                   // action indicates what the owner will do with the resource (buy, sell, allow mine, etc.)
     let index = 0;
     resource_parameters.forEach(element => {
       this[element] = resource_types[name][index];
       index ++;
     }); 
 } 


let portal_table_text = "<table><tbody><tr><th>From:</th><th>System:</th><th>To:</th></tr>"
let portal_table_row = '<tr><td id="from*"></td><td id="system*"></td><td id="to*"></td></tr>';
let portal_table_end = "</tbody></table>";



/////////////////////////                Play Game                        ///////////////////////////////////////
let systems = [];
let portals = [];
let ships = [];
 
initializeGame();

createShip("Hercules", "Kurt");
resourcePlanets();
drawPortals(0);               // this is the system number that the ship is currently occupying
supertest(testarray);


/////////////////////////             Initialize Game                     ///////////////////////////////////////

function System(sysname) {
    this.name = sysname;
    this.stars = [];
    this.planets = [];
    this.portals = [];
    this.coodinates = [];
    this.environment = [];
} 

function Star(sysname,index) {
  this.name = sysname + '-' + greekLetters[index];
  this.color = drawSample(starColors);
  this.shadowcolor = solarcoronaprefix + this.color;
  this.image = this.color + ".jpg";
  this.year = "????"
  // this.image = this.color + Math.floor(Math.random() * 10)) + ".jpg";       // this allows for 10 different stars of each collor
  this.day = Math.floor((12 + (Math.random() * 2)) * 10) / 10;
  this.tilt = 0;
  if (index > 0) { this.tilt = Math.floor(Math.random() * 360); }
}

function Planet(sysname,index) {
  this.name = sysname + '-' + planet_numbers[index];
  this.image = drawSample(planetTypes)+ ".jpg";
  this.shadowcolor = boxshadowprefix + "pink";
  this.day = 40 - (Math.random() * 37);
  this.tilt = Math.random() * 360;
  this.characteristics = [];
  this.materials = [];
  this.inhabitants = [];
  this.owners = [];
  this.tech = [0,2];
  this.trade = [];
  this.alliance = [];
  this.resources = [];
}

function Portal(portalindex, entrancesystem, exitsystem) {
  if (entrancesystem == exitsystem) { console.log("DANGER WILL ROBINSON!!!!!"); }
  this.index = portalindex;
  this.entrance = entrancesystem;
  this.exit = exitsystem;
  this.distance = 100;        // need to calculate--temporarily set all lengths to 100
  this.fees = 100;
  this.monsters = "no";
  this.entranceknown = [];            // array of players who know about the portal entrance (currently unused)
  this.exitknown = [];            // array of players who know about the portal exit (currently unused)
  this.special = "";          // TDB
  this.spinspeed = 15 + (Math.random() * 2) - 1;
}


function Ship(name, player) {
  this.name = name;
  this.player = player;
  this.resources = [];
  this.system = 0;
  this.location = [];       // ???
  this.cargo = [];
  this.fuel = 100;
  this.shields = 100;
  this.entranceknown = [];            // array of portal entrance this ship knows
  this.exitknown = [];            // array of portal exits this ship knows
  this.systemknown = [];         // array of systems this ship knows
  this.currentplanet = "";      // current planet or star the ship is in orbit around--last planet visited is stored as current
}


templist = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
function tableOfPortals() {
  drawPortalTable(systems.length);
  ships[0].systemknown.forEach(element => {
  // templist.forEach(element => {
    let to_list = "   ";
    let from_list = "   ";
    let portal_type = "exitknown";
    systems[element].portals.forEach(element1 => {
      portal_type = "exitknown";
      if (systems[portals[element1].entrance].name == systems[element].name) { portal_type = "entranceknown"; }
      if (portal_type == "entranceknown") {
        if (ships[0].exitknown.includes(element1) && ships[0].entranceknown.includes(element1)) {
          to_list = to_list + systems[portals[element1].exit].name + '   ';
        } else {
          if (hidelist) {
            to_list = to_list + "????" + '   ';
          } else {
            to_list = to_list + systems[portals[element1].exit].name + '....';
          }
        }
      } else {
        if (ships[0].entranceknown.includes(element1) && ships[0].exitknown.includes(element1)) {
          from_list = from_list + systems[portals[element1].entrance].name + '   ';
        } else {
          if (hidelist) {
            from_list = from_list + "????" + '   ';            
          } else {
            from_list = from_list + systems[portals[element1].entrance].name + '    ';
          }
        }
      }
      
    });


    document.getElementById("system" + element).innerText = '   ' + systems[element].name + '   ';
    document.getElementById("to" + element).innerText = to_list;
    document.getElementById("from" + element).innerText = from_list;
    document.getElementById("from" + element).parentElement.className = "tablebox";       
  });
  drawControlPannelIcon(1, cp_icons[0]);
}
function drawPortalTable(num_datarows) {
  createMainSection("portal_table");
  let table_rows = [];
  for (let index = 0; index < num_datarows; index++) {
    table_rows = table_rows + portal_table_row.replace(/\*/g, index);
  }
  document.getElementById("main").innerHTML = portal_table_text + table_rows + portal_table_end ;
}

  
function initializeGame() {

  // this block creates an array of system names based on how many systems (numsys) are chosen
  shuffle(star_names);
  let system_names = star_names.slice(0, numsys);
  system_names.sort();
  system_names[0] = "Sol";


  system_names.forEach(element => {
    let currentSystem
    createSystem(element);
  });

  createPortals();    
  createSolSys();                // create system index 0 (system[0]) as the sol system          
  
}


function createSystem(sysname) {                            // create a new system
  currentSystem = new System(sysname);
  let numstars = drawSample(numstarsinsys);
  if (sysname == "Sol") { numstars = 1; }
  createStars(currentSystem, sysname, numstars);
  let numplanets = drawSample(numplanetsinsys);
  if (sysname == "Sol") { numplanets = 9; }
  createPlanets(currentSystem, sysname, numplanets);
                                              
  systems.push(currentSystem);
}

function createStars(currentSystem, sysname, numstars) {
  console.log("creating stars");
  for (let index = 0; index < numstars; index++) {  
    let currentStar = new Star(sysname, index);
    currentSystem.stars.push(currentStar);
  }
}

function createPlanets(currentSystem, sysname, numplanets) {
  console.log("creating planets");
  for (let index = 0; index < numplanets; index++) {  
    let currentPlanet = new Planet(sysname, index);
    currentSystem.planets.push(currentPlanet);
  }
}


function createPortals() {                    // create all new Portals
  // this block creates the predefined exits and entrances for the portals
  let orderedArray = Array.from(Array(numsys).keys());
  let exitPortals = Array.from(Array(numsys).keys());
  shuffle(exitPortals);
  fixMatches(orderedArray, exitPortals);
  buildPortals(orderedArray, exitPortals);
  let entrancePortals = Array.from(Array(numsys).keys()); 
  shuffle(entrancePortals);
  fixMatches(entrancePortals, orderedArray);
  buildPortals(entrancePortals, orderedArray);
  shuffle(entrancePortals);
  shuffle(exitPortals);
  let extra_entrances = entrancePortals.slice(0,numextraportals);
  let extra_exits = exitPortals.slice(0,numextraportals);
  fixMatches(extra_entrances, extra_exits);
  buildPortals(extra_entrances, extra_exits);

}

function fixMatches(array1, array2) {        // checks to see if any portals have same exit and entrance and replaces them
  let bad_matches = false;
  do {
    bad_matches = false;
    for (let index = 0; index < array1.length; index++) {
      let element1 = array1[index];
      let element2 = array2[index];
      if (element1 == element2) { bad_matches = true; shuffle(array2);}
    }
    let t3 = Array.from(array2);
  } while (bad_matches);


  
}


function buildPortals(entrances, exits) {
  for (let index = 0; index < entrances.length; index++) {
    const element1 = entrances[index];
    const element2 = exits[index];
    let currentPortal = new Portal(portals.length, element1, element2);
    portals.push(currentPortal);
    console.log(element1, element2, + "   " + index);
    systems[element1].portals.push(portals.length-1);
    systems[element2].portals.push(portals.length-1)
  }

  
}

function createShip(shipname, player) {
  let currentShip = new Ship(shipname, player);
  console.log(shipname, player);
  ships.push(currentShip);
  console.log(ships);
  ships[0].systemknown.push(0);
  systems[ships[0].system].portals.forEach(element => {
    if (portals[element].entrance == ships[0].system) { ships[0].entranceknown.push(element); }
    if (portals[element].exit == ships[0].system) { ships[0].exitknown.push(element) }    
  });

}


function createSolSys() {                                         // create Sol system

  systems[0].stars[0].name = "Sol";                               // over-write star with Sol data
  systems[0].stars[0].image = "sun.jpg";
  systems[0].stars[0].shadowcolor = solarcoronaprefix + "yellow";
  systems[0].stars[0].day = sol_planet_list[9]["day"] * .1;
  systems[0].stars[0].tilt = sol_planet_list[9]["tilt"];

  for (let index = 0; index < sol_planet_list.length-1; index++) {     // over-write planets with Planetary data  
    const element = sol_planet_list[index];
    systems[0].planets[index].name = sol_planet_list[index]["name"];
    systems[0].planets[index].image = sol_planet_list[index]["name"] + ".jpg";
    systems[0].planets[index].shadowcolor = boxshadowprefix + solsyscolors[index];
    systems[0].planets[index].day = sol_planet_list[index]["day"] * .1;
    systems[0].planets[index].tilt = sol_planet_list[index]["tilt"];  
  }
}

/////////////////////////              Game Functions                     ///////////////////////////////////////


function createHyperDrive() {
  createMainSection("section-hyperdrive");

  hyperDriveLayout.forEach(element => {
    createDomElement(element)

    hyperDriveEngaged = true;
  });  

}


//############################################### Create a Solar System


        function drawPortals(systemNum) {
          createMainSection("grid-section");
          let slotNum = 0;
          systems[systemNum].portals.forEach(element => {
            // let portalParentId = "main";

            drawDOMElement(["article", "card card", "main", "slot"], slotNum);
            let portalParentId = "slot";            
            let portalType = "portal-entrance";
            if (systemNum != portals[element].entrance) {  portalType = "portal-exit"; }
            console.log(systemNum + "     " + portals[element].entrance + "     " + portals[element].exit);
            for (let index = 0; index < 9; index++) {         // create and draw the 9 layers of the portal
              elmntid = "pl" + index + "-slot";
              drawDOMElement(["div", portalType, portalParentId, elmntid], slotNum);
              document.getElementById(elmntid+slotNum).style.animationDuration = portals[element].spinspeed + "s"; // assign the randomized spin for the portal
            
              portalParentId = elmntid;
            }
            console.log("pl0-slot" + slotNum);
            document.getElementById("pl0-slot" + slotNum).addEventListener("click", function() { enterPortal(element); });
            info_DOM.forEach(element1 => {
              console.log('times through');
              drawDOMElement(element1, slotNum);
            });
            console.log("element.portalindex:  " + element);
            document.getElementById("h2-slot" + slotNum).innerText = "Portal " + element;
            populateBreifDetails(portal_info_list, portal_info_list_suffix, "portals", element, slotNum, systemNum);            
            slotNum += 1;              
          
          });
          drawControlPannelIcon(slotNum, cp_icons[0]);
        }



        function drawPlanets(systemNum) {
          createMainSection("grid-section"); 
          let slotNum = 0;
          console.log('slotNum:  ' + slotNum);
          for (let index = 0; index < systems[systemNum].stars.length; index++) {
            drawACelestialBody(systemNum, slotNum, index, "stars", false);

            populateBreifDetails(star_info_list, star_info_list_suffix, "stars", index, slotNum, systemNum);
            document.getElementById("d2-slot" + slotNum).addEventListener("click", function() { visitPlanet(systemNum, index, "stars"); });
            slotNum += 1;
            console.log('slotNum:  ' + slotNum);
          } 
          for (let index = 0; index < systems[systemNum].planets.length; index++) {
            drawACelestialBody(systemNum, slotNum, index, "planets", false);

            populateBreifDetails(planet_info_list, planet_info_list_suffix, "planets", index, slotNum, systemNum);
            document.getElementById("d2-slot" + slotNum).addEventListener("click", function() { visitPlanet(systemNum, index, "planets"); });
            slotNum += 1;
            console.log('slotNum:  ' + slotNum);
          } 

          drawControlPannelIcon(slotNum, cp_icons[0]);


          
        }




        function drawSlot([elementtype, classname, parentid, elmntid], slotNum, planettypeNum) {   // DELETE WHEN DONE WITH PLANET SECTION
            let elmnt = document.createElement(elementtype);
            elmnt.setAttribute("class", classname);                             // need to adjust for planet type
            if (elementtype == "article") { elmnt.setAttribute("class", "card card--" + sol_planet_list[planettypeNum]["name"]); }  // remove once using generic
            if (elmntid != null) { elmnt.setAttribute("id", elmntid+slotNum); }         // need to adjust to slot number
            let tempparentid = parentid
            if (parentid != "main") { tempparentid = parentid+slotNum }
            document.getElementById(tempparentid).appendChild(elmnt);

        }

        function drawDOMElement([elementtype, classname, parentid, elmntid], slotNum) {
          let elmnt = document.createElement(elementtype);
          elmnt.setAttribute("class", classname);                            
          if (elmntid != null) { elmnt.setAttribute("id", elmntid+slotNum); }         // needed to incorporate slot number
          let tempparentid = parentid
          if (parentid != "main") { tempparentid = parentid+slotNum }                 // needed to incorporate slot number
          document.getElementById(tempparentid).appendChild(elmnt);

      }
//////////////////////////            Action Functions                    ///////////////////////////////////////

function enterPortal(portalNum) {
  console.log(portalNum + "here");
  console.log(portals[portalNum].entrance + "    " + portals[portalNum].exit);
  createHyperDrive();
  setTimeout(function() {
    if (!ships[0].entranceknown.includes(portals[portalNum].entrance)) { ships[0].entranceknown.push(portals[portalNum].entrance); }
    if (!ships[0].systemknown.includes(portals[portalNum].exit)) { ships[0].systemknown.push(portals[portalNum].exit); } 
    ships[0].system = portals[portalNum].exit;
    systems[ships[0].system].portals.forEach(element => {
      if (portals[element].entrance == ships[0].system) {
        if (!ships[0].entranceknown.includes(element)) { ships[0].entranceknown.push(element); }  
      }
      if (portals[element].exit == ships[0].system) {
        if (!ships[0].exitknown.includes(element)) { ships[0].exitknown.push(element); }  
      }      
    });

    drawPlanets(ships[0].system);
  }, (2 * 1000));


}


/////////////////////////          DOM Creation Functions                 ///////////////////////////////////////


function drawACelestialBody(systemNum, slotNum, index, bodytype, largesize) {
  planet_DOM.forEach(element => {          // create the DOM for a star or planet
    drawDOMElement(element, slotNum);
  });
  if (largesize) { document.getElementById("d2-slot" + slotNum).className ="planet__atmosphere2" } // apply planet__atmosphere2 
  console.log("Hello:  " + systemNum + "   " + bodytype + "   " + index + "   ");
  let celestialBody = systems[systemNum][bodytype][index];
  console.log(celestialBody.name);
  applyPlanetParameters(celestialBody, index, slotNum);       // apply image, rotation, tilt, shadowing to star or planet
  info_DOM.forEach(element => {
    drawDOMElement(element, slotNum);
  });
  document.getElementById("h2-slot" + slotNum).innerText = systems[systemNum][bodytype][index].name;
  if (bodytype = "stars") { document.getElementById("d2-slot" + slotNum).style.boxShadow = celestialBody.shadowcolor; }
}


function applyPlanetParameters(celestialBody, index, slotNum) {
  document.getElementById("d2-slot" + slotNum).style.boxShadow = celestialBody.shadowcolor;
  document.getElementById("d3-slot" + slotNum).style.animationDuration = celestialBody.day + "s";
  document.getElementById("d3-slot" + slotNum).style.transform = "rotate(" + celestialBody.tilt + "deg)";
  document.getElementById("d3-slot" + slotNum).style.backgroundImage = "url(images/" + celestialBody.image + ")";
  console.log("Sun name    " + "rotate(" + celestialBody.tilt + ")");
}


function drawVariableDOMElement(original_array, slotNum, new_var) {
  let modified_array = [];
  original_array.forEach(element => {
    modified_array.push(element.replace(/\*/g, new_var));
  });
  drawDOMElement(modified_array, slotNum);
}

function drawDOMElement([elementtype, classname, parentid, elmntid], slotNum) {
  let elmnt = document.createElement(elementtype);
  elmnt.setAttribute("class", classname);                            
  if (elmntid != null) { elmnt.setAttribute("id", elmntid+slotNum); }         // needed to incorporate slot number
  let tempparentid = parentid
  if (parentid != "main") { tempparentid = parentid+slotNum }                 // needed to incorporate slot number
  document.getElementById(tempparentid).appendChild(elmnt);
}


function createDomElement([elnttype, classname, parentid, elmntid]) {
    let elmnt = document.createElement(elnttype);
    if (classname != null) { elmnt.setAttribute("class", classname); }
    if (elmntid != null) { elmnt.setAttribute("id", elmntid); }
    document.getElementById(parentid).appendChild(elmnt);
}


function createMainSection(className1) {
  if (document.getElementById("main")) { document.getElementById("main").remove(); }
  let mainsection = document.createElement("section");
  mainsection.id = "main";
  mainsection.className = className1;
  document.body.appendChild(mainsection);
}


function drawControlPannelIcon(slotNum, picture) {
  let tempid = "cp" + "-slot";
  drawDOMElement(["img", "controlicon", "main", tempid], slotNum);   
  let elmnt = document.getElementById(tempid + slotNum);  
  elmnt.src = picture;
  if (picture == cp_icons[0]) { elmnt.addEventListener("click", function() { drawControlPannel(); }); }
  if (picture == cp_icons[1]) { elmnt.addEventListener("click", function() { drawPlanets(ships[0].system); }); } 
  if (picture == cp_icons[2]) { elmnt.addEventListener("click", function() { console.log("draw ship") }); }// need to complete
  if (picture == cp_icons[3]) { elmnt.addEventListener("click", function() { drawPortals(ships[0].system); }); } 
  if (picture == cp_icons[4]) { elmnt.addEventListener("click", function() { tableOfPortals(); }); }    
}

function drawControlPannel() {
  createMainSection("grid-section");
  for (let index = 0; index < cp_icons.length; index++) {
    if (index > 0) {
      slotNum = index - 1;
      drawControlPannelIcon(slotNum, cp_icons[index]);

    }
  }
  console.log('Drawing control pannel');
}


function populateBreifDetails(array1, array2, type, bodyNum, slotNum, systemNum) {
  // console.log(type, type, type, type, type, type);
  let index1 = 0;
  array1.forEach(element => {            // this loop goes through each of the 6 properties
    info_detail_DOM.forEach(element1 => {
      drawVariableDOMElement(element1, slotNum, index1);
    });

    if (element != "none") {
      let temp1 = index1 + "-slot" + slotNum;
      document.getElementById("l" + temp1).innerText = element;
      console.log('Data:'+ element);
      if (type == "portals") {
        document.getElementById("id" + temp1).innerText = portals[bodyNum][element] + array2[index1];
        if (element == "exit" || element == "entrance") { document.getElementById("id" + temp1).innerText = systems[portals[bodyNum][element]].name };
        if (element == "entrance" && !ships[0].entranceknown.includes(bodyNum)) { document.getElementById("id" + temp1).innerText = "????" };
        if (element == "exit" && !ships[0].exitknown.includes(bodyNum)) { document.getElementById("id" + temp1).innerText = "????" };
      } else if (type == "interaction") {
        document.getElementById("id" + temp1).innerText =  array2[index1];
        document.getElementById("id" + temp1).parentElement.addEventListener("click", function() { prepareInteraction(systems[systemNum].planets[bodyNum], element); });
      } else {
        document.getElementById("id" + temp1).innerText = systems[systemNum][type][bodyNum][element] + array2[index1];
      }
    }
    index1 += 1;
  });
  
}  


/////////////////////////           Auxillary Functions                   ///////////////////////////////////////

function drawSample(bag) {
  let sample = bag[Math.floor(Math.random() * bag.length)];
  return sample;                            // return a randomly choosen sample from a distribution (bag)
  
}

function continuousSample(bag) {
  let sample = drawSample(bag) + Math.random() + .05 * drawSample(bag) - .5;
  if (sample < 0) { sample = 0; }
  return sample;                            // return a randomly choosen sample from a distribution (bag)
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
/////////////////////////              Test Functions                     ///////////////////////////////////////

function supertest(t2) {
  // t3 = t2.slice();
  // t3 = [...t2];
  t3 = Array.from(t2);
  testfunction(t3);
  newtestarray = t3;
  console.log("Testarray:  " + testarray);
  
}

function testfunction(temp1) {
  shuffle(temp1);
  console.log("Temp1:  " + temp1);
}


///////////////           Functions involved in planetary interactions                     ///////////////////////////////////////



function visitPlanet(systemNum, index, bodytype) {  // clicking on a planet or star takes the ship to that celestial body for interactions
  createMainSection("grid-section2"); 
  let slotNum = 0;
  drawACelestialBody(systemNum, slotNum, index, bodytype, true);
  // next line outputs the possible interactions with the planet and adds listeners to each line
  populateBreifDetails(planet_visit_info_list, planet_visit_info_list_suffix, "interaction", index, slotNum, systemNum);
  console.log(bodytype, bodytype, bodytype, bodytype);
  slotNum += 1;
  drawControlPannelIcon(slotNum, cp_icons[0]);
  ships[0].currentplanet = systems[systemNum].planets[index];       // assuming we are in orbit around a planet otherwise execute next line
  if (bodytype == "stars") { ships[0].currentplanet = systems[systemNum].stars[index]; }

}


function prepareInteraction(targetplanet, interactiontype) {      // master function for preparing interactions with a planet
  let targetrsourceslist = [], index = 0;
  targetplanet.resources.forEach(element => {
    if (element.interactiontype == interactiontype) { targetrsourceslist.push(index); index ++; }
  });
  let interactionHTMLTable = makeHTMLTable(interactiontype, targetrsourceslist.length, 7);
  let tempSec = document.createElement('section');
  newElement = document.getElementById("main").insertAdjacentElement('afterend',tempSec);
  newElement.innerHTML = interactionModalHTML + interactionHTMLTable + '</div></div>';
  let executebuttonHTML = '<button id="execute" class="button" onclick="executeInteraction()">Execute</button>';
  newElement.innerHTML = interactionModalHTML + interactionHTMLTable + executebuttonHTML + '</div></div>';
openModal("interactionModal");
populateTable(targetplanet, interactiontype);
// Execute the trade

}


function cloneResource(originalresource, resourcetype) {
  let resourcetype1 = originalresource.constructor.name;
  console.log('     ' + resourcetype1);
  let newresource = new resourcetype();
  list1 =Object.getOwnPropertyNames(originalresource);
  list1.forEach(element => {
      console.log(originalresource[element]);
      newresource[element] = originalresource[element];
  });    
  return newresource;
}


function executeInteraction()  {
  // need to define the following:
  // sellers_resource
  // buyers_resources
  // amount_traded



  // let resource_already_in_buyers_list = false;
  // buyers_resources.forEach(element => {        // check if resource is already listed in buyers list simply add quantity
  //   if (element.name == sellers_resource.name) {  
  //     resource_already_in_buyers_list = true;
  //     element.amount = element.amount + amount_traded;
  //     sellers_resource.amount = sellers_resource.amount - amount_traded;
  //     // break;
  //   }
  // });
  // if (resource_already_in_buyers_list == false) {   // resource wasn't already listed so add it to the list
  //   let newresource =  cloneResource(sellers_resource, Resource);
  //   newresource.amount = amount_traded;
  //   buyers_resources.push(newresource);
  //   sellers_resource.amount = sellers_resource.amount - amount_traded;
  // }

  document.getElementById("interactionModal").style.display = "none";

}






function populateTable(targetplanet, interactiontype) {    // puts the data in the interaction table opened in the modal
  if (interactiontype == "buy") {
    document.getElementById("interactionModalHeader").innerText = "Buy Some Stuff at " + targetplanet.name;
    for (let index = 0; index < buytable.length; index++) { 
      document.getElementById("buy-header-" + index).innerText = buytable[index];
    }
    let index1 = 0;
    targetplanet.resources.forEach(element => {
      if (element.interactiontype == "buy") {
        document.getElementById("buy-data-" + index1 + "-" + 0).innerText = element.name;
        document.getElementById("buy-data-" + index1 + "-" + 1).innerText = element.amount;      
        document.getElementById("buy-data-" + index1 + "-" + 2).innerText = "";
        document.getElementById("buy-data-" + index1 + "-" + 3).innerText = "";  
        document.getElementById("buy-data-" + index1 + "-" + 4).innerText = element.cost;
        let inputbox = '<input id="inpx" class="large" type="number" min="0" max="1000" step="1">'.replace(/x/g, index1);
        document.getElementById("buy-data-" + index1 + "-" + 5).innerHTML = inputbox;      
        document.getElementById("buy-data-" + index1 + "-" + 6).innerText = "";
        index1 ++;         
      }      
    }); 

  }
  
}


function makeHTMLTable(tablename, nrows, ncolumns) {      // generate HTML for table (each element has a unique id)
  const starttab = '<table id="';
  let rowstart = '<tr id="rowname">';
  let tabhead = '<th id="headname"></th>';
  let tabdata = '<td id="dataname"></td>';
  const rowend = '</tr>';
  const tabend = '</table>';
  let tableHTML = starttab + tablename + '">' + rowstart;
  tableHTML = tableHTML.replace(/rowname/g, tablename + '-' + "headrow");
  for (let index = 0; index < ncolumns; index++) {      // create the header row
    tableHTML = tableHTML + tabhead;
    tableHTML = tableHTML.replace(/headname/g, tablename + '-header-' + index);
  }
  tableHTML = tableHTML + rowend;

  for (let index = 0; index < nrows; index++) {
    tableHTML = tableHTML + rowstart;
    tableHTML = tableHTML.replace(/rowname/g, tablename + '-' + 'datarow-' + index);
    for (let index1 = 0; index1 < ncolumns; index1++) {
      tableHTML = tableHTML + tabdata;
      tableHTML = tableHTML.replace(/dataname/g, tablename + '-data-' + index + '-' + index1);      
    }
    tableHTML = tableHTML + rowend;
  }

  tableHTML = tableHTML + tabend
  return tableHTML;
}


function openModal(modalName) {         // open a generic modal
  var modal = document.getElementById(modalName);
  console.log(modalName);
  modal.style.display = "block";
  if (modalName == "settingsModal") {
    readSliders("colorrange", "colorrangenum");
    readSliders("heightrange", "heightrangenum");
  }
  if (modalName == "gameWonModal") { showFinalStats(); }

  // Get the <span> element that closes the modal
  let modalNum = 0;
  if (modalName == "settingsModal") { modalNum = 1; }
  var span = document.getElementsByClassName("close")[modalNum];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    if (modalName == "settingsModal") { restartGame(); }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      if (modalName == "settingsModal") { restartGame(); }
    }
  }
}
