import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1n87jry6em8yxmqd6dp5p8gv3ytsldqxhxmr3zn0d3y7tv0v8px2qz4yfey",
            cw721: "andr14z73p284273f4yn402qdxqfcsmcmvp3hjjxehar8ds53726ary3sn7m76w",
            name: "HighGround",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        }
    ],
};

export default CONFIG;
