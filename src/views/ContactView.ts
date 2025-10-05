import type { Contact } from '../models/Contact';

export class ContactView {
  public section(title: string): void {
    const minWidth = 32;
    const width = Math.max(minWidth, title.length + 2);
    const border = '='.repeat(width);
    const totalPadding = width - title.length;
    const left = Math.floor(totalPadding / 2);
    const right = totalPadding - left;
    const centered = `${' '.repeat(left)}${title}${' '.repeat(right)}`;
    console.log('\n');
    console.log(border);
    console.log(centered);
    console.log(border);
  }

  public displayContacts(contacts: Contact[]): void {
    if (contacts.length === 0) {
      console.log('No hay contactos para mostrar.');
      return;
    }

    const pad = (value: string, width: number) => value.padEnd(width, ' ');
    const header = `${pad('ID', 4)} | ${pad('Nombre', 20)} | ${pad('Email', 26)} | ${pad('Teléfono', 12)}`;
    console.log(header);
    console.log('-'.repeat(header.length));
    for (const c of contacts) {
      const row = `${pad(c.id, 4)} | ${pad(c.nombre, 20)} | ${pad(c.email, 26)} | ${pad(c.telefono, 12)}`;
      console.log(row);
    }
  }

  public displayMessage(message: string): void {
    console.log('> ' + message);
  }
}

export default ContactView;


