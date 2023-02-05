import { Store } from "pullstate";
import LeftBidBubble from "@/components/LeftBidBubble";

export const UIStore = new Store({
    amount: 10000,
    chat: [
        <LeftBidBubble key={1} amount={10000} rate={10} time={12} />
    ],
    login: false,
    email: 'user@bidmate.com',
    password: 'password',
});