import { ContactList } from './models/ContactList';
import { ContactView } from './views/ContactView';
import { ContactController } from './controllers/ContactController';

const model = new ContactList();
const view = new ContactView();
const controller = new ContactController(model, view);

view.section('1) Mostrar la lista inicial (vacía)');
controller.showContacts();

view.section('2) Agregar dos nuevos contactos');
controller.add('Ana López', 'ana@example.com', '9555-1001');
controller.add('Juan Pérez', 'juan@example.com', '9855-1002');

view.section('3) Mostrar la lista actualizada');
controller.showContacts();

view.section('4) Eliminar un contacto por ID');
const current = model.getContacts();
if (current.length > 0) {
  const idToRemove = current[0].id;
  controller.remove(idToRemove);
}

view.section('5) Intentar eliminar un ID inexistente');
controller.remove('9');

view.section('6) Mostrar la lista final de contactos');
controller.showContacts();


