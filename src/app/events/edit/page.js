import "./editForm.scss";
import EventForm from "@/components/events/eventForm";
import Back from "@/components/events/backButton/index";
export default function EditEventPage() {
  return (
    <div className="EditEventPage">
      <Back />
      <EventForm action={"edit"} />
    </div>
  );
}
