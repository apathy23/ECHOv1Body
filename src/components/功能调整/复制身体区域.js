import { AssetManager } from "../../assetForward";

/**
 * @typedef {Object} CopyGroupInfo
 * @property {CustomGroupBodyName} name
 * @property {AssetGroupBodyName} mirror
 * @property {Translation.Entry} description
 */

/** @type {CopyGroupInfo[]} */
const copyGroups = [
    {
        name: "BodyMarkings2_Luzi",
        mirror: "BodyMarkings",
        description: {
            CN: "🍔身体涂画 2",
            EN: "🍔Body Markings 2",
            RU: "🍔Нарисованные отметины на теле 2",
        },
    },
    {
        name: "Cloth_笨笨蛋Luzi",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服 2",
            EN: "🍔Cloth 2",
            RU: "🍔Одежда 2",
        },
    },
    {
        name: "Cloth_笨笨笨蛋Luzi2",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服 3",
            EN: "🍔Cloth 3",
            RU: "🍔Одежда 3",
        },
    },
    {
        name: "ClothLower_笨笨蛋Luzi",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装 2",
            EN: "🍔Bottom 2",
            RU: "🍔Нижняя одежда 2",
        },
    },
    {
        name: "ClothLower_笨笨笨蛋Luzi2",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装 3",
            EN: "🍔Bottom 3",
            RU: "🍔Нижняя одежда 3",
        },
    },
    {
        name: "Bra_笨笨蛋Luzi",
        mirror: "Bra",
        description: {
            CN: "🍔胸罩 2",
            EN: "🍔Bra 2",
            RU: "🍔Бюстгальтер 2",
        },
    },
    {
        name: "Panties_笨笨蛋Luzi",
        mirror: "Panties",
        description: {
            CN: "🍔内裤 2",
            EN: "🍔Panties 2",
            RU: "🍔Трусики 2",
        },
    },
    {
        name: "Suit_笨笨蛋Luzi",
        mirror: "Suit",
        description: {
            CN: "🍔套装(上身) 2",
            EN: "🍔Suit Upper 2",
        },
    },
    {
        name: "SuitLower_笨笨蛋Luzi",
        mirror: "SuitLower",
        description: {
            CN: "🍔套装(下身) 2",
            EN: "🍔Suit Lower 2",
        },
    },
    {
        name: "ClothAccessory_笨笨蛋Luzi",
        mirror: "ClothAccessory",
        description: {
            CN: "🍔服装配饰 2",
            EN: "🍔Cloth Accessory 2",
            RU: "🍔Аксессуары одежды 2",
        },
    },
    {
        name: "ClothAccessory_笨笨笨蛋Luzi2",
        mirror: "ClothAccessory",
        description: {
            CN: "🍔服装配饰 3",
            EN: "🍔Cloth Accessory 3",
            RU: "🍔Аксессуары одежды 3",
        },
    },
    {
        name: "Necklace_笨笨蛋Luzi",
        mirror: "Necklace",
        description: {
            CN: "🍔项链 2",
            EN: "🍔Necklace 2",
            RU: "🍔Цепочка 2",
        },
    },
    {
        name: "Shoes_笨笨蛋Luzi",
        mirror: "Shoes",
        description: {
            CN: "🍔鞋子 2",
            EN: "🍔Shoes 2",
            RU: "🍔Обувь 2",
        },
    },
    {
        name: "Hat_笨笨蛋Luzi",
        mirror: "Hat",
        description: {
            CN: "🍔帽子 2",
            EN: "🍔Hat 2",
            RU: "🍔Шляпа 2",
        },
    },
    {
        name: "HairAccessory3_笨笨蛋Luzi",
        mirror: "HairAccessory3",
        description: {
            CN: "🍔发饰 2",
            EN: "🍔Hair Accessory 2",
            RU: "🍔Прическа Аксессуар 2",
        },
    },
    {
        name: "Gloves_笨笨蛋Luzi",
        mirror: "Gloves",
        description: {
            CN: "🍔手套 2",
            EN: "🍔Gloves 2",
            RU: "🍔Перчатки 2",
        },
    },
    {
        name: "Mask_笨笨蛋Luzi",
        mirror: "Mask",
        description: {
            CN: "🍔面具 2",
            EN: "🍔Mask 2",
            RU: "🍔Маска 2",
        },
    },
    {
        name: "Wings_笨笨蛋Luzi",
        mirror: "Wings",
        description: {
            CN: "🍔翅膀 2",
            EN: "🍔Wings 2",
            RU: "🍔Крылья 2",
        },
    },
];

export default function () {
    copyGroups.forEach((definition) => {
        AssetManager.addCopyGroup(definition.name, definition.mirror, definition.description);
    });
}
