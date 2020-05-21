export function SetStatusIcon( status ) {
  var icon;
  if (status === "read") {
    icon = "check_circle_outline";
  } else if (status === "in progress") {
    icon = "schedule";
  } else if (status === "unread") {
    icon = "highlight_off"
  }
  return icon;
}

export function ChangeStatus( status ) {
  var newStatus;
  if (status === "read") {
    newStatus = "in progress";
  } else if (status === "in progress") {
    newStatus = "unread";
  } else if (status === "unread") {
    newStatus = "read";
  }
  return newStatus;
}
