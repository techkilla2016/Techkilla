import "./newEvent.scss";
import EventForm from "@/components/events/eventForm";
import Back from "@/components/events/backButton/index";
import Loader from "@/components/events/loader/index";
import { ToastContainer } from "react-toastify";
export default function NewEventPage() {
  return (
    <div className="NewEvent">
      <Back />
      {/* <Loader /> */}
      <EventForm action={"add"} />
      {/* <ToastContainer /> */}
    </div>
  );
}
