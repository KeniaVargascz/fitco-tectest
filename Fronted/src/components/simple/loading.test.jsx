import { render, screen } from "@testing-library/react";
import LoadingComponent from "./loading"; 

describe("LoadingComponent", () => {
    test("render", () => {
        render(<LoadingComponent />);
      
        const progressElement = screen.getByRole("progressbar");
        expect(progressElement).toBeInTheDocument();
      });
});
