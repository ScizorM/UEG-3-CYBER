export { marqueWeaponFunctions, marqueWeaponNames, marqueWeaponDescs, marqueWeaponIcons, marqueWeaponPrices, marqueUnlockTests }
import {skinList } from './skinList.js'

const marqueWeaponFunctions = new Array(
    "unlock_prism",
    "unlock_emp_drive",
    "unlock_scaler_bomb",
    "unlock_implosion_grenade",
    "unlock_parry_fist",
    "unlock_solis_cannon",
    "unlock_frigidus_cannon",
    "unlock_emp_trap",
    "unlock_deep_striker"
)

const marqueWeaponNames = new Array(
    "Antigravity Prism ",
    "Disruptor Array ",
    "Scaler Bomb ",
    "Implosion Grenade /",
    "Parry Fist /",
    "Daedalus & Icarus ",
    "Datura L17 ",
    "Archerfish ",
    "The Deep Striker "
)

const marqueWeaponDescs = new Array(
    " - Causes all nearby players to temporarily rise in the air\n\nWeapon Designer: ScizorM\nMechanic Designer: ScizorM",
    " - Stuns all nearby enemies and blocks.\n\nWeapon Designer: ScizorM\nMechanic Designer: ScizorM",
    " - Spawns a floating mine that increases the hitbox of all nearby players when hit\n\n(Protip: the more mines nearby, the larger the hitbox, and thus, it works very well with another accuracy-based item)\n\nWeapon Designer: ScizorM\nMechanic Designer: ScizorM",
    " - Tosses a grenade that pulls nearby enemies to its location when landing.\n\n(Protip: can be used as a recovery item to stall falling)\n\nWeapon Designer: ScizorM\nMechanic Designer: SmashedEGG, ScizorM",
    " - Converts any nearby Vulcan Cannon projectiles into a high-power explosive blast\n\n(Protip: this weapon can be used in combination with your own Vulcan Cannon to deal extra damage.)\n\nWeapon Designer: ScizorM\nMechanic Designer: ScizorM (ULTRAKILL reference)",
    " - Fires a weak explosive charge at a rapid rate. When fired too quickly, the weapon will overheat, causing an explosion and temporarily igniting the player and causing darkness.\n\n`Don't fly too close to the sun.`\n\nWeapon Designer: ScizorM\nMechanic Designer: zeerye",
    " - Fires a ball of smog that leaves a zone of smoke that blinds any players inside of it\n\nWeapon Designer: zeerye\nMechanic Designer: zeerye",
    " - Fires a blast of water that causes slowness and destroys all nearby fire\n\n(Protip: this weapon can be used in combination with the Daedalus & Icarus to prevent your weapon from overheating.)\n\nWeapon Designer: zeerye, ScizorM, evel\nMechanic Designer: zeerye, ScizorM, evel",
    " - This weapon has three modes:\n1) When a player is in the crosshair, this weapon will explode them, launching them in the air.\n2) If there is no player but a block is present in the crosshair, the block will explode.\n3) If there is neither a player nor a block, the gun will turn around and shoot you instead, launching you backwards.\n\n(Protip: Missing your shot intentionally can allow you to gain range on your enemies easily.)\n\nWeapon Designer: ScizorM\nMechanic Designer: Spyrotikus, SmashedEGG, ScizorM"
)

const marqueWeaponIcons = new Array(
    "textures/items/antigravity_prism",
    "textures/items/emp_drive",
    "textures/items/scaler_bomb",
    "textures/items/implosion_grenade",
    "textures/items/parry_fist",
    "textures/items/flare_cannon",
    "textures/items/smorgler",
    "textures/items/emp_trap",
    "textures/items/deep_striker"
)

const marqueWeaponPrices = new Array(
    20,
    20,
    30,
    30,
    40,
    40,
    20,
    20,
    50
)

const marqueUnlockTests = new Array(
    "prism",                                  // Antigravity Prism
    "emp_drive",                              // Disruptor Array
    "scaler_bomb",                            // Scaler Bomb
    "implosion_grenade",                      // Implosion Grenade
    "parry_fist",                             // Parry Fist
    "solis_cannon",                           // Daedalus & Icarus
    "frigidus_cannon",                        // Datura L17
    "emp_trap",                               // Archerfish
    "deep_striker"                            // The Deep Striker
)