import { render, screen, fireEvent } from "@testing-library/react"
import Like from '../Like'


test("Check 0 likes by default", ()=>{
    render(<Like/>);
    // const p1=screen.getByTestId("p1")
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})


test("check incriment by like btn",()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();

})

test("check decriment by dislike btn",()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();

})