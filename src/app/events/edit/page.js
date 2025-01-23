import "./editForm.scss";
import EventForm from "@/components/events/eventForm";

export default function EditEventPage() {
  return (
    <div className="EditEventPage">
      <EventForm action={"edit"} />
    </div>
  );
}
