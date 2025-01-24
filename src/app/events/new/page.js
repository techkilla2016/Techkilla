import "./newEvent.scss";
import EventForm from "@/components/events/eventForm";

export default function NewEventPage() {
  return (
    <div className="NewEvent">
      <EventForm action={"add"} />
    </div>
  );
}
