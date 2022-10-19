import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {add, remove} from "./personSlice";

export const AddPerson = () => {
    const dispatch = useDispatch();
    const persons = useSelector((state) => state);
    const [newPerson, setNewPerson] = useState("");

    const addPerson = (e) => {
        e.preventDefault();
        dispatch(add(newPerson));
        setNewPerson("");
    }

    const deletePerson = (character) => {
        dispatch(remove(character));
    }

    return (
        <>
            <form onSubmit={addPerson}>
                <label htmlFor="newPerson">Add new person</label>
                <input
                    type="text"
                    id="newPerson"
                    value={newPerson}
                    onChange={(e) => setNewPerson(e.target.value)}
                />
                <button>Add</button>
            </form>
            <ul>
                {persons.map((person, i) => (
                    <li key={i} data-testid="person">
                        <span data-testid="name">{person}</span>{" "}
                        <button type="button" onClick={() => deletePerson(person)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}