import { ContactList } from '../models/ContactList';
import { ContactView } from '../views/ContactView';

export class ContactController {
  constructor(private model: ContactList, private view: ContactView) {}

  public add(nombre: string, email: string, telefono: string): void {
    const contact = this.model.addContact(nombre, email, telefono);
    this.view.displayMessage(`Contacto agregado: ${contact.nombre} (${contact.id})`);
  }

  public remove(id: string): void {
    const removed = this.model.deleteContact(id);
    if (removed) {
      this.view.displayMessage(`Contacto eliminado: ${id}`);
    } else {
      this.view.displayMessage(`No se encontró contacto con ID: ${id}`);
    }
  }

  public showContacts(): void {
    this.view.displayContacts(this.model.getContacts());
  }
}

export default ContactController;


