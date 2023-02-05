import { Store } from "pullstate";
import LeftBidBubble from "@/components/LeftBidBubble";

export const UIStore = new Store({
    amount: 10000,
    chat: [],
    login: false,
    email: 'user@bidmate.com',
    password: 'password',
    portfolioRows: [
        { id: 1, name: 'Himanshu', amount: 10000, rate: 10, time: 10 },
        { id: 2, name: 'Manya', amount: 12000, rate: 7, time: 12 },
        { id: 3, name: 'Nikita Arora', amount: 50000, rate: 32, time: 40 },
        { id: 4, name: 'Pragati', amount: 19000, rate: 14, time: 19 },
        { id: 5, name: 'Mahua', amount: 23000, rate: 18, time: 6 },
        { id: 6, name: 'Shreya', amount: 22000, rate: 13, time: 9 },
    ],
});