import { Suspense } from "react";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import { ToastContainer } from "react-toastify";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

const App = () => {
  const ordersPromise = loadOrders();

  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={"Loading ⌛"}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
