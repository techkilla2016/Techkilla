import "./newEvent.scss";
import EventForm from "@/components/events/eventForm";
import Back from "@/components/events/backButton/index";
import Loader from "@/components/events/loader/index";
export default function NewEventPage() {
  return (
    <div className="flex-col-center NewEvent">
      <Back />
      {/* <Loader /> */}
      <EventForm action={"add"} />
    </div>
  );
}
