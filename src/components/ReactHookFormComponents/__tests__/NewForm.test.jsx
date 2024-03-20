import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NewForm from "../NewForm/NewForm";

describe("NewForm", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      jest.spyOn(console, "log").mockImplementation(() => {});
      const { getByLabelText, getByRole } = render(<NewForm />);

      await act(async () => {
        fireEvent.change(getByLabelText("name"), {
          target: { value: "Anna" },
        });
        fireEvent.change(getByLabelText("email"), {
          target: { value: "anna@gmail.com" },
        });
        fireEvent.change(getByLabelText("password"), {
          target: { value: "fsrdrhhjddhj" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button", { name: "Submit" }));
      });

      expect(console.log).toHaveBeenCalledWith({
        name: "Anna",
        email: "anna@gmail.com",
        password: "fsrdrhhjddhj",
        additionalInfo: [{ skills: "", hobbies: "" }],
      });

      console.log.mockRestore();
    });
  });

  describe("with invalid name", () => {
    it("render with invalid name value", async () => {
      jest.spyOn(console, "log").mockImplementation(() => {});
      const { getByLabelText, getByRole, getByText } = render(<NewForm />);
      await act(async () => {
        fireEvent.change(getByLabelText("name"), {
          target: { value: "" },
        });
        fireEvent.change(getByLabelText("email"), {
          target: { value: "anna@gmail.com" },
        });
        fireEvent.change(getByLabelText("password"), {
          target: { value: "fsrdrhhjddhj" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button", { name: "Submit" }));
      });

      expect(console.log).not.toHaveBeenCalled();
      expect(screen.getByText("Put your name please")).toBeInTheDocument();
      console.log.mockRestore();
    });
  });

  describe("with invalid email", () => {
    it("render with invalid email value", async () => {
      jest.spyOn(console, "log").mockImplementation(() => {});
      const { getByLabelText, getByRole, getByText } = render(<NewForm />);
      await act(async () => {
        fireEvent.change(getByLabelText("name"), {
          target: { value: "Anna" },
        });
        fireEvent.change(getByLabelText("email"), {
          target: { value: "" },
        });
        fireEvent.change(getByLabelText("password"), {
          target: { value: "fsrdrhhjddhj" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button", { name: "Submit" }));
      });

      expect(console.log).not.toHaveBeenCalled();
      expect(screen.getByText("Put your email please")).toBeInTheDocument();
      console.log.mockRestore();
    });
  });

  describe("with invalid password", () => {
    it("render with invalid password value", async () => {
      jest.spyOn(console, "log").mockImplementation(() => {});
      const { getByLabelText, getByRole, getByText } = render(<NewForm />);
      await act(async () => {
        fireEvent.change(getByLabelText("name"), {
          target: { value: "Anna" },
        });
        fireEvent.change(getByLabelText("email"), {
          target: { value: "anna@gmail.com" },
        });
        fireEvent.change(getByLabelText("password"), {
          target: { value: "fg" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button", { name: "Submit" }));
      });

      expect(console.log).not.toHaveBeenCalled();
      expect(screen.getByText("The min length is 10")).toBeInTheDocument();
      console.log.mockRestore();
    });
  });
});
