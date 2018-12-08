/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Homebrew Syntax - ClassSubList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"paladin", 
	
	"oath of zeal", 	
	{ 
		regExpSearch : /^(?=.*(zeal|enthusiasm))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
		subname : "Oath of Zeal", 
		source : ["HB", 0], 
		features : { 
			"subclassfeature3" : { 
				name : "Sacred Weapon",
				source : [["SRD", 33], ["P", 86]],
				minlevel : 3,
				description : "\n   " + "As an action, for 1 minute, I add my Cha modifier to hit for one weapon I'm holding" + "\n   " + "It also counts as magical and emits bright light in a 20-ft radius and equal dim light",
				action : ["action", ""],
				calcChanges : {
						function (fields, v, output) {
							if (classes.known.paladin && classes.known.paladin.level > 2 && !v.isSpell && (/^(?=.*sacred)(?=.*weapon).*$/i).test(v.WeaponText)) {
								output.extraHit += What('Cha Mod');
							};
						},
						"If I include the words 'Sacred Weapon' in the name or description of a weapon, it gets my Charisma modifier added to its To Hit."
					]
				}
			},
			"subclassfeature3.1" : {
				name : "Channel Divinity: Vow of Emnity",
				source : ["P", 88],
				minlevel : 3,
				description : "\n   " + "Use bonus action to make a vow against a creature you can see within 10 ft" + "\n   " + "You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious",
				action : ["bonus action", ""]
			},
			"subclassfeature7" : {
				name : "Aura of Devotion",
				source : [["SRD", 33], ["P", 86]],
				minlevel : 7,
				description : "\n   " + "While I'm conscious, allies within range and I can't be charmed",
				additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
				savetxt : { immune : ["charmed"] }
			},
			"subclassfeature15" : {
				name : "Purity of Spirit",
				source : [["SRD", 33], ["P", 86]],
				minlevel : 15,
				description : "\n   " + "I am always under the effect of a Protection from Evil and Good spell"
			},
			"subclassfeature20" : {
				name : "Elder Champion",
				source : ["P", 87],
				minlevel : 20,
				description : "\n   " + "As an action, I transform into force of nature for 1 minute" + "\n   " + "At the start of each turn, regain 10 hp" + "\n   " + "Any paladin spell with a casting time of 1 action can instead by cas using a bonus action" + "\n   " + "Enemy creatures within 10 ft have disadvantage on saving throws against your spells and channel divinities",
				recovery : "long rest",
				usages : 1,
				action : ["action", ""]
		}
	}
);
