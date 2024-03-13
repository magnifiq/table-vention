import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NewForm from "../components/ReactHookFormComponents/NewForm/NewForm";

describe("Dynamic fields in a new form", () => {
  describe("with addition/removal of dynamic fields", () => {
    it("render with addition/removal of dynamic fields", async () => {
      jest.spyOn(console, "log").mockImplementation(() => {});
      const { getByLabelText, getByRole, getAllByLabelText, getAllByRole } =
        render(<NewForm />);
      expect(screen.queryAllByLabelText("Skills")).toHaveLength(0);
      expect(screen.queryAllByLabelText("Hobbies")).toHaveLength(0);

      await act(async () => {
        fireEvent.click(
          getByLabelText("Do you want to fill in additional info?")
        );
      });

      await act(async () => {
        fireEvent.click(getByRole("button", { name: "Append" }));
      });

      expect(getAllByLabelText("Skills")).toHaveLength(2);
      expect(getAllByLabelText("Hobbies")).toHaveLength(2);

      await act(async () => {
        const removeButtons = getAllByRole("button", { name: "Remove" });
        fireEvent.click(removeButtons[0]);
      });

      expect(screen.queryAllByLabelText("Skills")).toHaveLength(1);
      expect(screen.queryAllByLabelText("Hobbies")).toHaveLength(1);
      console.log.mockRestore();
    });
  });
});
