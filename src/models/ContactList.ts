import type { Contact } from './Contact';

export class ContactList {
  private contacts: Contact[] = [];
  private nextNumericId = 1;

  public getContacts(): Contact[] {
    return [...this.contacts];
  }

  public addContact(nombre: string, email: string, telefono: string): Contact {
    const newContact: Contact = {
      id: String(this.nextNumericId++),
      nombre,
      email,
      telefono,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  public deleteContact(id: string): boolean {
    const originalLength = this.contacts.length;
    this.contacts = this.contacts.filter((c) => c.id !== id);
    return this.contacts.length !== originalLength;
  }
}

export default ContactList;


