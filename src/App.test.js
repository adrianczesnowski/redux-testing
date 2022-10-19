import { render, screen, within, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import {AddPerson} from "./AddPerson";
import storeConfig from "./store";

describe('PersonsList', () => {
  const renderOfficeCharacters = () => {
    const store = storeConfig();

    render(
        <Provider store={store}>
          <AddPerson />
        </Provider>
    );

    return {
      newCharacter: screen.getByLabelText("Add new person"),
      addButton: screen.getByText("Add"),
      getPersons() {
        return screen.getAllByTestId("person").map((item) => ({
          // within - get name from list
          name: within(item).getByTestId("name").textContent,
          deleteButton: within(item).getByText("Delete")
        }));
      }
    };
  };

  it("should add a new person", () => {
    const { newCharacter, addButton, getPersons } = renderOfficeCharacters();

    const testPerson = "Jan Nowak";

    // verify testPerson is not in the initial list
    expect(
        getPersons().find((person) => person.name === testPerson)
    ).toBeFalsy();

    // add testPerson
    fireEvent.change(newCharacter, { target: { value: testPerson } });
    fireEvent.click(addButton);

    // verify testPerson is first in the list
    expect(
        getPersons().findIndex((person) => person.name === testPerson)
    ).toBe(0);
  });

  test("should delete a person", () => {
    const { getPersons } = renderOfficeCharacters();

    const delPerson = "Adrian Czesnowski";

    const deletePerson = getPersons().find(
        (person) => person.name === delPerson
    ).deleteButton;

    // delete person
    fireEvent.click(deletePerson);

    // verify person is not in the list
    expect(
        getPersons().find((person) => person.name === delPerson)
    ).toBeFalsy();
  });

});
