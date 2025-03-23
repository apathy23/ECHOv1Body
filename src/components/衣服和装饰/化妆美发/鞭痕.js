import { AssetManager } from "../../../assetForward";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "鞭痕_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 10,
    Extended: true,
    ParentGroup: "BodyUpper",
    PoseMapping: {
        TapedHands: PoseType.DEFAULT,
        Yoked: PoseType.DEFAULT,
        OverTheHead: PoseType.DEFAULT,
        BackBoxTie: PoseType.DEFAULT,
        BackElbowTouch: PoseType.DEFAULT,
        BackCuffs: PoseType.DEFAULT,
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        { Name: "1", AllowTypes: { typed: [0, 1, 2, 3, 4, 5, 6, 7] } },
        { Name: "2", AllowTypes: { typed: [1, 2, 3, 4, 5, 6, 7] } },
        { Name: "3", AllowTypes: { typed: [2, 3, 4, 5, 6, 7] } },
        { Name: "4", AllowTypes: { typed: [3, 4, 5, 6, 7] } },
        { Name: "5", ParentGroup: {}, AllowTypes: { typed: [4, 5, 6, 7] } },
        { Name: "6", ParentGroup: {}, AllowTypes: { typed: [5, 6, 7] } },
        { Name: "7", ParentGroup: {}, AllowTypes: { typed: [6, 7] } },
        { Name: "8", ParentGroup: {}, AllowTypes: { typed: [7] } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "1" },
        { Name: "2" },
        { Name: "3" },
        { Name: "4" },
        { Name: "5" },
        { Name: "6" },
        { Name: "7" },
        { Name: "8" },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        身体痕迹_Luzi鞭痕_LuziSelect: "设置",
        身体痕迹_Luzi鞭痕_Luzi1: "1",
        身体痕迹_Luzi鞭痕_Luzi2: "2",
        身体痕迹_Luzi鞭痕_Luzi3: "3",
        身体痕迹_Luzi鞭痕_Luzi4: "4",
        身体痕迹_Luzi鞭痕_Luzi5: "5",
        身体痕迹_Luzi鞭痕_Luzi6: "6",
        身体痕迹_Luzi鞭痕_Luzi7: "7",
        身体痕迹_Luzi鞭痕_Luzi8: "8",
    },
    EN: {
        身体痕迹_Luzi鞭痕_LuziSelect: "Select",
        身体痕迹_Luzi鞭痕_Luzi1: "1",
        身体痕迹_Luzi鞭痕_Luzi2: "2",
        身体痕迹_Luzi鞭痕_Luzi3: "3",
        身体痕迹_Luzi鞭痕_Luzi4: "4",
        身体痕迹_Luzi鞭痕_Luzi5: "5",
        身体痕迹_Luzi鞭痕_Luzi6: "6",
        身体痕迹_Luzi鞭痕_Luzi7: "7",
        身体痕迹_Luzi鞭痕_Luzi8: "8",
    },
    UA: {
        身体痕迹_Luzi鞭痕_LuziSelect: "Виберіть кількість знаків",
        身体痕迹_Luzi鞭痕_Luzi1: "1",
        身体痕迹_Luzi鞭痕_Luzi2: "2",
        身体痕迹_Luzi鞭痕_Luzi3: "3",
        身体痕迹_Luzi鞭痕_Luzi4: "4",
        身体痕迹_Luzi鞭痕_Luzi5: "5",
        身体痕迹_Luzi鞭痕_Luzi6: "6",
        身体痕迹_Luzi鞭痕_Luzi7: "7",
        身体痕迹_Luzi鞭痕_Luzi8: "8",
    },
};

const translations = {
    CN: "鞭痕",
    EN: "Whip marks",
    RU: "След удар плет",
    UA: "Знаки від батога",
};

export default function () {
    // @ts-ignore
    AssetManager.addAsset("身体痕迹_Luzi", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
