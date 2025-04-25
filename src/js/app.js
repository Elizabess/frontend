import TicketsList from "./tickets";
import Controller from "./contr";

const container = document.getElementById("container");
const ticketsList = new TicketsList(container);

const controller = new Controller(ticketsList);
controller.init();