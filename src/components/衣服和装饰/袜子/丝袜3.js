import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "丝袜3_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
};

/** @type {Translation.Entry} */
const translation = {
    CN: "丝袜 3",
    EN: "Silk Stockings 3",
    RU: "Шелковые чулки 3",
};

export default function () {
    AssetManager.addAsset(
        "Socks",
        {
            ...asset,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        undefined,
        translation
    );
    AssetManager.addAsset(
        "SocksLeft",
        {
            ...asset,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        undefined,
        translation
    );
    AssetManager.addAsset(
        "SocksRight",
        {
            ...asset,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        undefined,
        translation
    );
}
