import { Outlet } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div>
        <h1>Hello World!</h1>
      </div>
      <Outlet />
    </>
  );
}
