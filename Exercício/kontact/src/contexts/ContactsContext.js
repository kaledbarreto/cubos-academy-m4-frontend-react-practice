import { createContext } from 'react';
import useContacsProvider from '../hooks/useContactsProvider';

const ContactsContext = createContext();

export function ContactsProvider(props) {
  const contactsProvider = useContacsProvider();

  return (
    <ContactsContext.Provider value={contactsProvider}>
      {props.children}
    </ContactsContext.Provider>
  )
}