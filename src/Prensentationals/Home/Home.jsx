import Guestbook from "../../Components/Guestbook/Guestbook";
import { InputProvider } from "../../Context-Hooks/InputContext";
import EntryList from "../../Components/EntryList/EntryList";

export default function Home() {
    return (
        <InputProvider>
            <Guestbook />
            <EntryList />
        </InputProvider>
    )
}