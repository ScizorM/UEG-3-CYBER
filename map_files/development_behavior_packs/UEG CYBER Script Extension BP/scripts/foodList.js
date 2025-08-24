export { itemNameList, itemIconLocation, itemScoreboard, itemDescList, goblinShopItemList, itemBundleCostList, itemBundleFunctionList, itemBundleIconList, itemBundleNameList, foodShopLength, itemPrices, goblinShopBundleList, bundleShopLength, itemBundleDescList, freedomShopItemList }

const itemNameList = new Array(
    "Gob Dog",
    "Gob Fries",
    "Freedom Burger",
    "Hog Ramen"
)

const itemDescList = new Array(
    "A hot dog with an unpleasant green sludge splattered all over it.\n\nWhen consumed, it grants the following effects:\n\n- §aJump Boost IX (5 Seconds)\n§r- §cNausea IX (10 Seconds)\n§r- §6Gob Goo follows you around\n\n§eThis item can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n",
    "A pack of fries with an unpleasant green sludge splattered all over them.\n\nWhen consumed, it grants the following effects:\n\n- §aSpeed IX (5 Seconds)\n§r- §cNausea IX (10 Seconds)\n§r- §6Gob Goo follows you around\n\n§eThis item can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n",
    "A cheeseburger with the essence of freedom infused within it.\n\nWhen consumed, it grants the following effects:\n\n- §aReplaces projectiles from the Vulcan Cannon with a `freedom horse` cluster bomb for three shots.§r\n- §cAll shots are lost when you die/respawn, and when the game ends.§r\n- §cAlso, this comes at the cost of extreme slowness while firing the Vulcan Cannon.\n\n§eThis item can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n",
    "A bowl of ramen with tusks covered in unidentifiable runes. Somehow, the steam coming off the broth seems to never subside.\n\nWhen consumed, it grants the following effects:\n\n- §aFor the next three hits with the Repulsion Blade, an explosion will spawn on the hit player, launching you backwards.\n§r- §aSlow Falling is granted upon hit.\n§r- §aA hog that can be used to chain the explosion combo spawns on hit.\n\n§eThis item can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n"
)



const itemIconLocation = new Array(
    "textures/items/foods/gob_dog",
    "textures/items/foods/gob_fries",
    "textures/items/foods/freedom_burger",
    "textures/items/foods/hog_ramen"
)

const itemScoreboard = new Array(
    "gob_dog_count",
    "gob_fries_count",
    "freedom_burger_count",
    "hog_ramen_count"
    //"cyber_hog_count"
    //knob berries? suggested by aubrey
)

const itemPrices = new Array(
    2, //gob dog
    2, //gob fries
    5, //freedom burger
    5  //hog ramen
)

const itemBundleNameList = new Array(
    "Gob Dog Giddy Meal",
    "Gob Fries Giddy Meal"
)

const itemBundleDescList = new Array(
    "A meal deal box containing ten gob dogs and a mystery prize contained in a mysterious container.\n\n§eAn included item in this bundle can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n",
    "A meal deal box containing ten gob fry packs and a mystery prize contained in a mysterious container.\n\n§eAn included item in this bundle can be applied to your §bUtility Lunchbox §eat Marque's Weapon Center.\n\n"
)

const itemBundleFunctionList = new Array(
    "function unlock_gob_goo_cannon", //note to self: for the following two meals if the "toys" are already unlocked, just make them come with extra food
    "function unlock_gobbler_cannon"
)

const itemBundleIconList = new Array(
    "textures/items/foods/bundle_gob_dog",
    "textures/items/foods/bundle_gob_fries"
)

const itemBundleCostList = new Array(
    20, //gob dog bundle
    20 //gob fries bundle
)

const goblinShopItemList = new Array(
    0, //Gob Dog
    1, //Gob Fries
)

const goblinShopBundleList = new Array(
    0, //Dog Bundle
    1 // Fries Bundle
)

const freedomShopItemList = new Array(
    2, //Freedom Burger
    2
)

const foodShopLength = new Array(
    goblinShopItemList.length,
    1
)

const bundleShopLength = new Array(
    goblinShopBundleList.length,
    0
)
