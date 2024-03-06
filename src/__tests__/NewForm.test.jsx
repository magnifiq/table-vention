import React from "react"
import NewForm from '../components/2nd_components/NewForm/NewForm'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in component:", error);
    console.error("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}
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

  describe("with invalid name", ()=>{
      it("render with invalid name value", async ()=>{
        jest.spyOn(console, "log").mockImplementation(() => {});
        const { getByLabelText, getByRole } = render(<NewForm />);
        await act(async()=>{
            fireEvent.change(getByLabelText("name"), {
              target: { value: "" },
            });
            fireEvent.change(getByLabelText("email"), {
              target: { value: "anna@gmail.com" },
            });
            fireEvent.change(getByLabelText("password"), {
              target: { value: "fsrdrhhjddhj" },
            });
        })

        await act(async()=>{
            fireEvent.click(getByRole('button', {name: "Submit"}))
        })

        
      })
  })
});